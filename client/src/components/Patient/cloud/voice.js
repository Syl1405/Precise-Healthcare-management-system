import * as d3 from 'd3';
import jQuery from 'jquery';
import $ from 'jquery'; 

export function cloud(){
const aaa = require('./wordcloud_2.json');

drawWordCloud(aaa);
function drawWordCloud(tmp) {
    //辨識到的關鍵字
    //var tmp = JSON.parse(tmp);
    console.log(tmp);
    var wordAndFreq = {};
    var keys = Object.keys(tmp);
    console.log(keys)
    for (var i = 0; i < keys.length; ++i) {
        if (tmp[keys[i]]["draw"]) {
            wordAndFreq[keys[i]] = tmp[keys[i]]["times"] + 10.5;
        } else {
            wordAndFreq[keys[i]] = (tmp[keys[i]]["times"] | 0); //必大於1
        }
    }
    console.log(wordAndFreq)

    var svg_location = "#cloud";
    var width = $(svg_location).width();
    var height = $(svg_location).height();
    var fill = d3.scale.category20(); // 顏色範圍 D3內定義的20種顏色 此處會隨機調用20種中其中一種為文字上色
    var linear_color = d3.scale.linear() // 自訂顏色範圍 根據權重比例決定顏色
        //.domain([0,1,2,3,4,5,6,10,15,20,100]) // 原本的資料範圍
        .domain([1, 3, 5, 10, 20, 30, 50, 100])
        //.range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);
        .range(["#222", "#333", "#444", "#555", "#666", "#777", "#888", "#999", "#aaa", "#bbb", "#ccc", "#ddd"]); // 期望的資料範圍

    var ordinal_color = d3.scale.ordinal() // n個類別使用n種顏色
        .domain(0, 0.1, 0.2, 0.3)
        .range(["#cc0000", "#666666", "#227700", "#0000AA"]);
    var word_entries = d3.entries(wordAndFreq);

    var xScale = d3.scale.linear()
        .domain([0, d3.max(word_entries, function(d) {
            return d.value;
        })])
        .range([10, 100]);

    d3.layout.cloud().size([width, height]) //設定尺寸
        .timeInterval(20)
        .words(word_entries) //所有詞打包
        .fontSize(function(d) { return xScale(+d.value); })
        .text(function(d) { return d.key; })
        .rotate(function() { return ~~(Math.random() * 2) * 90; }) //只會旋轉0或90度
        //.rotate(function() { return (Math.random()-0.5)*180 ; }) // -180~180度間任意旋轉
        // ~~(x) 等價於 Math.floor(x) 但執行速度稍快
        .font("Impact")
        .on("end", draw)
        .start();

    function draw(words) {
        d3.select(svg_location).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return xScale(d.value) + "px"; })
            .style("font-family", "Impact")
            //.style("fill", function(d,i) { return fill(i); }) //隨機決定文字顏色
            //.style("fill", function(d,i) { return linear_color(i); })
            //.style("fill", function(d) {return ordinal_color(d.value%1); })
            /*
            .style("fill",function(d){var r=~~(Math.random()*105+150);
                                      var g=~~(Math.random()*105+150);
                                      var b=~~(Math.random()*105+150);
                                      console.log(r,g,b);
                                      return (d.value%1==0)? ("rgb("+r+","+g+","+b+")") : "rgb(255,0,0)" ; } )
            */
            //hsl(顏色,鮮豔度,白度)
            .style("fill", function(d) {
                if (d.value % 1 == 0) {
                    return "hsl(" + ~~(Math.random() * 360) + "," + ~~(Math.random() * 70) + "%,60%)"
                } else if (d.value % 1 == 0.5) { //med word
                    return "hsl(0, 100%, 40%)";
                }
            })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.key; });
    }
    d3.layout.cloud().stop();
}







}