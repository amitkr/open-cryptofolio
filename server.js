var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var AMP = require('./routes/hist/amp');
var ARDR = require('./routes/hist/ardr');
var BCN = require('./routes/hist/bcn');
var BCY = require('./routes/hist/bcy');
var BELA = require('./routes/hist/bela');
var BLK = require('./routes/hist/blk');
var BTC = require('./routes/hist/btc');
var BTCD = require('./routes/hist/btcd');
var BTM = require('./routes/hist/btm');
var BURST = require('./routes/hist/burst');
var CLAM = require('./routes/hist/clam');
var DASH = require('./routes/hist/dash');
var DCR = require('./routes/hist/dcr');
var DGB = require('./routes/hist/dgb');
var DOGE = require('./routes/hist/doge');
var EMC2 = require('./routes/hist/emc2');
var ETC = require('./routes/hist/etc');
var ETH = require('./routes/hist/eth');
var EXP = require('./routes/hist/exp');
var FCT = require('./routes/hist/fct');
var FLDC = require('./routes/hist/fldc');
var FLO = require('./routes/hist/flo');
var GAME = require('./routes/hist/game');
var GNO = require('./routes/hist/gno');
var GNT = require('./routes/hist/gnt');
var GRC = require('./routes/hist/grc');
var HUC = require('./routes/hist/huc');
var LBC = require('./routes/hist/lbc');
var LSK = require('./routes/hist/lsk');
var LTC = require('./routes/hist/ltc');
var MAID = require('./routes/hist/maid');
var NAUT = require('./routes/hist/naut');
var NAV = require('./routes/hist/nav');
var NEOS = require('./routes/hist/neos');
var NMC = require('./routes/hist/nmc');
var NOTE = require('./routes/hist/note');
var NXC = require('./routes/hist/nxc');
var NXT = require('./routes/hist/nxt');
var OMNI = require('./routes/hist/omni');
var PASC = require('./routes/hist/pasc');
var PINK = require('./routes/hist/pink');
var POT = require('./routes/hist/pot');
var PPC = require('./routes/hist/ppc');
var RADS = require('./routes/hist/rads');
var REP = require('./routes/hist/rep');
var RIC = require('./routes/hist/ric');
var SBD = require('./routes/hist/sbd');
var SC = require('./routes/hist/sc');
var SJCX = require('./routes/hist/sjcx');
var STEEM = require('./routes/hist/steem');
var STRAT = require('./routes/hist/strat');
var SYS = require('./routes/hist/sys');
var VIA = require('./routes/hist/via');
var VRC = require('./routes/hist/vrc');
var VTC = require('./routes/hist/vtc');
var XBC = require('./routes/hist/xbc');
var XCP = require('./routes/hist/xcp');
var XEM = require('./routes/hist/xem');
var XLM = require('./routes/hist/xlm');
var XMR = require('./routes/hist/xmr');
var XPM = require('./routes/hist/xpm');
var XRP = require('./routes/hist/xrp');
var XVC = require('./routes/hist/xvc');
var ZEC = require('./routes/hist/zec');

var app = express();
var http = require('http');
var fs = require('fs');
var url = require('url');

// setup node-rest-client
var Client = require('node-rest-client').Client;
var client = new Client();

