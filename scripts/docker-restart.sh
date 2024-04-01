#!/bin/bash

DOCKERFILE_PATH="./Dockerfile"
IMAGE_NAME="app.mono"
CONTAINER_NAME="app.mono"

# rebuild image
docker build -f $DOCKERFILE_PATH -t $IMAGE_NAME . --network host

# check if container exists
if [ "$(docker inspect -f '{{.State.Running}}' $CONTAINER_NAME 2>/dev/null)" == "true" ]; then
  docker stop $CONTAINER_NAME >/dev/null 2>&1
  docker rm $CONTAINER_NAME >/dev/null 2>&1
fi

# run container
echo "logs: $(pwd)/logs"
docker run --restart=always -p 3008:3000 -v $(pwd)/logs:/app/server/logs --add-host='host.docker.internal:host-gateway' -itd --name $CONTAINER_NAME $IMAGE_NAME

# cleanup unused images
docker image prune -f

# check if container is running
if [ "$(docker inspect -f '{{.State.Running}}' $CONTAINER_NAME 2>/dev/null)" == "true" ]; then
  echo "the container is running"
else
  echo "the container is not running"
fi
