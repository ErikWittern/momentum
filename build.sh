docker build -t momentum:production .
cd docker/db/ && docker build -f Dockerfile -t momentum-postgres:production .