// setup socket.io
var io = require('./io');
import ioClient from 'socket.io-client';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//setup routes for historical data
app.use('/', routes);
app.use('/hist/amp', AMP);
app.use('/hist/ardr', ARDR);
app.use('/hist/bcn', BCN);
app.use('/hist/bcy', BCY);
app.use('/hist/bela', BELA);
app.use('/hist/blk', BLK);
app.use('/hist/btc', BTC);
app.use('/hist/btcd', BTCD);
app.use('/hist/btm', BTM);
app.use('/hist/burst', BURST);
app.use('/hist/clam', CLAM);
app.use('/hist/dash', DASH);
app.use('/hist/dcr', DCR);
app.use('/hist/dgb', DGB);
app.use('/hist/doge', DOGE);
app.use('/hist/emc2', EMC2);
app.use('/hist/etc', ETC);
app.use('/hist/eth', ETH);
app.use('/hist/exp', EXP);
app.use('/hist/fct', FCT);
app.use('/hist/fldc', FLDC);
app.use('/hist/flo', FLO);
app.use('/hist/game', GAME);
app.use('/hist/gno', GNO);
app.use('/hist/gnt', GNT);
app.use('/hist/grc', GRC);
app.use('/hist/huc', HUC);
app.use('/hist/lbc', LBC);
app.use('/hist/lsk', LSK);
app.use('/hist/ltc', LTC);
app.use('/hist/maid', MAID);
app.use('/hist/naut', NAUT);
app.use('/hist/nav', NAV);
app.use('/hist/neos', NEOS);
app.use('/hist/nmc', NMC);
app.use('/hist/note', NOTE);
app.use('/hist/nxc', NXC);
app.use('/hist/nxt', NXT);
app.use('/hist/omni', OMNI);
app.use('/hist/pasc', PASC);
app.use('/hist/pink', PINK);
app.use('/hist/pot', POT);
app.use('/hist/ppc', PPC);
app.use('/hist/rads', RADS);
app.use('/hist/rep', REP);
app.use('/hist/ric', RIC);
app.use('/hist/sbd', SBD);
app.use('/hist/sc', SC);
app.use('/hist/sjcx', SJCX);
app.use('/hist/steem', STEEM);
app.use('/hist/strat', STRAT);
app.use('/hist/sys', SYS);
app.use('/hist/via', VIA);
app.use('/hist/vrc', VRC);
app.use('/hist/vtc', VTC);
app.use('/hist/xbc', XBC);
app.use('/hist/xcp', XCP);
app.use('/hist/xem', XEM);
app.use('/hist/xlm', XLM);
app.use('/hist/xmr', XMR);
app.use('/hist/xpm', XPM);
app.use('/hist/xrp', XRP);
app.use('/hist/xvc', XVC);
app.use('/hist/zec', ZEC);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//////////// Socket.io - FETCH DATA FROM EXTERNAL SOCKET \\\\\\\\\\\\\\\\\\\
// var quote = {};
//
// // subscribe to external socket
// var socket = ioClient.connect('https://streamer.cryptocompare.com');
//

    let subscription = [
        '5~CCCAGG~XMR~BTC',
        '5~CCCAGG~BCN~BTC',
        '5~CCCAGG~AMP~BTC',
        '5~CCCAGG~ARDR~BTC',
        '5~CCCAGG~BCY~BTC',
        '5~CCCAGG~BELA~BTC',
        '5~CCCAGG~BLK~BTC',
        '5~CCCAGG~BTM~BTC',
        '5~CCCAGG~BTS~BTC',
        '5~CCCAGG~BURST~BTC',
        '5~CCCAGG~CLAM~BTC',
        '5~CCCAGG~DASH~BTC',
        '5~CCCAGG~DCR~BTC',
        '5~CCCAGG~DGB~BTC',
        '5~CCCAGG~DOGE~BTC',
        '5~CCCAGG~EMC2~BTC',
        '5~CCCAGG~ETC~BTC',
        '5~CCCAGG~ETH~BTC',
        '5~CCCAGG~EXP~BTC',
        '5~CCCAGG~FCT~BTC',
        '5~CCCAGG~FLDC~BTC',
        '5~CCCAGG~FLO~BTC',
        '5~CCCAGG~GAME~BTC',
        '5~CCCAGG~GNO~BTC',
        '5~CCCAGG~GNT~BTC',
        '5~CCCAGG~GRC~BTC',
        '5~CCCAGG~HUC~BTC',
        '5~CCCAGG~LBC~BTC',
        '5~CCCAGG~LSK~BTC',
        '5~CCCAGG~LTC~BTC',
        '5~CCCAGG~MAID~BTC',
        '5~CCCAGG~NAUT~BTC',
        '5~CCCAGG~NAV~BTC',
        '5~CCCAGG~NEOS~BTC',
        '5~CCCAGG~NMC~BTC',
        '5~CCCAGG~NOTE~BTC',
        '5~CCCAGG~NXC~BTC',
        '5~CCCAGG~NXT~BTC',
        '5~CCCAGG~OMNI~BTC',
        '5~CCCAGG~PASC~BTC',
        '5~CCCAGG~PINK~BTC',
        '5~CCCAGG~POT~BTC',
        '5~CCCAGG~PPC~BTC',
        '5~CCCAGG~RADS~BTC',
        '5~CCCAGG~REP~BTC',
        '5~CCCAGG~RIC~BTC',
        '5~CCCAGG~SBD~BTC',
        '5~CCCAGG~SC~BTC',
        '5~CCCAGG~SJCX~BTC',
        '5~CCCAGG~STEEM~BTC',
        '5~CCCAGG~XLM~BTC',
        '5~CCCAGG~STRAT~BTC',
        '5~CCCAGG~SYS~BTC',
        '5~CCCAGG~VIA~BTC',
        '5~CCCAGG~VRC~BTC',
        '5~CCCAGG~VTC~BTC',
        '5~CCCAGG~XBC~BTC',
        '5~CCCAGG~XCP~BTC',
        '5~CCCAGG~XEM~BTC',
        '5~CCCAGG~XPM~BTC',
        '5~CCCAGG~XRP~BTC',
        '5~CCCAGG~XVC~BTC',
        '5~CCCAGG~ZEC~BTC'];

    // let fetchData = () => {
    //
    //     socket.emit('SubAdd', {subs: subscription});
    // };


