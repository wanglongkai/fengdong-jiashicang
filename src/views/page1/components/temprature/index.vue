<script setup lang="ts">
import { ref } from 'vue'

// 模拟天气数据
const weatherData = ref({
	status: '多云',
	temperature: 32,
})
</script>

<template>
	<div class="weather-container">
		<div class="weather-status">{{ weatherData.status }}</div>
		<div class="temperature-wrapper">
			<span class="temperature-value">{{ weatherData.temperature }}</span>
			<span class="temperature-unit">℃</span>
		</div>
		<div class="air-quality-badge">
			优26
		</div>
	</div>
</template>

<style scoped lang="less">
.weather-container {
	display: flex;
	align-items: center;
	color: #ffffff;
	position: absolute;
	top: 36px;
	left: 30px;

	.weather-status {
		color: #D8D8D8;
		font-family: D-DIN-PRO;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-right: 4px;
	}

	.temperature-wrapper {
		display: flex;
		align-items: flex-start;
		margin-right: 4px;

		.temperature-value {
			color: #FFF;
			font-family: D-DIN-PRO;
			font-size: 32px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		.temperature-unit {
			color: #FFF;
			font-family: D-DIN-PRO;
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}

	.air-quality-badge {
		display: flex;
		padding: 2px 8px;
		justify-content: center;
		align-items: center;
		gap: 10px;
		border-radius: 80px;
		background: linear-gradient(270deg, #336DE7 0.21%, #29CBE8 100%);
		color: #181818;
		font-family: D-DIN-PRO;
		font-size: 10px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
}
</style>