define(function () {
    var showMap = function(params, result){
        var map = new GMaps({
            div: ".mapResult",
            lat: params.latitude,
            lng: params.longitude,
            zoom: 17//縮尺
        });
        map.addMarker({
            lat: params.latitude,
            lng: params.longitude,
            title: "Here, you are!",
            icon: "/images/pict.png",
            infoWindow: {
                content: "<p> Here, you are! </p>"
            }
        });

        result.rest.forEach(function (val) {
            map.addMarker({
                lat: val.latitude,
                lng: val.longitude,
                title: val.name,
                infoWindow: {
                    content: "<p>"+val.name+"</p>"
                }
            });
            map.drawRoute({
                origin: [params.latitude, params.longitude],//出発点の緯度経度
                destination: [val.latitude, val.longitude],//目標地点の緯度経度
                travelMode: 'walking',//モード(walking,driving)
                strokeColor: '#d2691e',//ルートの色
                strokeOpacity: 0.8,//ルートの透明度
                strokeWeight: 4//ルート線の太さ
            });
        });
    };

    var showTable = function ($target, result, map) {
        var head1 = ["#", "id", "name", "line", "Station", "Minutes to walk", "latitude", "longtitude"]

        $target.empty();
        var $table = $('<table class="table table-striped table-bordered table1"></table>').appendTo($target);
        var $tr = $("<tr></tr>").appendTo($table);
        head1.forEach(function (val) {
            $tr.append("<th>" + val + "</th>");
        });

        console.log("result", result);
        result.rest.forEach(function (val, index) {
            var $tr = $("<tr></tr>").appendTo($table);
            var i = index +1;
            $tr.append("<td>" + i + "</td>");
            $tr.append("<td>" + val.id + "</td>");
            $tr.append("<td>" + val.name + "</td>");
            $tr.append("<td>" + val.access.line + "</td>");
            $tr.append("<td>" + val.access.station + "</td>");
            $tr.append("<td>" + val.access.walk + "</td>");
            $tr.append("<td>" + val.latitude + "</td>");
            $tr.append("<td>" + val.longitude + "</td>");
        });
    };


    return {
        showLoading: function ($target) {
            $target.empty();
            $target.append("<h2><span>Loading..</span></h2>");
        },
        showResult: function(params, result){
            if ( result.total_hit_count > 0 ) {
                $('.js--total').text( result.total_hit_count + '件の結果がみつかりました。先頭の10件を表示します。' );
                showTable($('.js--result'), result);
                showMap(params, result);
            } else {
                $('.js--total').text( '' );
                $('.js--result').text( '検索結果が見つかりませんでした。' );
            }
        }
    };
});