//receive data

// CRYPTOCOMPARE
//         socket.on("m", function (message) {
//             let messageType = message.substring(0, message.indexOf("~"));
//             let res = {};
//             if (messageType === CCC.STATIC.TYPE.CURRENTAGG) {
//                 res = CCC.CURRENT.unpack(message);
//                 console.log(res);
//                 updateQuote(res);
//             }
//         });
//
//         // assign keys, send to client
//         let updateQuote = (result) => {
//
//             let keys = Object.keys(result);
//
//             for (let i = 0; i < keys.length; ++i) {
//                 quote[keys[i]] = result[keys[i]];
//             }
//             io.emit('m', quote);
//             // console.log(quote);
//         };
//
// setTimeout(fetchData, 100);
//
// setInterval(fetchData, 180000);

//Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
//Use SubscriptionId 0 for TRADE, 2 for CURRENT and 5 for CURRENTAGG
//For aggregate quote updates use CCCAGG as market

// COINCAP

var socket = ioClient.connect('http://socket.coincap.io');

socket.on('trades', function (tradeMsg) {
    // console.log(tradeMsg);
});

// socket.on('global', function (globalMsg) {
//     console.log(globalMsg);
// });



// define utilitites config

var CCC = CCC || {};

CCC.STATIC=CCC.STATIC || {};

CCC.STATIC.TYPE={
    'TRADE'                  : '0'
    , 'FEEDNEWS'               : '1'
    , 'CURRENT'                : '2'
    , 'LOADCOMPLATE'           : '3'
    , 'COINPAIRS'              : '4'
    , 'CURRENTAGG'             : '5'
    , 'TOPLIST'                : '6'
    , 'TOPLISTCHANGE'          : '7'
    , 'ORDERBOOK'              : '8'
    , 'FULLORDERBOOK'          : '9'
    , 'ACTIVATION'             : '10'

    , 'TRADECATCHUP'           : '100'
    , 'NEWSCATCHUP'            : '101'

    , 'TRADECATCHUPCOMPLETE'   : '300'
    , 'NEWSCATCHUPCOMPLETE'    : '301'

};

CCC.STATIC.CURRENCY = CCC.STATIC.CURRENCY || {};

CCC.STATIC.CURRENCY.SYMBOL = {
    'BTC'  : 'Ƀ'
    , 'LTC'  : 'Ł'
    , 'DAO'  : 'Ð'
    , 'USD'  : '$'
    , 'CNY'  : '¥'
    , 'EUR'  : '€'
    , 'GBP'  : '£'
    , 'JPY'  : '¥'
    , 'PLN'  : 'zł'
    , 'RUB'  : '₽'
    , 'ETH'  : 'Ξ'
    , 'GOLD' : 'Gold g'
    , 'INR'  : '₹'
    , 'BRL'  : 'R$'
};

CCC.STATIC.CURRENCY.getSymbol = function(symbol){
    return CCC.STATIC.CURRENCY.SYMBOL[symbol] || symbol;
};

