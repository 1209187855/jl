(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (width > 540) { // 最大宽度
            width = 540;
        }
        var rem = width / 10; // 将屏幕宽度分成10份， 1份为1rem
        docEl.style.fontSize = rem + 'px';
        var height_ = $(window).height();
        $('.swiper-container').css('height',height_)
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    refreshRem();

})(window);

//执行echarts方法
function chart(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        backgroundColor: '#fff',

        title: {
            text: '个人综合素质自评',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#000'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'html'},
                    {value:310, name:'css'},
                    {value:274, name:'js'},
                    {value:400, name:'Jquery'},
                    {value:235, name:'Bootstrop'}
                ].sort(function (a, b) { return a.value - b.value}),
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: '#000'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#000'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F39C12',
                        // shadowBlur: 20,
                        shadowColor: '#D35400'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
//canvas
function canvas(){
    var config = {
      vx: 4,
      vy:  4,
      height: 2,
      width: 2,
      count: 100,
      color: "121, 162, 185",
      stroke: "100,200,180",
      dist: 6000,
      e_dist: 20000,
      max_conn: 10
    }
    CanvasParticle(config);
}