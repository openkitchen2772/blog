package model

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

// Post model with tags
type Post struct {
	Id      string `bson:"_id" json:"id"`
	Title   string `bson:"title" json:"title"`
	Time    string `bson:"time" json:"time"`
	Content string `bson:"content" json:"content"`
}

func Get(id string, client *mongo.Client, database string) Post {
	var post Post
	filter := bson.M{
		"_id": id,
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	result := client.Database(database).Collection(PostCollection).FindOne(ctx, filter)
	result.Decode(&post)

	return post
}

func GetAll(client *mongo.Client, database string) ([]Post, error) {
	var posts []Post
	filter := bson.M{}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cursor, err := client.Database(database).Collection("posts").Find(ctx, filter)
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
