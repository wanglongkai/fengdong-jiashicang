<template>
	<div class="left2">
		<Page1LongTitle title="实时监控中心" />
		<div class="video-grid">
			<div v-for="(url, index) in videourls" :key="index" class="video-item">
				<!-- 视频容器作为底层 -->
				<video :src="url" autoplay loop muted playsinline class="video-content"></video>


				<!-- 顶部渐变遮罩与状态 -->
				<div class="top-overlay">
					<div class="status-dot"></div>
					<span class="status-text">黑山羊加工区</span>
				</div>


			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Page1LongTitle from '@/components/page1longtitle/page1longtitle.vue'
const videourls = [
	'/无人机.mp4',
	'/hero.mp4',
	'/v3.mp4',
	'/video.mp4',
]
</script>

<style lang="less" scoped>
.left2 {
	margin-bottom: 16px;
}

.video-grid {
	margin-top: 8px;
	width: 282px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 6px;
}

.video-item {
	position: relative;
	width: 138px;
	height: 68px;
	box-sizing: border-box;
	overflow: hidden;
	background: url('./card-bg.png') no-repeat center center;
	background-size: 100% 100%;

	/* 视频铺满整个卡片 */
	.video-content {
		position: absolute;
		top: 3px;
		left: 1px;
		width: 136px;
		height: 63px;
		object-fit: cover;
		display: block;
	}



	/* 顶部渐变遮罩与状态栏 */
	.top-overlay {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 134px;
		height: 12px;
		display: flex;
		align-items: center;
		padding: 0 8px;
		box-sizing: border-box;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.60) 50%, rgba(0, 0, 0, 0.00) 100%);

		.status-dot {
			width: 3px;
			height: 3px;
			background-color: #00FFC7;
			border-radius: 50%;
			margin-right: 4px;
		}

		.status-text {
			color: #FFFFFF;
			font-family: 'Inter', 'PingFang SC', sans-serif;
			font-size: 6px;
			transform-origin: left center;
			white-space: nowrap;
		}
	}

}
</style>