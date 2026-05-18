<template>
	<div>
		<div class="airplane-video" @click="showVideo = true"></div>

		<!-- 视频播放弹窗 -->
		<el-dialog v-model="showVideo" title="无人机画面" destroy-on-close class="video-dialog">
			<div class="video-container">
				<!-- 当弹窗打开时渲染 video -->
				<video v-if="showVideo" src="/无人机.mp4" controls autoplay muted class="monitor-video"></video>
			</div>
		</el-dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 控制视频弹窗显示状态
const showVideo = ref(false)
</script>

<style lang="less" scoped>
.airplane-video {
	width: 100px;
	height: 50px;
	background: url('@/assets/img/feiji.png') no-repeat center center;
	background-size: contain;
	position: fixed;
	right: 910px;
	top: 235px;
	cursor: pointer;
	z-index: 10;

	/* 增加一个轻微的悬停动效 */
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.1);
	}
}

/* 针对弹窗内视频的样式 */
.video-container {
	height: 60vh;
	aspect-ratio: 16 / 9;
	/* 保持16:9比例 */
	background-color: #000;
	display: flex;
	align-items: center;
	justify-content: center;

	.monitor-video {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
}
</style>

<style lang="less">
/* 全局修改弹窗样式以适配大屏暗黑风格，避免白色弹窗过于突兀 */
.video-dialog {
	background-color: rgba(1, 20, 42, 0.9) !important;
	border: 1px solid #47E0FF;
	width: fit-content;

	.el-dialog__title {
		color: #47E0FF !important;
		font-family: 'PingFang SC', sans-serif;
	}

	.el-dialog__headerbtn .el-dialog__close {
		color: #A1C0E6;

		&:hover {
			color: #47E0FF;
		}
	}

	.el-dialog__body {
		padding: 5px;
	}
}
</style>