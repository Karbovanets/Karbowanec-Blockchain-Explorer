# Karbowanec-Blockchain-Explorer
Block explorer for Karbowanec CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon karbowanecd. It should be accessible from the Internet. Run karbowanecd with open port as follows:
```bash
./karbowanecd --restricted-rpc --enable-cors=* --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=32348
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.
