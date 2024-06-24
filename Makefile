run:
	docker run -p 3000:3000 --env-file ./.env --rm --name clickerItem clicker
stop:
	docker stop clickerItem