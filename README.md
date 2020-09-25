## request as response mock server for local development

### Run

default port 9000
```shell
npx --package github:ruiyang/rar-mock-server start
```

to run in a different port 3000
```shell
PORT=3000 npx --package github:ruiyang/rar-mock-server start
```

### endpoints

shutdown the server gracefully
```shell
curl --location --request GET 'localhost:9000/shutdown'
```

any other requests will be sent back with response
```json
{
    "method": "",
    "headers": {
        "user-agent": "PostmanRuntime/7.26.3",
        "accept": "*/*",
    },
    "body": {}
}
```
