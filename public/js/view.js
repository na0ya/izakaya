define(function () {
    return {
        showTable: function ($target, result) {
            var head1 = ["id", "name", "line", "Station", "Minutes to walk"]

            $target.empty();
            var $table = $('<table class="table table-striped table-bordered table1"></table>').appendTo($target);
            var $tr = $("<tr></tr>").appendTo($table);
            head1.forEach(function (val) {
                $tr.append("<th>" + val + "</th>");
            });

            result.rest.forEach(function (val) {
                var $tr = $("<tr></tr>").appendTo($table);
                $tr.append("<td>" + val.id + "</td>");
                $tr.append("<td>" + val.name + "</td>");
                $tr.append("<td>" + val.access.line + "</td>");
                $tr.append("<td>" + val.access.station + "</td>");
                $tr.append("<td>" + val.access.walk + "</td>");
            });
        },
        showLoading: function ($target) {
            $target.empty();
            $target.append("<h2><span>Loading..</span></h2>");
        },
        showResult: function(result){
            if ( result.total_hit_count > 0 ) {
                $('.js--total').text( result.total_hit_count + '件の結果がみつかりました。' );
                this.showTable($('.js--result'), result);
            } else {
                $('.js--total').text( '' );
                $('.js--result').text( '検索結果が見つかりませんでした。' );
            }
        }

    };
});
