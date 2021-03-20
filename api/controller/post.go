package controller

import (
	"api/model"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"
	"path"

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

func (pc PostController) GetPost(rw http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	post := model.Get(ps.ByName("id"), pc.client, pc.database)

	bs, err := json.Marshal(post)
	if err != nil {
		log.Println(err.Error())
		http.Error(rw, "Internal Server Error: Database", http.StatusInternalServerError)
		return
	}

	if _, err = rw.Write(bs); err != nil {
		log.Println(err.Error())
		http.Error(rw, "Internal Server Error: Write response failed.\n", http.StatusInternalServerError)
		return
	}
}

func (pc PostController) GetPosts(rw http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	posts, err := model.GetAll(pc.client, pc.database)
	if err != nil {
		log.Println(err.Error())
		http.Error(rw, "Internal Server Error: Database\n", http.StatusInternalServerError)
		return
	}

	var bs []byte
	bs, err = json.Marshal(posts)
	if err != nil {
		log.Println(err.Error())
		http.Error(rw, "Internal Server Error: Json convertion failed.\n", http.StatusInternalServerError)
		return
	}

	if _, err = rw.Write(bs); err != nil {
		log.Println(err.Error())
		http.Error(rw, "Internal Server Error: Write response failed.\n", http.StatusInternalServerError)
		return
	}
}

func (pc PostController) GetUploadImage(rw http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	root, _ := os.Getwd()
	image := ps.ByName("filename")

	path := path.Join(root, "upload", "image", image)
	f, err := os.Open(path)
	if err != nil {
		log.Println(err.Error())
		http.Error(rw, "Error: Unable to open image file: "+path, http.StatusNotFound)
	}

	io.Copy(rw, f)
}
