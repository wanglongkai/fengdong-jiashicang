<template>
	<div ref="chartRef" class="pie-charts"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useEcharts } from '@/hooks/useEcharts'
import * as echarts from 'echarts'

const { chartRef, setOptions } = useEcharts()

onMounted(() => {
	const data = [
		{
			name: '蜂蜜',
			value: 264,
			itemStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
					{ offset: 0, color: 'rgba(255, 128, 0, 0.1)' },
					{ offset: 1, color: '#FF8000' }
				])
			}
		},
		{
			name: '小杂粮',
			value: 102,
			itemStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
					{ offset: 0, color: 'rgba(0, 117, 255, 0.1)' },
					{ offset: 1, color: '#0075FF' }
				])
			}
		},
		{
			name: '黑山羊',
			value: 472,
			itemStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
					{ offset: 0, color: 'rgba(138, 104, 227, 0.1)' },
					{ offset: 1, color: '#8A68E3' }
				])
			}
		},
		{
			name: '菌菇',
			value: 457,
			itemStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
					{ offset: 0, color: 'rgba(0, 255, 199, 0.1)' },
					{ offset: 1, color: '#00FFC7' }
				])
			}
		},
		{
			name: '连翘',
			value: 365,
			itemStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
					{ offset: 0, color: 'rgba(255, 204, 0, 0.1)' },
					{ offset: 1, color: '#FFCC00' }
				])
			}
		},
		{
			name: '山楂',
			value: 63,
			itemStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
					{ offset: 0, color: 'rgba(71, 224, 255, 0.1)' },
					{ offset: 1, color: '#47E0FF' }
				])
			}
		}
	]

	setOptions({
		title: {
			text: '品类占比（件）',
			top: 'center',
			left: 'center',
			textStyle: {
				color: '#ffffff',
				fontSize: 6,
				fontFamily: 'PingFang SC',
				fontWeight: 'bold'
			}
		},
		series: [
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: ['35%', '90%'], // 内外半径，留出中间写标题
				// 注释或删除 roseType，使扇形外半径统一，不再按数值变小
				// roseType: 'radius', 
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 2, // 边缘微圆角
					borderColor: '#01142A', // 扇形间的间隔颜色，与背景色一致形成镂空
					borderWidth: 1
				},
				label: {
					show: true,
					position: 'inside', // 标签写在饼图内部
					formatter: (params: any) => {
						return `{name|${params.name}}\n{val|${params.value}万件}`
					},
					rich: {
						name: {
							color: '#ffffff',
							fontSize: 6,
							fontFamily: 'PingFang SC',
							padding: [0, 0, 2, 0]
						},
						val: {
							color: '#ffffff',
							fontSize: 6,
							fontFamily: 'D-DIN-PRO'
						}
					}
				},
				labelLine: {
					show: false // 不显示引导线
				},
				data: data
			}
		]
	})
})
</script>

<style lang="less" scoped>
.pie-charts {
	width: 138px;
	height: 110px;
}
</style>