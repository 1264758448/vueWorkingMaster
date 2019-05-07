<template>
  <div class="dashboard-container">
      <div class='moreboss'>
           <div class='box'>
            <h2>个人信息</h2>
            <ul>
              <li>账号{{list}}</li>
              <li>员工:管理员(总部)</li>
              <li>所属公司:总部</li>
              <li>所属公司:研发部</li>
              <li>上次登录时间:2019-4-19  13:34</li>
            </ul>
      </div>
     </div>
      <div class='bigboss'>
            <div id="myChart" :style="{width: '33.33%', height: '300px'}"></div>
            <div id="myChart1" :style="{width: '33.33%', height: '300px'}"></div>
            <div id="myChart2" :style="{width: '33.33%', height: '300px'}"></div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:null
    }
  },
  created() {
    this.loc()
  },
  mounted(){
    this.drawLine();
    this.drawLine1();
    this.drawLine2();
  },
  methods: {
    loc(){
      this.list = JSON.parse(localStorage.getItem("user") || '[]')
    },
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '票数统计(7日)--件' },
             xAxis: {
                  type: 'category',
                    data: ['0号', '1号', '2号', '3号', '4号', '5号', '6号']
              },
              yAxis: {
                  type: 'value'
              },
              series: [{
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  type: 'line'
              }]
        });
    },
     drawLine1(){
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
            myChart1.setOption({
              title: { text: '重量/体积(7日)' },
                    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
        }
    },
  
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
            })
    },
    drawLine2(){
          // 基于准备好的dom，初始化echarts实例
          let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
          // 绘制图表
          myChart2.setOption({
              title: { text: '成本统计(7日)--元' },
              xAxis: {
                    type: 'category',
                      data: ['0号', '1号', '2号', '3号', '4号', '5号', '6号']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
          });
      },

    }
}
</script>
<style>
    .bigboss{
      overflow:hidden;
    }
    .bigboss div{
      float:left;
      background:#ccc;
    }
    .moreboss{
      width:100%;
      height:300px;
      background:skyblue;
      border-radius: 10%;
    }
    .box{
      text-align: center;
    }
    *{
      list-style:none;
    }
</style>
