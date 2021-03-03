FROM golang:alpine

WORKDIR /go/src

COPY . .
RUN go mod init api
RUN go get -d -v github.com/julienschmidt/httprouter
RUN go install -v github.com/julienschmidt/httprouter
RUN go build -v

EXPOSE 8080
ENTRYPOINT [ "./api" ]