# Karbo blockchain explorer
Block explorer for Karbo CryptoNote based cryptocurrency.

## Installation

1) It takes data from daemon karbowanecd. It should be accessible from the Internet. Run karbowanecd with open port as follows:
```bash
./karbowanecd --restricted-rpc --enable-cors=* --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=32348
```

2) Just upload to your website and change `api` variable in `config.js` and in `config.php` to point to your daemon.

## Docker
We can use docker image to deploy an explorer.

Node URL can be replaced on the docker image build.
```shell
docker build . --build-arg RPC_NODE_URL=http://localhost:32348
```

Or provided as env variable into docker container

```shell
docker run karbo-explorer --env RPC_NODE_URL=http://localhost:32348
```
