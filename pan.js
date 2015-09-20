/**
 * Created by Administrator on 2015/9/20.
 */
;(function(jQuery){
    var Colorful = function(){
        self = this;
        this.getData();
    };

    Colorful.prototype = {
        getData:function(){

            var dataJsonUrl = "./jsondata.json";
            $.getJSON(dataJsonUrl, function (data) {

                self.redList(data);
            });

       },
        redList:function(data){
            console.log(data);
        }
    }

    window['Colorful'] = Colorful;

})(jQuery);