CCC.STATIC.UTIL = {
    exchangeNameMapping : {
        'CCCAGG':'CryptoCompare Index',
        'BTCChina':'BTCC'
    },
    isMobile: function(userAgent){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0,4)))
            return true;
        return false;
    },
    convertToMB : function(bytes){
        return (parseInt(bytes,10)/1024/1024).toFixed(2)+' MB';
    },
    getNameForExchange : function(exchangeName){
        if(this.exchangeNameMapping.hasOwnProperty(exchangeName)){
            return this.exchangeNameMapping[exchangeName];
        }
        return exchangeName;
    },
    noExponents : function(value){
        var data= String(value).split(/[eE]/);
        if(data.length== 1) return data[0];

        var  z= '', sign= value<0? '-':'',
            str= data[0].replace('.', ''),
            mag= Number(data[1])+ 1;

        if(mag<0){
            z= sign + '0.';
            while(mag++) z += '0';
            return z + str.replace(/^\-/,'');
        }
        mag -= str.length;
        while(mag--) z += '0';
        return str + z;
    },
    reduceFloatVal : function(value){
        value = parseFloat(value);
        if(value>1){
            value = Math.round(value * 100) / 100;
            return value;
        }
        if(value>=0.00001000){
            return parseFloat(value.toPrecision(4));
        }
        if(value>=0.00000100){
            return parseFloat(value.toPrecision(3));
        }
        if(value>=0.00000010){
            return parseFloat(value.toPrecision(2));
        }
        return parseFloat(value.toPrecision(1));
    },
    reduceReal : function(value){
        value = parseFloat(value);
        return parseFloat(value.toFixed(8));
    },
    convertCurrentKeyToAll : function(key){
        var valuesArray = key.split("~");
        valuesArray[0]=CCC.STATIC.TYPE.CURRENTAGG;
        valuesArray[1]='CCCAGG';
        return valuesArray.join('~');
    },
    convertCurrentKeyToTrade : function(key){
        var valuesArray = key.split("~");
        valuesArray[0]=CCC.STATIC.TYPE.TRADE;
        return valuesArray.join('~');
    },
    convertValueToDisplay: function(symbol,value,filterNumberFunctionAngularJS,type,fullNumbers){
        var prefix = '';
        var valueSign=1;
        value = parseFloat(value);
        var valueAbs=Math.abs(value);
        var decimalsOnBigNumbers = 2;
        var decimalsOnNormalNumbers = 2;
        var decimalsOnSmallNumbers = 4;
        if(fullNumbers===true){
            decimalsOnBigNumbers =2;
            decimalsOnNormalNumbers = 0;
            decimalsOnSmallNumbers= 4;
        }
        if(type=="8decimals"){
            decimalsOnBigNumbers =4;
            decimalsOnNormalNumbers = 8;
            decimalsOnSmallNumbers= 8;
            if(value<0.0001 && value>=0.00001){decimalsOnSmallNumbers=4;}
            if(value<0.001 && value>=0.0001){decimalsOnSmallNumbers=5;}
            if(value<0.01 && value>=0.001){decimalsOnSmallNumbers=6;}
            if(value<0.1 && value>=0.01){decimalsOnSmallNumbers=7;}
        }
        if(symbol!=''){prefix = symbol+' ';}
        if(value<0){valueSign = -1;}
        if(value==0){return prefix+'0';}

        if(value<0.00001000 && value>=0.00000100 && decimalsOnSmallNumbers>3){
            decimalsOnSmallNumbers=3;
        }
        if(value<0.00000100 && value>=0.00000010 && decimalsOnSmallNumbers>2){
            decimalsOnSmallNumbers=2;
        }
        if(value<0.00000010 && decimalsOnSmallNumbers>1){
            decimalsOnSmallNumbers=1;
        }

        if(type=="short"||type=="8decimals"){
            if(valueAbs>10000000000){
                valueAbs=valueAbs/1000000000;
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers)+' B';
            }
            if(valueAbs>10000000){
                valueAbs=valueAbs/1000000;
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers)+' M';
            }
            if(valueAbs>10000){
                valueAbs=valueAbs/1000;
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers)+' K';
            }
            if(type=="8decimals" && valueAbs>=100){
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnBigNumbers);
            }
            if(valueAbs>=1){
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnNormalNumbers);
            }
            return prefix+(valueSign*valueAbs).toPrecision(decimalsOnSmallNumbers);
        }else{
            if(valueAbs>=1){
                return prefix+filterNumberFunctionAngularJS(valueSign*valueAbs,decimalsOnNormalNumbers);
            }

            return prefix+this.noExponents((valueSign*valueAbs).toPrecision(decimalsOnSmallNumbers));
        }
    }
};


CCC.TRADE=CCC.TRADE || {};
/*
 trade fields binary values always in the last ~
 */

