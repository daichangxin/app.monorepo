#!/bin/bash

IMAGE_NAME="app.mono"
CONTAINER_NAME="app.mono"

docker run --restart=always -p 3008:3000 -v $(pwd)/logs:/app/server/logs --add-host='host.docker.internal:host-gateway' -itd --name $CONTAINER_NAME $IMAGE_NAME
