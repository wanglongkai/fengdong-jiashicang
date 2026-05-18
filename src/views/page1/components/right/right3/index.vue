<template>
	<div>
		<Page1ShortTitle title="带动农户增收" />
		<div class="charts">
			<p class="title">年度同比<span class="plus">+15.2% ↑</span></p>
			<div ref="chartRef" class="chart"></div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import Page1ShortTitle from '@/components/page1shorttitle/page1shorttitle.vue'
import { useEcharts } from '@/hooks/useEcharts'
import * as echarts from 'echarts'

const { chartRef, setOptions } = useEcharts()

onMounted(() => {
	setOptions({
		grid: {
			top: '20%',
			left: '5%',
			right: '10%',
			bottom: '5%',
			containLabel: true
		},
		title: {
			text: '单位/元',
			right: 0,
			top: 0,
			textStyle: {
				color: '#A1C0E6',
				fontSize: 6,
				fontFamily: 'PingFang SC',
				fontWeight: 'normal'
			}
		},
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgba(1, 20, 42, 0.8)',
			borderColor: '#47E0FF',
			textStyle: { color: '#fff' }
		},
		xAxis: {
			type: 'category',
			boundaryGap: false, // 让折线从 y 轴开始，不要留白
			data: ['2020', '2021', '2022', '2023', '2024'],
			axisLine: { show: false },
			axisTick: { show: false },
			axisLabel: {
				color: '#A1C0E6',
				fontSize: 6,
				fontFamily: 'D-DIN-PRO',
				margin: 8
			}
		},
		yAxis: {
			type: 'value',
			min: 0,
			max: 10000,
			interval: 2000,
			splitLine: { show: false },
			axisLine: { show: false },
			axisTick: { show: false },
			axisLabel: {
				color: '#A1C0E6',
				fontSize: 6,
				fontFamily: 'D-DIN-PRO'
			}
		},
		series: [
			{
				name: '带动农户增收',
				type: 'line',
				smooth: true,
				symbol: 'none', // 隐藏折线上的圆点
				lineStyle: {
					color: '#0075FF', // 蓝色的折线
					width: 2
				},
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{ offset: 0, color: 'rgba(0, 117, 255, 0.5)' }, // 顶部半透明蓝色
						{ offset: 1, color: 'rgba(0, 117, 255, 0)' }    // 底部透明
					])
				},
				data: [8000, 5200, 4500, 4000, 6000]
			}
		]
	})
})
</script>
<style lang="less" scoped>
.charts {
	width: 138px;
	height: 140px;
	background: url('../assets/cardbg2.png') no-repeat center center;
	background-size: 100% 100%;
	padding-top: 6px;

	.title {
		color: #FFF;
		font-family: "PingFang SC";
		font-size: 6px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		padding-left: 4px;

		.plus {
			color: #34C759;
			font-family: D-DIN-PRO;
			font-size: 8px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
		}
	}

	.chart {
		width: 138px;
		height: 110px;
	}
}
</style>