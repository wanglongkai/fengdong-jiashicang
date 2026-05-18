<template>
	<div>
		<Page1ShortTitle title="带动就业人数" />
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

const { chartRef, setOptions } = useEcharts()

onMounted(() => {
	setOptions({
		grid: {
			top: '20%',
			left: '5%',
			right: '5%',
			bottom: '15%',
			containLabel: true
		},
		title: {
			text: '单位/人',
			right: 0,
			top: 0,
			textStyle: {
				color: '#A1C0E6',
				fontSize: 6,
				fontFamily: 'PingFang SC',
				fontWeight: 'normal'
			}
		},
		legend: {
			bottom: 3,
			itemWidth: 8,
			itemHeight: 8,
			itemGap: 5,
			textStyle: {
				color: '#A1C0E6',
				fontSize: 6,
				fontFamily: 'PingFang SC'
			},
			data: [
				{ name: '制种', icon: 'roundRect' },
				{ name: '农服', icon: 'roundRect' },
				{ name: '代制种', icon: 'roundRect' },
				{ name: '上游', icon: 'roundRect' }
			]
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { type: 'shadow' },
			backgroundColor: 'rgba(1, 20, 42, 0.8)',
			borderColor: '#47E0FF',
			textStyle: { color: '#fff' }
		},
		xAxis: {
			type: 'category',
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
			max: 5000,
			interval: 1000,
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
				name: '制种',
				type: 'bar',
				stack: 'total',
				barWidth: 10,
				itemStyle: {
					color: '#2495D6',
					borderRadius: [0, 0, 4, 4] // 底部圆角
				},
				data: [1300, 1600, 1700, 1800, 2200]
			},
			{
				name: '农服',
				type: 'bar',
				stack: 'total',
				itemStyle: { color: '#B3C424' }, // 黄绿色
				data: [200, 200, 250, 250, 300]
			},
			{
				name: '代制种',
				type: 'bar',
				stack: 'total',
				itemStyle: { color: '#00FFC7' }, // 亮青色
				data: [250, 300, 300, 350, 400]
			},
			{
				name: '上游',
				type: 'bar',
				stack: 'total',
				itemStyle: {
					color: '#F89643', // 橙色
					borderRadius: [4, 4, 0, 0] // 顶部圆角
				},
				label: {
					show: true,
					position: 'top', // 在最顶端显示总数
					color: '#A1C0E6',
					fontSize: 4, // 根据要求修改为 4像素
					fontFamily: 'D-DIN-PRO',
					formatter: (params: any) => {
						// 计算总和
						// 在 stack 模式下，获取顶端数据项即可展示总和，这里简化处理，直接算出总和或者传入总和
						const dataIndex = params.dataIndex;
						const sums = [1869, 3263, 4005, 4035, 4690];
						return sums[dataIndex];
					}
				},
				data: [119, 1163, 1755, 1635, 1790]
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
		height: 120px;
	}
}
</style>