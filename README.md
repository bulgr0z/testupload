docker build -t testupload .
docker run -it --add-host=host.docker.internal:host-gateway -p 3000:3000 testupload
