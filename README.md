## request as response mock server for local development

### Run

default port 9001
```shell
npx --package rar-mock-server start
```

to run at a different port 3000
```shell
PORT=3000 npx --package rar-mock-server start
```

### endpoints

shutdown the server gracefully
```shell
curl --location --request GET 'localhost:9000/shutdown'
```

any other requests will be sent back with a response
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