CCC.TRADE.FLAGS = {
    'SELL'       : 0x1 // hex for binary 1
    , 'BUY'        : 0x2 // hex for binary 10
    , 'UNKNOWN'    : 0x4 // hex for binary 100
}

CCC.TRADE.FIELDS = {
    'T'          : 0x0  // hex for binary 0, it is a special case of fields that are always there TYPE
    , 'M'          : 0x0  // hex for binary 0, it is a special case of fields that are always there MARKET
    , 'FSYM'       : 0x0  // hex for binary 0, it is a special case of fields that are always there FROM SYMBOL
    , 'TSYM'       : 0x0  // hex for binary 0, it is a special case of fields that are always there TO SYMBOL
    , 'F'          : 0x0  // hex for binary 0, it is a special case of fields that are always there FLAGS
    , 'ID'         : 0x1  // hex for binary 1                                                       ID
    , 'TS'         : 0x2  // hex for binary 10                                                      TIMESTAMP
    , 'Q'          : 0x4  // hex for binary 100                                                     QUANTITY
    , 'P'          : 0x8  // hex for binary 1000                                                    PRICE
    , 'TOTAL'      : 0x10 // hex for binary 10000                                                   TOTAL

};

CCC.TRADE.DISPLAY = CCC.TRADE.DISPLAY||{};
CCC.TRADE.DISPLAY.FIELDS = {
    'T'          : {"Show":false}
    , 'M'          : {"Show":true, 'Filter':'Market'}
    , 'FSYM'       : {"Show":true, 'Filter':'CurrencySymbol'}
    , 'TSYM'       : {"Show":true, 'Filter':'CurrencySymbol'}
    , 'F'          : {"Show":true, 'Filter':'TradeFlag'}
    , 'ID'         : {"Show":true, 'Filter':'Text'}
    , 'TS'         : {'Show':true, 'Filter':'Date'  , 'Format':'yyyy MMMM dd HH:mm:ss'}
    , 'Q'          : {'Show':true, 'Filter':'Number', 'Symbol':'FSYM'}
    , 'P'          : {'Show':true, 'Filter':'Number', 'Symbol':'TSYM'}
    , 'TOTAL'      : {'Show':true, 'Filter':'Number', 'Symbol':'TSYM'}

};

CCC.TRADE.pack = function(tradeObject){
    var mask = 0;
    var packedTrade ='';
    for (var field in tradeObject) {
        packedTrade += '~'+tradeObject[field];
        mask|=this.FIELDS[field];
    }
    return packedTrade.substr(1)+'~'+mask.toString(16);
};

CCC.TRADE.unpack = function(tradeString){
    var valuesArray = tradeString.split("~");
    var valuesArrayLenght = valuesArray.length;
    var mask = valuesArray[valuesArrayLenght-1];
    var maskInt = parseInt(mask,16);
    var unpackedTrade = {};
    var currentField = 0;
    for(var property in this.FIELDS){
        if(this.FIELDS[property] === 0)
        {
            unpackedTrade[property] = valuesArray[currentField];
            currentField++;
        }
        else if(maskInt&this.FIELDS[property])
        {
            unpackedTrade[property] = valuesArray[currentField];
            currentField++;
        }
    }

    return unpackedTrade;
}

CCC.TRADE.getKey = function(tradeObject){
    return tradeObject['T']+'~'+tradeObject['M']+'~'+tradeObject['FSYM']+'~'+tradeObject['TSYM'];
};

CCC.CURRENT=CCC.CURRENT || {};
/*
 current fields mask values always in the last ~
 */

CCC.CURRENT.FLAGS = {
    'PRICEUP'        : 0x1    // hex for binary 1
    , 'PRICEDOWN'      : 0x2    // hex for binary 10
    , 'PRICEUNCHANGED' : 0x4    // hex for binary 100
    , 'BIDUP'          : 0x8    // hex for binary 1000
    , 'BIDDOWN'        : 0x10   // hex for binary 10000
    , 'BIDUNCHANGED'   : 0x20   // hex for binary 100000
    , 'OFFERUP'        : 0x40   // hex for binary 1000000
    , 'OFFERDOWN'      : 0x80   // hex for binary 10000000
    , 'OFFERUNCHANGED' : 0x100  // hex for binary 100000000
    , 'AVGUP'          : 0x200  // hex for binary 1000000000
    , 'AVGDOWN'        : 0x400  // hex for binary 10000000000
    , 'AVGUNCHANGED'   : 0x800  // hex for binary 100000000000
};


