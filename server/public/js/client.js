// config
require.config({
    paths: {
        view: './view',
        jquery: 'https://code.jquery.com/jquery-1.11.2.min.js'
    }
});

var url = 'http://api.gnavi.co.jp/RestSearchAPI/20150630/?callback=?';
var params = {
    keyid: '<%= apikey %>',
    format: 'json',
    latitude: 35.670083,
    longitude: 139.763267,
    range: 1
};

var view;
require(['./view'], function(func) {
    return view=func;
});

var logPosition = function(position) {
    console.log("緯度", position.coords.latitude);
    console.log("経度", position.coords.longitude);
    console.log("方角", position.coords.heading);
    console.log("スピード", position.coords.speed);
}

var geoLocation = function (position) {
    logPosition(position);

    params.latitude = position.coords.latitude;
    params.longitude = position.coords.longitude;
    $.getJSON(url, params, function(result){
        view.showResult(params, result);
    });
}

var geoError = function(error) {
    console.log("Error= ", error.code)
}

function onClickApply(keyId){
    params.keyid = keyId;
    view.showLoading($('.js--result'));
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoLocation, geoError)
    } else {
        console.log("error. Can't use navigator API.");
    }
}