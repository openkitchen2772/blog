package main

import (
	"io"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func main() {
	r := httprouter.New()
	r.GET("/hello", hello)

	http.ListenAndServe(":8080", r)
}

func hello(rw http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	io.WriteString(rw, "Welcome to Daily Blog!")
}
