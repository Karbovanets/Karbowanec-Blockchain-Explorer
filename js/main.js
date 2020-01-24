var blockchainExplorer = "./?hash={id}#block";
var transactionExplorer = "./?hash={id}#transaction";
var paymentIdExplorer = "./?hash={id}#payment_id";
var addressExplorer = "./?address={id}#address";

$(function () {
    $("head").append('<link id="theme" type="text/css" rel="stylesheet" href="' + whiteTheme + '">');

    var loadCSS = function () {
        var value = $.cookie('night_mode');
        $('#switch_mode').prop('checked', (value === 'true'));

        if (value === 'true') {
            $('#theme').attr('href', nightTheme);

        } else {
            $('#theme').attr('href', whiteTheme);
        }
    };
    loadCSS();

    var toggleCSS = function (value) {
        $.cookie('night_mode', value, {
            expires: 365,
            path: '/'
        });
        loadCSS();
    };

    $('#switch_mode').on('change', function () {
        toggleCSS(this.checked);
    });
});

function getTransactionUrl(id) {
    return transactionExplorer.replace('{symbol}', symbol.toLowerCase()).replace('{id}', id);
}

$.fn.update = function (txt) {
    var el = this[0];
    if (el.textContent !== txt)
        el.textContent = txt;
    return this;
};

function updateTextClasses(className, text) {
    var els = document.getElementsByClassName(className);
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (el.textContent !== text)
            el.textContent = text;
    }
}

function updateText(elementId, text) {
    var el = document.getElementById(elementId);
    if (el.textContent !== text) {
        el.textContent = text;
    }
    return el;
}

function updateTextLinkable(elementId, text) {
    var el = document.getElementById(elementId);
    if (el.innerHTML !== text) {
        el.innerHTML = text;
    }
    return el;
}

var currentPage;
var lastStats;
var nodeStatus;

function getReadableHashRateString(hashrate) {
    var i = 0;
    var byteUnits = [' H', ' kH', ' MH', ' GH', ' TH', ' PH', ' EH', ' ZH', ' YH'];
    while (hashrate > 1000) {
        hashrate = hashrate / 1000;
        i++;
    }
    return hashrate.toFixed(2) + byteUnits[i];
}

function getReadableDifficultyString(difficulty, precision) {
    if (isNaN(parseFloat(difficulty)) || !isFinite(difficulty)) return 0;
    if (typeof precision === 'undefined') precision = 2;
    var units = ['', 'k', 'M', 'G', 'T', 'P'],
        number = Math.floor(Math.log(difficulty) / Math.log(1000));
    if (units[number] === undefined || units[number] === null) {
        return 0
    }
    return (difficulty / Math.pow(1000, Math.floor(number))).toFixed(precision) + ' ' + units[number];
}

function formatBlockLink(hash) {
    return '<a href="' + getBlockchainUrl(hash) + '">' + hash + '</a>';
}

function getReadableCoins(coins, digits, withoutSymbol) {
    var amount = (parseInt(coins || 0) / coinUnits).toFixed(digits || coinUnits.toString().length - 1);
    return amount + (withoutSymbol ? '' : (' ' + symbol));
}

function formatDate(time) {
    if (!time) return '';
    return new Date(parseInt(time) * 1000).toLocaleString();
}

function formatTime(time) {
    if (!time) return '';
    return new Date(parseInt(time) * 1000).toISOString().substr(11, 8);
}

function formatBytes(a, b) {
    if (0 == a) return "0 Bytes";
    var c = 1024,
        d = b || 2,
        e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
}

function formatPaymentLink(hash) {
    return '<a href="' + getTransactionUrl(hash) + '">' + hash + '</a>';
}

function pulseLiveUpdate() {
    var stats_update = document.getElementById('stats_updated');
    stats_update.style.transition = 'opacity 100ms ease-out';
    stats_update.innerHTML="<i class=\"material-icons\">notifications_active</i>";
    setTimeout(function () {
        stats_update.style.transition = 'opacity 7000ms linear';
        stats_update.innerHTML="<i class=\"material-icons\">notifications_none</i>";
    }, 500);
}

window.onhashchange = function () {
    routePage();
};


function fetchLiveStats() {
    $.ajax({
        url: api + '/getinfo',
        dataType: 'json',
        type: 'GET',
        cache: 'false'
    }).done(function (data, success) {
        pulseLiveUpdate();
        lastStats = data;
        nodeStatus = success;
        currentPage.update();
        nodeInfo();
    }).always(function () {
        setTimeout(function () {
            fetchLiveStats();
        }, refreshDelay);
    });
}

function floatToString(float) {
    return float.toFixed(6).replace(/[0\.]+$/, '');
}

function nodeInfo() {
    if (nodeStatus) {
        $('#node_connection').html('Online').addClass('text-success').removeClass('text-danger');
        $('#node_height').html(parseInt(lastStats['height']));
        $('#node_block').html(parseInt(lastStats['last_known_block_index']));
        $('#node_diff').html(parseInt(lastStats['difficulty']));
        $('#node_alt').html(parseInt(lastStats['alt_blocks_count']));
        $('#node_rpc').html(parseInt(lastStats['rpc_connections_count']));
        $('#node_inc').html(parseInt(lastStats['incoming_connections_count']));
        $('#node_out').html(parseInt(lastStats['outgoing_connections_count']));
        $('#node_white').html(parseInt(lastStats['white_peerlist_size']));
        $('#node_grey').html(parseInt(lastStats['grey_peerlist_size']));
        if (lastStats['version'] !== 'undefined') {
            $('#node_ver').html(lastStats['version']);
        }
    } else {
        $('#node_connection').html('Offline').addClass('text-danger').removeClass('text-success');
    }
}

