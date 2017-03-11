var api = 'http://52.21.253.162:32348';
var blockTargetInterval = 240;
var coinUnits = 1000000000000;
var symbol = 'KRB';
var refreshDelay = 30000;
var ver = "1.0.0";
// pools stats by MainCoins
var networkStat = {
    "krb": [
        ["krb.mypool.name", "http://krb.mypool.name:32351"],
        ["democats.org", "http://pool2.democats.org:7673"],
        ["pool.karbowanec.com", "http://pool.karbowanec.com:8117"],
        ["pool2.karbowanec.com", "http://pool2.karbowanec.com:8117"],
        ["krb.cryptonotepool.com", "http://5.189.135.137:8618"],
		["krb.tfoto.com.ua", "http://178.150.34.202:8117"],
		["krb.crypto-coins.club", "http://krb.crypto-coins.club:8118"],
		["krb.sberex.com", "http://krb.sberex.com:7006"],
		["xcrypto.org", "http://xcrypto.org:8117"]
    ]
};