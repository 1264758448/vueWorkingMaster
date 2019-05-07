<template>
	<div style="width:100%;height:638px;border:1px solid gray" id="container"></div>
</template>
 
<script>
export default {
  data() {
	   return {
	   }
	},
	mounted() {
		this.maps()
	},
	methods:{
			maps(){
				// 百度地图API功能
					var map = new BMap.Map("container");
					map.centerAndZoom(new BMap.Point(118.454, 32.955), 6);
					map.enableScrollWheelZoom();
					var beijingPosition=new BMap.Point(116.432045,39.910683),
						hangzhouPosition=new BMap.Point(120.129721,30.314429),
						taiwanPosition=new BMap.Point(121.491121,25.127053);
						
					var points = [beijingPosition,hangzhouPosition, taiwanPosition];

					var curve = new BMapLib.CurveLine(points, {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5}); //创建弧线对象
					map.addOverlay(curve); //添加到地图中
					curve.enableEditing(); //开启编辑功能
			},
	}
}
</script>
 
<style>
body, html {width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}
		#allmap{width:100%;height:500px;}
		p{margin-left:5px; font-size:14px;}
</style>