var xhrPageLoading;

function routePage(loadedCallback) {

    if (currentPage) currentPage.destroy();
    $('#page').html('');
    $('#loading').show();

    if (xhrPageLoading)
        xhrPageLoading.abort();

    $('.hot_link').parent().removeClass('active');
    var $link = $('a.hot_link[href="' + (window.location.hash || '#') + '"]');

    $link.parent().addClass('active');
    var page = $link.data('page');

    xhrPageLoading = $.ajax({
        url: 'pages/' + page,
        cache: false,
        success: function (data) {
            $('#loading').hide();
            $('#page').show().html(data);
            currentPage.init();
            if (loadedCallback) loadedCallback();
        }
    });
}

function getBlockchainUrl(id) {
    return blockchainExplorer.replace('{id}', id);
}

function getinfo() {
    $.ajax({
            url: api + '/getinfo',
            timeout: 1500 //in milliseconds
        })
        .done(function (data) {
            try {
                lastStats = JSON.parse(data);
            } catch (e) {
                lastStats = data;
            }
            routePage(fetchLiveStats);
        })
        .fail(function () {
            apiList.push(api);
            api = apiList.shift();
            getinfo();
        });
}

$(function () {
    getinfo();
});

// Blockexplorer functions
urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
}

function hex2a(hexx) {
    var hex = hexx.toString(); //force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function toHexString(byteArray) {
    return byteArray.reduce((output, elem) =>
        (output + ('0' + elem.toString(16)).slice(-2)), '');
}

function handleSearch() {

    var text = document.getElementById('txt_search').value;

    function GetSearchBlockbyHeight() {

        var block, xhrGetSearchBlockbyHeight;
        if (xhrGetSearchBlockbyHeight) xhrGetSearchBlockbyHeight.abort();

        xhrGetSearchBlockbyHeight = $.ajax({
            url: api + '/json_rpc',
            method: "POST",
            data: JSON.stringify({
                jsonrpc: "2.0",
                id: "blockbyheight",
                method: "getblockheaderbyheight",
                params: {
                    height: parseInt(text)
                }
            }),
            dataType: 'json',
            cache: 'false',
            success: function (data) {
                if (data.result) {
                    block = data.result.block_header;
                    window.location.href = getBlockchainUrl(block.hash);
                } else if (data.error) {
                    wrongSearchAlert();
                }
            }
        });
    }

    function GetSearchBlock() {
        var block, xhrGetSearchBlock;
        if (xhrGetSearchBlock) xhrGetSearchBlock.abort();
        xhrGetSearchBlock = $.ajax({
            url: api + '/json_rpc',
            method: "POST",
            data: JSON.stringify({
                jsonrpc: "2.0",
                id: "GetSearchBlock",
                method: "getblockbyhash",
                params: {
                    hash: text
                }
            }),
            dataType: 'json',
            cache: 'false',
            success: function (data) {
                if (data.result) {
                    block = data.result.block;
                    sessionStorage.setItem('searchBlock', JSON.stringify(block));
                    window.location.href = getBlockchainUrl(block.hash);
                } else if (data.error) {
                    $.ajax({
                        url: api + '/json_rpc',
                        method: "POST",
                        async: false,
                        data: JSON.stringify({
                            jsonrpc: "2.0",
                            id: "GetSearchTransaction",
                            method: "gettransaction",
                            params: {
                                hash: text
                            }
                        }),
                        dataType: 'json',
                        cache: false,
                        success: function (data) {
                            if (data.result) {
                                sessionStorage.setItem('searchTransaction', JSON.stringify(data.result));
                                window.location.href = transactionExplorer.replace('{id}', text);
                            } else if (data.error) {
                                xhrGetTsx = $.ajax({
                                    url: api + '/json_rpc',
                                    method: "POST",
                                    data: JSON.stringify({
                                        jsonrpc: "2.0",
                                        id: "GetSearchTransactionByPaymentId",
                                        method: "gettransactionsbypaymentid",
                                        params: {
                                            payment_id: text
                                        }
                                    }),
                                    dataType: 'json',
                                    cache: 'false',
                                    success: function (data) {
                                        if (data.result) {
                                            txsByPaymentId = data.result.transactions;
                                            sessionStorage.setItem('txsByPaymentId', JSON.stringify(txsByPaymentId));
                                            window.location.href = paymentIdExplorer.replace('{id}', text);
                                        } else if (data.error) {
                                            var toastHTML = 'We could not find anything.';
                                            M.toast({html: toastHTML});
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    }

    if (text.length == 95) {
        if (addressPattern.test(text)) {
            window.location.href = addressExplorer.replace('{id}', text);
        } else {
            wrongSearchAlert();
        }
    } else if (text.length < 64) {
        GetSearchBlockbyHeight();
    } else if (text.length == 64) {
        GetSearchBlock();
    } else {
        wrongSearchAlert();
    }

}

function wrongSearchAlert() {
  var toastHTML = 'Wrong search query! Please enter block height or hash, transaction hash, or payment id.';
  M.toast({html: toastHTML});
}

$('#txt_search').keyup(function (e) {
if (e.keyCode === 13)
    $('#btn_search').click();
});


jQuery(function ($) {
    $(document).ready(function () {
        $('.scrollup').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });
});