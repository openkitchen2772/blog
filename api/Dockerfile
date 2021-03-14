FROM golang:alpine

WORKDIR /go/src

COPY . .
RUN go get -v github.com/julienschmidt/httprouter
RUN go get -v go.mongodb.org/mongo-driver/mongo
RUN go get -v github.com/aws/aws-sdk-go
RUN go build -v

EXPOSE 8080
ENTRYPOINT [ "./api" ]