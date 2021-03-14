FROM golang:alpine

WORKDIR /go/src

ENV APP_ENV=production
ENV AWS_SECRET_NAME=mongo-blog
ENV AWS_REGION=us-east-2

COPY . .
RUN go get -v github.com/julienschmidt/httprouter
RUN go get -v go.mongodb.org/mongo-driver/mongo
RUN go get -v github.com/aws/aws-sdk-go
RUN go build -v

EXPOSE 8080
ENTRYPOINT [ "./api" ]