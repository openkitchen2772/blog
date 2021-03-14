package model

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Post model with tags
type Post struct {
	Title   string `bson:"title" json:"title"`
	Time    string `bson:"time" json:"time"`
	Content string `bson:"content" json:"content"`
}

func GetAll(client *mongo.Client, database string) ([]Post, error) {
	var posts []Post
	filter := bson.M{}
	project := options.Find()
	project.Projection = bson.M{
		"_id": 0,
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cursor, err := client.Database(database).Collection("posts").Find(ctx, filter, project)
	defer cursor.Close(ctx)
	if err != nil {
		log.Println(err)
		log.Printf("[MongoDB]GetAll(), Error: Cannot retrieve data from %v.<Posts>.\n", database)
		return []Post{}, err
	}

	for cursor.Next(ctx) {
		var post Post
		if err = cursor.Decode(&post); err != nil {
			log.Println(err)
			log.Printf("[MongoDB]GetAll(), Error: Fail to decode data from %v.<Posts>.\n", database)
			return []Post{}, err
		}

		posts = append(posts, post)
	}

	return posts, nil
}
