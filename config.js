var api = 'http://45.32.232.11:32348';
var blockTargetInterval = 240;
var coinUnits = 1000000000000;
var symbol = 'KRB';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "krb": [
		["krb.mypool.name", "http://krb.mypool.name:32351"],
		["democats.org/pool/?name=karbowanec", "http://pool2.democats.org:7673"],
		["pool.karbowanec.com", "http://pool.karbowanec.com:8117"],
		["pool2.karbowanec.com", "http://pool2.karbowanec.com:8117"],
		["krb.cryptonotepool.com", "http://5.189.135.137:8618"],
		["krb.tfoto.com.ua", "http://178.150.34.202:8117"],
		["krb.crypto-coins.club", "http://krb.crypto-coins.club:8118"],
		["krb.sberex.com", "http://krb.sberex.com:7006"],
		["amazon.sberex.com", "http://amazon.sberex.com:7006"],
		["xcrypto.org", "http://xcrypto.org:8117"],
		["krb.cryptomine.pro", "http://krb.cryptomine.pro:8117"],
		["bityce.ddns.net", "http://bityce.ddns.net:9884"],
		["pool.karbowanec.com.ua", "http://zacent.com.ua:8117"],
		["krb-pool.pp.ua", "http://krb-pool.pp.ua:25417"],
	//	["54.223.133.248", "http://54.223.133.248:8117"],
		["bitcache.cc", "http://bitcache.cc:8117"],
		["krb.sick.al", "http://krb.s1ck.ws:99"],
		["krb.btcgo.org", "http://btcgo.org:8117"],
		["mine4all.pp.ua", "http://mine4all.pp.ua:8877"],
		["magicpool.tk", "http://magicpool.tk:8117"],
		["krb.eslime.net", "http://krb.eslime.net:8117"],
		["krb.igloopool.org", "http://krb.igloopool.org:8117"],
		["karbopool.club", "http://51.15.45.142:8117"],
		["krb.mininghub.eu", "http://krb.mininghub.eu:8117"],
		["easyhash.io/pools/krb", "https://api-krb.easyhash.io"],
		["krbpool.ml", "http://krbpool.ml:8117"],
		["krb.kopanka.com", "http://kopanka.com:8117"],
		["usa.krb.kopanka.com", "http://usa.krb.kopanka.com:8117"],
		["karbowanec.zpool.fun", "http://karbowanec.zpool.fun:8117"],
		["karbowanec.hashparty.io", "http://karbowanec.hashparty.io:8117"],
		["krb.coinminer.space", "http://krb.coinminer.space:8101"],
		["krb.miningpool.org.ua", "http://165.227.163.153:7118"],
		["karbowanec.cryptopool.in", "http://karbowanec.cryptopool.in:8117"],
		["krbpool.com", "http://pool.krbpool.com:8117"],
		["karbo.top", "http://karbo.top:8117"],
		["pool.poolbt.com", "http://krb.poolbt.com:8117"],
		["krb.multipool.online", "http://krb.multipool.online:8117"],
		["krb.mininggood.com", "http://us2.mininggood.com:8137"],
		["krb.miner.rocks", "https://krb.miner.rocks/api"],
		["pool.karbo.co.in", "http://pool.karbo.co.in:8117"],
		["krb.dreampool.info", "https://krb.dreampool.info/api"]
		
    ]
};

var networkStat2 = {
    "krb": [
		["karbowanec.hashvault.pro", "https://karbowanec.hashvault.pro/api"]
		]
};