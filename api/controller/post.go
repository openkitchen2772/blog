package controller

import (
	"api/model"
	"encoding/json"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"go.mongodb.org/mongo-driver/mongo"
)

type PostController struct {
	client   *mongo.Client
	database string
}

func NewPostController(client *mongo.Client, database string) PostController {
	return PostController{client: client, database: database}
}

func (pc PostController) GetPosts(rw http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	posts, err := model.GetAll(pc.client, pc.database)
	if err != nil {
		http.Error(rw, "Internal Server Error: Database\n", http.StatusInternalServerError)
		return
	}

	var bs []byte
	bs, err = json.Marshal(posts)
	if err != nil {
		http.Error(rw, "Internal Server Error: Json convertion failed.\n", http.StatusInternalServerError)
		return
	}

	if _, err = rw.Write(bs); err != nil {
		http.Error(rw, "Internal Server Error: Write response failed.\n", http.StatusInternalServerError)
		return
	}
}
