/**
 * Created by Administrator on 2015/9/20.
 */
;(function(jQuery){
    var Colorful = function(){
        self = this;
        this._data = {};
        this.getData();
    };

    Colorful.prototype = {
        getData:function(){
            /* json 数据的 请求 url 地址 */
            var dataJsonUrl = "./data/jsondata.json";

            /* 获取json 数据 */
            $.getJSON(dataJsonUrl, function (data) {
                this._data = data;

                /* 渲染红色 */
                self.redList(data.red);
                /* 渲染绿色 */
                self.greenList(data.green);
                /* 渲染黄色 */
                self.yellowList(data.yellow);
                /* 渲染粉色 */
                self.pinkList(data.pink);
                /* 渲染蓝色 */
                self.blueList(data.blue);


            });
        },
        colorList:function(data){


        },
        redList:function(data){

            var str = '';
            for(var i=0;i<data.length;i++){

                str += '<li class="product"  >'+
                    '<div class="tupian">'+
                    '   <a class="box_tu" href="'+ data[i].TbUrl +'" target="_blank" title="'+ data[i].Name  +'"  >'+
                    '       <img title="'+ data[i].Name  +'" src="images/products/red'+ parseInt(i+1)+'.jpg" alt="'+ data[i].Name  +'" />'+
                    '   </a>'+
                    '</div>'+
                    '<a class="product_name" href="'+ data[i].TbUrl +'" target="_blank">'+ data[i].Name  +'</a>'+
                    '   <p class="price"><span>Price：</span>$ '+ data[i].PriceUS  +'</p>'+
                    '<a class="buynow" href="'+ data[i].Url +'" target="_blank"></a>'+
                    '</li>';
            };

            document.getElementById("red_json_box").innerHTML = str ;

        },
        greenList:function(data){

            var str = '';
            for(var i=0;i<data.length;i++){

                str += '<li class="product">'+
                    '<div class="tupian">'+
                    '   <a class="box_tu" href="'+ data[i].TbUrl +'" target="_blank" title="'+ data[i].Name  +'"  >'+
                    '       <img title="product" src="images/products/green'+ parseInt(i+1)+'.jpg" alt="'+ data[i].Name  +'" />'+
                    '   </a>'+
                    '</div>'+
                    '<a class="product_name" href="'+ data[i].TbUrl +'" target="_blank">'+ data[i].Name  +'</a>'+
                    '   <p class="price"><span>Price：</span>$ '+ data[i].PriceUS  +'</p>'+
                    '<a class="buynow" href="'+ data[i].Url +'" target="_blank"></a>'+
                    '</li>';
            };

            document.getElementById("green_json_box").innerHTML = str ;
        },
        yellowList:function(data){

            var str = '';
            for(var i=0;i<data.length;i++){

                str += '<li class="product">'+
                    '<div class="tupian">'+
                    '   <a class="box_tu" href="'+ data[i].TbUrl +'" target="_blank" title="'+ data[i].Name  +'" >'+
                    '       <img title="product" src="images/products/yellow'+ parseInt(i+1)+'.jpg" alt="'+ data[i].Name  +'" />'+
                    '   </a>'+
                    '</div>'+
                    '<a class="product_name" href="'+ data[i].TbUrl +'" target="_blank">'+ data[i].Name  +'</a>'+
                    '   <p class="price"><span>Price：</span>$ '+ data[i].PriceUS  +'</p>'+
                    '<a class="buynow" href="'+ data[i].Url +'" target="_blank"></a>'+
                    '</li>';
            };

            document.getElementById("yellow_json_box").innerHTML = str ;

        },
        pinkList:function(data){

            var str = '';
            for(var i=0;i<data.length;i++){

                str += '<li class="product">'+
                    '<div class="tupian">'+
                    '   <a class="box_tu" href="'+ data[i].TbUrl +'" target="_blank" title="'+ data[i].Name  +'"  >'+
                    '       <img title="product" src="images/products/pink'+ parseInt(i+1)+'.jpg" alt="'+ data[i].Name  +'" />'+
                    '   </a>'+
                    '</div>'+
                    '<a class="product_name" href="'+ data[i].TbUrl +'" target="_blank">'+ data[i].Name  +'</a>'+
                    '   <p class="price"><span>Price：</span>$ '+ data[i].PriceUS  +'</p>'+
                    '<a class="buynow" href="'+ data[i].Url +'" target="_blank"></a>'+
                    '</li>';
            };

            document.getElementById("pink_json_box").innerHTML = str ;

        },
        blueList:function(data){

            var str = '';
            for(var i=0;i<data.length;i++){

                str += '<li class="product">'+
                    '<div class="tupian">'+
                    '   <a class="box_tu" href="'+ data[i].TbUrl +'" target="_blank" title="'+ data[i].Name  +'" >'+
                    '       <img title="product" src="images/products/blue'+ parseInt(i+1)+'.jpg" alt="'+ data[i].Name  +'" />'+
                    '   </a>'+
                    '</div>'+
                    '<a class="product_name" href="'+ data[i].TbUrl +'" target="_blank">'+ data[i].Name  +'</a>'+
                    '   <p class="price"><span>Price：</span>$ '+ data[i].PriceUS  +'</p>'+
                    '<a class="buynow" href="'+ data[i].Url +'" target="_blank"></a>'+
                    '</li>';
            };

            document.getElementById("blue_json_box").innerHTML = str ;

        }
    }

    window['Colorful'] = Colorful;

})(jQuery);