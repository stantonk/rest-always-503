all: build push

build:
	docker build -t rest-always-503 .
	docker tag rest-always-503:latest stantonk/rest-always-503:latest

push:
	docker push stantonk/rest-always-503:latest
