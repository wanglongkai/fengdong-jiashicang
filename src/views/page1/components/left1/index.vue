<template>
	<div class="left1">
		<Page1LongTitle title="产业运营体系" />
		<div class="tongji">
			<div ref="chartRef" class="chart-container" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Page1LongTitle from '@/components/page1longtitle/page1longtitle.vue'
import { useEcharts } from '@/hooks/useEcharts'
import * as echarts from 'echarts'

const { chartRef, setOptions } = useEcharts()

const data = [
	{
		name: '政企合作单位',
		value: 15.88,
		num: '6,782',
		unit: '家',
		itemStyle: {
			color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
				{ offset: 0, color: 'rgba(137, 121, 255, 0.00)' },
				{ offset: 1, color: '#8979FF' }
			])
		},
		label: {
			rich: {
				name: {
					color: '#ffffff',
					fontSize: 8,
					padding: [0, 0, -12, 0],
					fontFamily: 'D-DIN-PRO'
				},
				per: {
					fontSize: 6,
					fontFamily: 'D-DIN-PRO',
					padding: [18, 0, 0, 0],
					color: '#8979FF'
				},
				num: {
					color: '#8979FF',
					fontSize: 6,
					fontFamily: 'D-DIN-PRO',
					padding: [2, 0, 0, 0],
				},
				unit: {
					color: '#8979FF',
					fontSize: 6,
					fontFamily: 'D-DIN-PRO',
					padding: [2, 0, 0, 0],
				}
			}
		},
		labelLine: {
			lineStyle: { color: '#8A68E3' }
		}
	},
	{
		name: '员工数',
		value: 46.63,
		num: '642,688',
		unit: '人',
		itemStyle: {
			color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
				{ offset: 0, color: 'rgba(255, 128, 0, 0.00)' },
				{ offset: 1, color: '#FF8000' }
			])
		},
		label: {
			rich: {
				name: {
					color: '#ffffff',
					fontSize: 8,
					padding: [0, 0, -12, 0],
					fontFamily: 'D-DIN-PRO'
				},
				per: {
					fontSize: 6,
					fontFamily: 'D-DIN-PRO',
					padding: [18, 0, 0, 0],
					color: '#FF9E3D'
				},
				num: {
					color: '#FF9E3D',
					fontSize: 6,
					fontFamily: 'D-DIN-PRO',
					padding: [2, 0, 0, 0],
				},
				unit: {
					color: '#FF9E3D',
					fontSize: 6,
					fontFamily: 'D-DIN-PRO',
					padding: [2, 0, 0, 0],
				}
			}
		},
		labelLine: {
			lineStyle: { color: '#E87700' }
		}
	},
	{
		name: '专家数',
		value: 47.03,
		num: '876,457',
		unit: '人',
		itemStyle: {
			color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
				{ offset: 0, color: 'rgba(0, 119, 255, 0.00)' },
				{ offset: 1, color: '#0077FF' }
			])
		},
		label: {
			rich: {
				name: {
					color: '#ffffff',
					fontSize: 8,
					padding: [0, 0, -12, 0],
					fontFamily: 'D-DIN-PRO'
				},
				per: {
					fontSize: 6,
					fontFamily: 'D-DIN-PRO',
					padding: [18, 0, 0, 0],
					color: '#07F'
				},
				num: {
					color: '#07F',
					fontSize: 6,
					fontFamily: 'D-DIN-PRO',
					padding: [2, 0, 0, 0],
				},
				unit: {
					color: '#07F',
					fontSize: 6,
					fontFamily: 'D-DIN-PRO',
					padding: [2, 0, 0, 0],
				}
			}
		},
		labelLine: {
			lineStyle: { color: '#0090FF' }
		}
	}
]

onMounted(() => {


	setOptions({
		title: {
			text: '{name|总数量}\n{val|109.54}',
			top: 'center',
			left: 'center', // 完全居中
			textStyle: {
				rich: {
					name: { color: '#ffffff', fontSize: 12, padding: [0, 0, 4, 0], fontFamily: 'D-DIN-PRO' }, // 颜色改为白色，字号调大一点
					val: { color: '#ffffff', fontSize: 18, fontWeight: 'bold', fontFamily: 'D-DIN-PRO' } // 字号调大一点
				}
			}
		},
		series: [
			{
				type: 'pie',
				center: ['50%', '50%'], // 饼图中心点居中
				radius: ['55%', '75%'], // 保持环形粗细比例
				avoidLabelOverlap: true,
				label: {
					alignTo: 'edge', // 引导线对齐到边缘
					edgeDistance: 10, // 距离边缘的距离
					minMargin: 5,
					formatter: (params: any) => {
						return `{name|${params.name}}\n{per|${params.value}%}\n{num|${params.data.num}}{unit|${params.data.unit}}`
					},

				},
				labelLine: {
					show: true,
					length: 15,
					length2: 0, // 设置为0，配合 labelLayout 动态计算第二段长度
					maxSurfaceAngle: 80,
					lineStyle: {
						width: 1
					}
				},
				labelLayout: function (params: any) {
					// 动态计算引导线末端位置，实现折线效果
					const chartInstance = chartRef.value ? echarts.getInstanceByDom(chartRef.value) : null;
					const chartWidth = chartInstance ? chartInstance.getWidth() : 283;

					const isLeft = params.labelRect.x < chartWidth / 2;
					const points = params.labelLinePoints;
					// 更新结束点位置，让引导线延伸到文字的边缘
					points[2][0] = isLeft
						? params.labelRect.x
						: params.labelRect.x + params.labelRect.width;
					return {
						labelLinePoints: points
					};
				},
				data: data
			}
		]
	})
})
</script>

<style lang="less" scoped>
.left1 {
	margin-bottom: 16px;
}

.tongji {
	width: 283px;
	height: 150px;
	padding: 10px;
	/* 加高一点点，防止标签文字因为过长被容器截断 */
	background: url('./bg.png') no-repeat center center;
	background-size: 100% 100%;

	.chart-container {
		width: 100%;
		height: 100%;
	}
}
</style>