# Simple Node.js Docker App

## Build Docker Image

```bash
docker build -t my-node-app .
```

## Run Container

```bash
docker run -d -p 3000:3000 --name node-app my-node-app
```

## Test

```bash
curl http://localhost:3000
```

Expected Output:

```json
{
  "message": "Hello from Dockerized Node.js App!",
  "hostname": "container-id",
  "timestamp": "2026-07-05T12:00:00.000Z"
}
```
