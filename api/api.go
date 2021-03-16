package main

import (
	"api/controller"
	"context"
	"io"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/julienschmidt/httprouter"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	InitKeys()
	ctx, client := connectDB(MONGO_HOST, MONGO_DB, MONGO_USERNAME, MONGO_PASSWORD)
	defer disconnectDB(ctx, client)
	pc := controller.NewPostController(client, MONGO_DB)

	r := httprouter.New()
	r.GET("/post/:id", pc.GetPost)
	r.GET("/posts", pc.GetPosts)
	r.GET("/hello", hello)
	http.ListenAndServe(":8080", r)
}

func hello(rw http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	io.WriteString(rw, "Welcome to Daily Blog!")
}

func connectDB(host string, database string, username string, pw string) (context.Context, *mongo.Client) {
	var client *mongo.Client
	var err error

	// Different auth methods for ENV_DEV and ENV_PROD
	if ENV == ENV_DEV {
		credential := options.Credential{
			Username: username,
			Password: pw,
		}
		client, err = mongo.NewClient(options.Client().ApplyURI(host).SetAuth(credential))
	} else {
		uri := strings.Replace(host, "<password>", pw, 1)
		uri = strings.Replace(uri, "myFirstDatabase", database, 1)
		log.Println(uri)
		client, err = mongo.NewClient(options.Client().ApplyURI(uri))
	}

	if err != nil {
		log.Fatal(err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err = client.Connect(ctx); err != nil {
		log.Fatal(err)
	}

	return ctx, client
}

func disconnectDB(ctx context.Context, client *mongo.Client) {
	if err := client.Disconnect(ctx); err != nil {
		log.Fatal(err)
	}
}
