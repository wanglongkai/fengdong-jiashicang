<template>
	<div class="action" @mouseenter="isHover = true" @mouseleave="isHover = false"></div>
	<div :class="{ 'centersheep': true, 'hover': isHover }">

		<!-- 左侧连线锚点 -->
		<div class="anchor-line">
			<svg width="150" height="150" viewBox="0 0 150 150">
				<!-- 顶部建筑上的圆点 -->
				<circle cx="20" cy="20" r="3" fill="#47E0FF" />
				<circle cx="20" cy="20" r="8" fill="none" stroke="#47E0FF" />
				<!-- 连线 -->
				<path d="M 20 20 L 60 20 L 120 140 L 150 140" stroke="#47E0FF" stroke-width="1.5" fill="none" />
			</svg>
		</div>

		<!-- 右侧信息面板 -->
		<div class="panel">
			<!-- 装饰边框和角 -->
			<div class="corner top-left"></div>
			<div class="corner top-right"></div>
			<div class="corner bottom-right"></div>
			<!-- 左下角的发光大圆圈 -->
			<div class="bottom-left-circle">
				<div class="inner-circle"></div>
			</div>

			<div class="panel-content">
				<!-- 标题 -->
				<div class="header">
					<span class="title">加工厂 A1区 - 黑山羊 精深加工</span>
				</div>

				<!-- 进度条区域 -->
				<div class="progress-section">
					<div class="progress-bar">
						<div class="progress-track"></div>
						<div class="progress-fill">
						</div>
					</div>
					<div class="progress-text">运行中 85%</div>
				</div>

				<!-- 设备工人信息 -->
				<div class="info-row">
					<span>设备：12/12 在线</span>
					<span style="margin-left: 20px;">工人：45人 在岗</span>
				</div>

				<!-- 中间双列：温湿度 & 折线图 -->
				<div class="middle-section">
					<div class="temp-hum">
						<div class="section-title">2号冷库温湿度</div>
						<div class="values">
							<div class="val-item">
								<span class="num">-18.5</span>
								<span class="unit">℃</span>
							</div>
							<div class="val-item" style="margin-left: 16px;">
								<span class="num">42</span>
								<span class="unit">%</span>
							</div>
						</div>
					</div>
					<div class="chart-box">
						<div class="section-title" style="text-align: right; padding-right: 10px;">当前总库存率</div>
						<div ref="chartRef" class="stock-chart"></div>
					</div>
				</div>

				<!-- 底部双列：物流详情 -->
				<div class="bottom-section">
					<div class="logistics-left">
						<div class="section-title">实时物流详情</div>
						<div class="logistics-item">
							<img src="../pixed-cats/assets/cat1.png" class="l-icon" />
							<span class="l-text">晋E 38210 (太原方向)</span>
						</div>
						<div class="logistics-item">
							<img src="../pixed-cats/assets/cat2.png" class="l-icon" />
							<span class="l-text">配送无人机 D-02</span>
						</div>
					</div>
					<div class="logistics-right">
						<div class="r-text cyan">4辆冷链车在途</div>
						<div class="r-text white">预计1.5h到达</div>
						<div class="r-text cyan">配送中...</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useEcharts } from '@/hooks/useEcharts'

const { chartRef, setOptions } = useEcharts()
const isHover = ref(false)

onMounted(() => {
	setOptions({
		grid: {
			top: 5,
			bottom: 5,
			left: 10,
			right: 10
		},
		xAxis: {
			type: 'category',
			data: ['1', '2', '3', '4', '5', '6', '7'],
			show: false
		},
		yAxis: {
			type: 'value',
			show: false,
			min: 0,
			max: 100
		},
		series: [{
			data: [50, 45, 55, 60, 58, 62, 55],
			type: 'line',
			smooth: false,
			symbol: 'circle',
			symbolSize: 6,
			itemStyle: {
				color: '#47E0FF'
			},
			lineStyle: {
				color: '#47E0FF',
				width: 2
			}
		}]
	})
})
</script>

