var api = 'http://108.61.198.115:32348';
var blockTargetInterval = 240;
var coinUnits = 1000000000000;
var symbol = 'KRB';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "krb": [
		["karbo.hashvault.pro", "https://karbo.hashvault.pro/api/pool/stats"],
		["krb.mypool.name", "http://krb.mypool.name:32351/stats"],
		["democats.org/pool/?name=karbowanec", "http://pool2.democats.org:7673/stats"],
		["pool.karbowanec.com", "http://pool.karbowanec.com:8117/stats"],
		["krb.cryptonotepool.com", "http://5.189.135.137:8618/stats"],
		["krb.crypto-coins.club", "http://krb.crypto-coins.club:8118/stats"],
		["krb.sberex.com", "http://krb.sberex.com:7006/stats"],
		["krb.cryptomine.pro", "http://krb.cryptomine.pro:8117/stats"],
		["krb-pool.pp.ua", "http://krb-pool.pp.ua:25417/stats"],
		["easyhash.io/pools/krb", "https://api-krb.easyhash.io/stats"],
		["krbpool.ml", "http://krbpool.ml:8117/stats"],
		["krb.kopanka.com", "http://kopanka.com:8117/stats"],
		["usa.krb.kopanka.com", "http://usa.krb.kopanka.com:8117/stats"],
		["karbowanec.hashparty.io", "http://karbowanec.hashparty.io:8117/stats"],
		["karbo.farm", "https://eu1.karbo.farm/api/stats"],
		["krbpool.com", "http://pool.krbpool.com:8117/stats"],
		["krb.multipool.online", "http://krb.multipool.online:8119/stats"],
		["krb.miner.rocks", "https://krb.miner.rocks/api/stats"],
		["krb.dreampool.info", "https://krb.dreampool.info/api/stats"],
		["krb.soyminero.es", "http://krb.soyminero.es:8119/stats"],
		["krb.mininglamp.ml", "http://35.197.65.235:8117/stats"],
		["karbo.coinwire.eu", "http://karbo.coinwire.eu:8118/stats"],
		["karbunkul.ga", "http://karbunkul.ga:3389/stats"],
		["krb.ocukminingpool.com", "http://ocukminingpool.com:8118/stats"],
		["krb.fastpool.io", "http://krb.fastpool.io:8185/stats"],
		["karbowanec.hashparty.io", "http://karbowanec-pool.hashparty.io:8117/stats"],
		["pool.krb-ua.tk", "http://pool.krb-ua.tk:8117/stats"],
		["krb.pool.ualinux.com", "http://krb.pool.ualinux.com:8117/stats"],
		["krb.agilepools.com", "https://krb.agilepools.com/api/stats"],
		["krb.fastpool.eu", "http://krb.fastpool.eu:8118/stats"],
		["krbpool.pp.ua", "https://krbpool.pp.ua:8118/stats"],
		["karbo.luckypool.org", "https://karbo.luckypool.org/api/stats"],
		["krb.freshpool.org", "https://krb.freshpool.org:13001/stats"],
		["krb.tfoto.com.ua", "http://178.150.34.202:8117/stats"],
		["pool.mineallcrypto.com", "http://pool.mineallcrypto.com/pool/stats/?symbol=KRB"],
		["krb.mine.nu", "http://krb.mine.nu:8117/stats"],
		["krb.i-holder.net", "http://krb.i-holder.net:8117/stats"],
		["karbo.proofpool.org", "http://proofpool.org:8119/stats"],
		["karbo.pool.multed.com", "http://karbo.pool.multed.com:8117/stats"]
		
    ]
};