CCC.CURRENT.FIELDS={
    'TYPE'            : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'MARKET'          : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'FROMSYMBOL'      : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'TOSYMBOL'        : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'FLAGS'           : 0x0       // hex for binary 0, it is a special case of fields that are always there
    , 'PRICE'           : 0x1       // hex for binary 1
    , 'BID'             : 0x2       // hex for binary 10
    , 'OFFER'           : 0x4       // hex for binary 100
    , 'LASTUPDATE'      : 0x8       // hex for binary 1000
    , 'AVG'             : 0x10      // hex for binary 10000
    , 'LASTVOLUME'      : 0x20      // hex for binary 100000
    , 'LASTVOLUMETO'    : 0x40      // hex for binary 1000000
    , 'LASTTRADEID'     : 0x80      // hex for binary 10000000
    , 'VOLUMEHOUR'      : 0x100     // hex for binary 100000000
    , 'VOLUMEHOURTO'    : 0x200     // hex for binary 1000000000
    , 'VOLUME24HOUR'    : 0x400     // hex for binary 10000000000
    , 'VOLUME24HOURTO'  : 0x800     // hex for binary 100000000000
    , 'OPENHOUR'        : 0x1000    // hex for binary 1000000000000
    , 'HIGHHOUR'        : 0x2000    // hex for binary 10000000000000
    , 'LOWHOUR'         : 0x4000    // hex for binary 100000000000000
    , 'OPEN24HOUR'      : 0x8000    // hex for binary 1000000000000000
    , 'HIGH24HOUR'      : 0x10000   // hex for binary 10000000000000000
    , 'LOW24HOUR'       : 0x20000   // hex for binary 100000000000000000
    , 'LASTMARKET'      : 0x40000   // hex for binary 1000000000000000000, this is a special case and will only appear on CCCAGG messages
};