<style lang="less" scoped>
.action {
	position: fixed;
	bottom: 229px;
	right: 980px;
	width: 60px;
	height: 60px;
	z-index: 10000;
	cursor: pointer;
}

.centersheep {
	position: fixed;
	bottom: 145px;
	right: 100px;
	transform: translateX(-50%);
	display: flex;
	align-items: flex-end;
	background: transparent;
	z-index: 10;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
}

.hover {
	opacity: 1;
}

.anchor-line {
	width: 150px;
	height: 150px;
	margin-bottom: -10px;
	/* Align with the bottom-left circle */
}

.panel {
	width: 480px;
	background: rgba(1, 20, 42, 0.4);
	border: 1px solid rgba(71, 224, 255, 0.4);
	position: relative;
	backdrop-filter: blur(4px);
	box-shadow: inset 0 0 20px rgba(71, 224, 255, 0.15);
	margin-left: -10px;
	/* Overlap with SVG */
}

/* 边角装饰 */
.corner {
	position: absolute;
	width: 10px;
	height: 10px;
	border: 2px solid #47E0FF;
}

.top-left {
	top: -1px;
	left: -1px;
	border-right: none;
	border-bottom: none;
}

.top-right {
	top: -1px;
	right: -1px;
	border-left: none;
	border-bottom: none;
}

.bottom-right {
	bottom: -1px;
	right: -1px;
	border-left: none;
	border-top: none;
}

/* 左下角发光圆 */
.bottom-left-circle {
	position: absolute;
	bottom: -10px;
	left: -10px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 2px solid #47E0FF;
	background: rgba(1, 20, 42, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 10px #47E0FF;

	.inner-circle {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #47E0FF;
	}
}

.panel-content {
	padding: 20px;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}

.header {
	margin-bottom: 12px;

	.title {
		color: #FFF;
		font-family: D-DIN-PRO;
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
}

.progress-section {
	display: flex;
	align-items: center;
	margin-bottom: 10px;

	.progress-bar {
		flex: 1;
		height: 12px;
		background: rgba(255, 255, 255, 0.1);
		position: relative;
		margin-right: 15px;

		.progress-fill {
			width: 85%;
			height: 100%;
			background: linear-gradient(90deg, rgba(71, 224, 255, 0.2), #47E0FF);
			position: relative;
		}
	}

	.progress-text {
		color: #FFF;
		font-family: 'PingFang SC', sans-serif;
		font-size: 12px;
		white-space: nowrap;
	}
}

.info-row {
	color: #A1C0E6;
	font-family: 'PingFang SC', sans-serif;
	font-size: 12px;
	margin-bottom: 15px;
}

.middle-section {
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	padding-bottom: 15px;

	.temp-hum {
		flex: 1;

		.values {
			display: flex;
			margin-top: 5px;

			.val-item {
				display: flex;
				align-items: baseline;

				.num {
					color: #FFF;
					font-family: 'D-DIN-PRO', sans-serif;
					font-size: 24px;
					line-height: 1;
				}

				.unit {
					color: #A1C0E6;
					font-size: 12px;
					margin-left: 2px;
				}
			}
		}
	}

	.chart-box {
		flex: 1;

		.stock-chart {
			width: 100%;
			height: 40px;
			margin-top: 5px;
		}
	}
}

.section-title {
	color: #A1C0E6;
	font-family: 'PingFang SC', sans-serif;
	font-size: 12px;
	margin-bottom: 5px;
}

.bottom-section {
	display: flex;
	justify-content: space-between;

	.logistics-left {
		.logistics-item {
			display: flex;
			align-items: center;
			margin-top: 8px;

			.l-icon {
				width: 16px;
				height: 16px;
				object-fit: contain;
				margin-right: 8px;
			}

			.l-text {
				color: #FFF;
				font-family: 'PingFang SC', sans-serif;
				font-size: 12px;
			}
		}
	}

	.logistics-right {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		text-align: right;

		.r-text {
			font-family: 'PingFang SC', sans-serif;
			font-size: 12px;
			margin-top: 4px;

			&.cyan {
				color: #47E0FF;
			}

			&.white {
				color: #FFF;
			}
		}
	}
}
</style>
