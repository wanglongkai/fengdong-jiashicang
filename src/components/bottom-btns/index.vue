<template>
	<div class="btns">
		<div class="btn-item" :class="{ active: activeIndex === 0 }" @click="setActive(0)">
			<div class="hexagon">
				<img :src="activeIndex === 0 ? imgLiantiao2 : imgLiantiao" alt="全链条" />
			</div>
			<span class="label">全链条</span>
		</div>
		<div class="btn-item" :class="{ active: activeIndex === 1 }" @click="setActive(1)">
			<div class="hexagon">
				<img :src="activeIndex === 1 ? imgJiagong2 : imgJiagong" alt="加工" />
			</div>
			<span class="label">加工</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 引入图片资源
import imgLiantiao from '@/assets/img/liantiao.png'
import imgLiantiao2 from '@/assets/img/liantiao2.png'
import imgJiagong from '@/assets/img/jiagong.png'
import imgJiagong2 from '@/assets/img/jiagong2.png'

const activeIndex = ref(0) // 默认选中

// 根据当前路由路径更新选中状态
const updateActiveIndex = (path: string) => {
	if (path === '/page2') {
		activeIndex.value = 0
	} else {
		activeIndex.value = 1
	}
}

// 监听路由变化，自动更新高亮状态
watch(() => route.path, (newPath) => {
	updateActiveIndex(newPath)
})

// 初始化时执行一次，确保刷新页面时状态正确
onMounted(() => {
	updateActiveIndex(route.path)
})

const setActive = (index: number) => {
	activeIndex.value = index
	// 点击切换时，同步跳转到对应的路由
	if (index === 0) {
		router.push('/page2')
	} else {
		// 假设 index 为 1 时跳转到其他页面，比如首页或 page1，请根据实际路由配置调整
		router.push('/')
	}
}
</script>

<style lang="less" scoped>
.btns {
	position: fixed;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%); // 居中显示
	display: flex;
	gap: 100px;
	background: transparent;
}

.btn-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	.hexagon {
		width: 40px;
		height: 40px;
		background: url('@/assets/img/liantiao.png') no-repeat center center; // 默认使用未选中的底图形状
		background-size: contain;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.label {
		color: #FFF;
		text-align: center;
		font-family: D-DIN-PRO;
		font-size: 10px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		text-transform: uppercase;
	}

	/* 选中状态的样式由于图片直接更换了，主要是确保透明度和亮度 */
	&.active {
		.label {
			text-shadow: 0 0 10px rgba(71, 224, 255, 0.5); // 给文字增加一点发光效果
		}
	}

	/* 悬浮时的轻微反馈 */
	&:hover {
		.hexagon {
			transform: scale(1.05);
		}
	}
}
</style>