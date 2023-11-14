domain=tttlkkkl/sui_com
t?=latest
build:
	docker build -t $(domain):$(t) $(shell pwd)
	docker push $(domain):$(t)
run:
	docker run -d --restart always -p 8099:80 $(domain):$(t)
	docker ps