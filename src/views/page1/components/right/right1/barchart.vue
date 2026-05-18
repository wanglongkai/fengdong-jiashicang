<template>
	<div ref="chartRef" class="bar-charts"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useEcharts } from '@/hooks/useEcharts'

const { chartRef, setOptions } = useEcharts()

onMounted(() => {
	setOptions({
		grid: {
			top: '15%',
			left: '5%',
			right: '5%',
			bottom: '20%',
			containLabel: true
		},
		legend: {
			bottom: '0',
			itemWidth: 10,
			itemHeight: 10,
			textStyle: {
				color: '#A1C0E6',
				fontSize: 6,
				fontFamily: 'PingFang SC'
			},
			data: [
				{ name: '销量', icon: 'diamond' },
				{ name: '产值', icon: 'roundRect' }
			]
		},
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgba(1, 20, 42, 0.8)',
			borderColor: '#47E0FF',
			textStyle: {
				color: '#fff'
			}
		},
		xAxis: {
			type: 'category',
			data: ['蜂蜜', '小杂粮', '黑山羊', '菌菇', '连翘'],
			axisLine: {
				show: false // 隐藏 x 轴轴线
			},
			axisTick: {
				show: false // 隐藏 x 轴刻度
			},
			axisLabel: {
				color: '#A1C0E6',
				fontSize: 6,
				fontFamily: 'PingFang SC',
				margin: 8,
				interval: 0 // 强制显示所有标签
			}
		},
		yAxis: {
			type: 'value',
			min: 0,
			max: 80,
			interval: 20,
			splitLine: {
				show: false // 隐藏网格线
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				color: '#A1C0E6',
				fontSize: 6,
				fontFamily: 'D-DIN-PRO'
			}
		},
		series: [
			{
				name: '产值',
				type: 'bar',
				barWidth: 8, // 柱子宽度
				itemStyle: {
					color: '#00FFC7', // 亮青色
					borderRadius: [4, 4, 4, 4] // 上下都带圆角的胶囊状
				},
				data: [65, 52, 70, 85, 72]
			},
			{
				name: '销量',
				type: 'line',
				smooth: true,
				symbol: 'diamond', // 菱形拐点
				symbolSize: 8,
				itemStyle: {
					color: '#0075FF', // 蓝色节点
					borderColor: '#11223A', // 节点边框颜色（深色背景）
					borderWidth: 2
				},
				lineStyle: {
					color: '#0075FF',
					width: 2
				},
				data: [80, 54, 46, 40, 60]
			}
		]
	})
})
</script>

<style lang="less" scoped>
.bar-charts {
	width: 138px;
	height: 110px;
}
</style>