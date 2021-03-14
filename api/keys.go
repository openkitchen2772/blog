package main

import (
	"encoding/json"
	"log"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/secretsmanager"
)

type secret struct {
	Host     string `json:"MONGO_HOST_PROD"`
	Database string `json:"MONGO_DB_PROD"`
	Username string `json:"MONGO_USERNAME_PROD"`
	Password string `json:"MONGO_PASSWORD_PROD"`
}

var ENV string
var ENV_DEV string
var ENV_PROD string
var MONGO_HOST string
var MONGO_DB string
var MONGO_USERNAME string
var MONGO_PASSWORD string

func InitKeys() {
	// var envPROD = "production"
	ENV_DEV = "development"
	ENV_PROD = "production"

	ENV = os.Getenv("APP_ENV")
	if ENV == ENV_DEV {
		MONGO_HOST = os.Getenv("MONGO_HOST_DEV")
		MONGO_DB = os.Getenv("MONGO_DB_DEV")
		MONGO_USERNAME = os.Getenv("MONGO_USERNAME_DEV")
		MONGO_PASSWORD = os.Getenv("MONGO_PASSWORD_DEV")
	} else {
		var sec secret
		secretStr := getSecretKeyFromAWS()
		err := json.Unmarshal([]byte(secretStr), &sec)
		if err != nil {
			log.Fatalln(err.Error())
		}

		log.Println(secretStr)
		log.Printf("%+v\n", sec)

		MONGO_HOST = sec.Host
		MONGO_DB = sec.Database
		MONGO_USERNAME = sec.Username
		MONGO_PASSWORD = sec.Password
	}
}

func getSecretKeyFromAWS() string {
	secretName := os.Getenv("AWS_SECRET_NAME")
	region := os.Getenv("AWS_REGION")

	svc := secretsmanager.New(session.New(), aws.NewConfig().WithRegion(region))
	input := &secretsmanager.GetSecretValueInput{
		SecretId:     aws.String(secretName),
		VersionStage: aws.String("AWSCURRENT"),
	}

	result, err := svc.GetSecretValue(input)
	if err != nil {
		log.Println(err.Error())
	}

	return *result.SecretString
}
