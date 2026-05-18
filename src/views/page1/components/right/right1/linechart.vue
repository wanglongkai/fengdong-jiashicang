<template>
	<div ref="chartRef" class="line-charts"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useEcharts } from '@/hooks/useEcharts'
import * as echarts from 'echarts'

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
			itemWidth: 16,
			itemHeight: 8,
			textStyle: {
				color: '#A1C0E6',
				fontSize: 6,
				fontFamily: 'PingFang SC'
			},
			data: ['线上', '线下']
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
			boundaryGap: false,
			data: ['1月', '2月', '3月', '4月', '5月'],
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
				margin: 12
			}
		},
		yAxis: {
			type: 'value',
			min: 0,
			max: 100,
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
				name: '线上',
				type: 'line',
				smooth: true,
				symbol: 'diamond', // 菱形拐点
				symbolSize: 8,
				itemStyle: {
					color: '#0075FF', // 节点颜色
					borderColor: '#11223A', // 节点边框颜色（深色背景）
					borderWidth: 2
				},
				lineStyle: {
					color: '#0075FF',
					width: 2
				},
				data: [78, 55, 47, 41, 60]
			},
			{
				name: '线下',
				type: 'line',
				smooth: true,
				symbol: 'diamond',
				symbolSize: 8,
				itemStyle: {
					color: '#00FFC7',
					borderColor: '#11223A',
					borderWidth: 2
				},
				lineStyle: {
					color: '#00FFC7',
					width: 2
				},
				areaStyle: {
					// 线下这条线带有下方渐变阴影发光效果
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{ offset: 0, color: 'rgba(0, 255, 199, 0.2)' },
						{ offset: 1, color: 'rgba(0, 255, 199, 0)' }
					])
				},
				data: [92, 30, 88, 56, 5]
			}
		]
	})
})
</script>

<style lang="less" scoped>
.line-charts {
	width: 138px;
	height: 110px;
}
</style>