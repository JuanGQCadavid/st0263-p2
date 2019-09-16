#!bin//bash

echo "Checking if docker is installed"
if ! [ -x "$(command -v docker)" ]; then

    echo "Install and start docker"
    yum update -y
    yum install -y docker
    service docker start

    usermod -a -G docker ec2-user
    echo "Installing docker compose"
    sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose

    
else
    echo 'Docker is installed'
fi

docker stop twitter-front
docker rm twitter-front

docker build -t twitter-img .

docker run --name twitter-front \
    -p 80-443-5000:80-443-5000 \
    -d \
    twitter-img