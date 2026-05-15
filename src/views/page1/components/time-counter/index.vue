<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 响应式状态保存时间数据
const timeStr = ref('')
const dateStr = ref('')
const weekStr = ref('')

let timer: number | null = null

/**
 * 更新时间的函数
 */
const updateTime = () => {
	const now = new Date()

	// 格式化 HH:mm:ss
	const hours = String(now.getHours()).padStart(2, '0')
	const minutes = String(now.getMinutes()).padStart(2, '0')
	const seconds = String(now.getSeconds()).padStart(2, '0')
	timeStr.value = `${hours}:${minutes}:${seconds}`

	// 格式化 YYYY/MM/DD
	const year = now.getFullYear()
	const month = String(now.getMonth() + 1).padStart(2, '0')
	const date = String(now.getDate()).padStart(2, '0')
	dateStr.value = `${year}/${month}/${date}`

	// 格式化 星期X
	const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
	weekStr.value = weeks[now.getDay()]
}

onMounted(() => {
	// 组件挂载时立即执行一次，避免出现闪烁
	updateTime()
	// 设置定时器每秒更新
	timer = window.setInterval(updateTime, 1000)
})

onUnmounted(() => {
	// 组件卸载时清除定时器，避免内存泄漏
	if (timer) {
		clearInterval(timer)
	}
})
</script>

<template>
	<div class="time-counter-wrapper">
		<div class="time-str">{{ timeStr }}</div>
		<div class="date-week-str">
			{{ dateStr }} {{ weekStr }}
		</div>
	</div>
</template>

<style scoped lang="less">
.time-counter-wrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	position: absolute;
	top: 36px;
	right: 30px;

	.time-str {
		color: #FFF;
		text-align: right;
		font-family: D-DIN-PRO;
		font-size: 26px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}

	.date-week-str {
		color: #50A6FF;
		font-family: D-DIN-PRO;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 0.817px;
	}
}
</style>