CCC.CURRENT.DISPLAY = CCC.CURRENT.DISPLAY||{};
CCC.CURRENT.DISPLAY.FIELDS={
    'TYPE'            : {'Show':false}
    , 'MARKET'          : {'Show':true, 'Filter':'Market'}
    , 'FROMSYMBOL'      : {'Show':false}
    , 'TOSYMBOL'        : {'Show':false}
    , 'FLAGS'           : {'Show':false}
    , 'PRICE'           : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'BID'             : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'OFFER'           : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LASTUPDATE'      : {'Show':true, 'Filter':'Date'  , 'Format':'yyyy MMMM dd HH:mm:ss'}
    , 'AVG'             : {'Show':true,' Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LASTVOLUME'      : {'Show':true, 'Filter':'Number', 'Symbol':'FROMSYMBOL'}
    , 'LASTVOLUMETO'    : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LASTTRADEID'     : {'Show':true, 'Filter':'String'}
    , 'VOLUMEHOUR'      : {'Show':true, 'Filter':'Number', 'Symbol':'FROMSYMBOL'}
    , 'VOLUMEHOURTO'    : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'VOLUME24HOUR'    : {'Show':true, 'Filter':'Number', 'Symbol':'FROMSYMBOL'}
    , 'VOLUME24HOURTO'  : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'OPENHOUR'        : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'HIGHHOUR'        : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LOWHOUR'         : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'OPEN24HOUR'      : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'HIGH24HOUR'      : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LOW24HOUR'       : {'Show':true, 'Filter':'Number', 'Symbol':'TOSYMBOL'}
    , 'LASTMARKET'      : {'Show':true, 'Filter':'String'}
};

CCC.CURRENT.pack = function(currentObject)
{
    var mask = 0;
    var packedCurrent ='';
    for(var property in this.FIELDS)
    {
        if(currentObject.hasOwnProperty(property)){
            packedCurrent += '~'+currentObject[property];
            mask|=this.FIELDS[property];
        }
    }
    //removing first character beacsue it is a ~
    return packedCurrent.substr(1)+'~'+mask.toString(16);
};

CCC.CURRENT.unpack = function(value)
{
    var valuesArray = value.split("~");
    var valuesArrayLenght = valuesArray.length;
    var mask = valuesArray[valuesArrayLenght-1];
    var maskInt = parseInt(mask,16);
    var unpackedCurrent = {};
    var currentField = 0;
    for(var property in this.FIELDS)
    {
        if(this.FIELDS[property] === 0)
        {
            unpackedCurrent[property] = valuesArray[currentField];
            currentField++;
        }
        else if(maskInt&this.FIELDS[property])
        {
            //i know this is a hack, for cccagg, future code please don't hate me:(, i did this to avoid
            //subscribing to trades as well in order to show the last market
            if(property === 'LASTMARKET'){
                unpackedCurrent[property] = valuesArray[currentField];
            }else{
                unpackedCurrent[property] = parseFloat(valuesArray[currentField]);
            }
            currentField++;
        }
    }

    return unpackedCurrent;
};
CCC.CURRENT.getKey = function(currentObject){
    return currentObject['TYPE']+'~'+currentObject['MARKET']+'~'+currentObject['FROMSYMBOL']+'~'+currentObject['TOSYMBOL'];
};
CCC.CURRENT.getKeyFromStreamerData = function(streamerData){
    var valuesArray = streamerData.split("~");
    return valuesArray[0]+'~'+valuesArray[1]+'~'+valuesArray[2]+'~'+valuesArray[3];
};

CCC.noExponents = function(value){
    var data= String(value).split(/[eE]/);
    if(data.length== 1) return data[0];

    var  z= '', sign= value<0? '-':'',
        str= data[0].replace('.', ''),
        mag= Number(data[1])+ 1;

    if(mag<0){
        z= sign + '0.';
        while(mag++) z += '0';
        return z + str.replace(/^\-/,'');
    }
    mag -= str.length;
    while(mag--) z += '0';
    return str + z;
};

CCC.filterNumberFunctionPolyfill = function(value,decimals){
    var decimalsDenominator = Math.pow(10,decimals);
    var numberWithCorrectDecimals = Math.round(value*decimalsDenominator)/decimalsDenominator;
    var parts = numberWithCorrectDecimals.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

CCC.convertValueToDisplay =  function(symbol,value,type,fullNumbers){
    var prefix = '';
    var valueSign=1;
    value = parseFloat(value);
    var valueAbs=Math.abs(value);
    var decimalsOnBigNumbers = 2;
    var decimalsOnNormalNumbers = 2;
    var decimalsOnSmallNumbers = 4;
    if(fullNumbers===true){
        decimalsOnBigNumbers =2;
        decimalsOnNormalNumbers = 0;
        decimalsOnSmallNumbers= 4;
    }
    if(symbol!=''){
        prefix = symbol+' ';
    }
    if(value<0){
        valueSign = -1;
    }

    if(value==0){
        return prefix+'0';
    }

    if(value<0.00001000 && value>=0.00000100 && decimalsOnSmallNumbers>3){
        decimalsOnSmallNumbers=3;
    }
    if(value<0.00000100 && value>=0.00000010 && decimalsOnSmallNumbers>2){
        decimalsOnSmallNumbers=2;
    }
    if(value<0.00000010 && value>=0.00000001 && decimalsOnSmallNumbers>1){
        decimalsOnSmallNumbers=1;
    }

    if(type=="short"){
        if(valueAbs>10000000000){
            valueAbs=valueAbs/1000000000;
            return prefix+CCC.filterNumberFunctionPolyfill(valueSign*valueAbs,decimalsOnBigNumbers)+' B';
        }
        if(valueAbs>10000000){
            valueAbs=valueAbs/1000000;
            return prefix+CCC.filterNumberFunctionPolyfill(valueSign*valueAbs,decimalsOnBigNumbers)+' M';
        }
        if(valueAbs>10000){
            valueAbs=valueAbs/1000;
            return prefix+CCC.filterNumberFunctionPolyfill(valueSign*valueAbs,decimalsOnBigNumbers)+' K';
        }
        if(valueAbs>=1){
            return prefix+CCC.filterNumberFunctionPolyfill(valueSign*valueAbs,decimalsOnNormalNumbers);
        }
        return prefix+(valueSign*valueAbs).toPrecision(decimalsOnSmallNumbers);
    }else{
        if(valueAbs>=1){
            return prefix+CCC.filterNumberFunctionPolyfill(valueSign*valueAbs,decimalsOnNormalNumbers);
        }

        return prefix+CCC.noExponents((valueSign*valueAbs).toPrecision(decimalsOnSmallNumbers));
    }
};



module.exports = app;