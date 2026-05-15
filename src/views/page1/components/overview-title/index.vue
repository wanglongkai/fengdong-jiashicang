<script setup lang="ts">
import bg1 from '@/assets/img/titlebg1.png'
import bg2 from '@/assets/img/titlebg2.png'
import bg3 from '@/assets/img/titlebg3.png'
import bg4 from '@/assets/img/titlebg4.png'

const cardList = [
	{ title: '园区总产值', value: '3000', unit: '万元', bg: bg1 },
	{ title: '今日加工量', value: '12', unit: '项', bg: bg2 },
	{ title: '今日出货量', value: '842,500', unit: '¥', bg: bg3 },
	{ title: '在线设备数', value: '22', unit: '个', bg: bg4 },
	{ title: '带动农户数', value: '233', unit: '家', bg: bg2 },
]
</script>

<template>
	<div class="overview-title-box">
		<div v-for="item in cardList" :key="item.title" class="card" :style="{ backgroundImage: `url(${item.bg})` }">
			<div class="card-title">
				{{ item.title }}
			</div>
			<div class="card-value-wrapper">
				<span class="card-value">{{ item.value }}</span>
				<span class="card-unit">{{ item.unit }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
.overview-title-box {
	width: 839px;
	height: 56px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 55px auto 0;
	/* 居中显示并与顶部标题留出间距 */

	.card {
		width: 155px;
		height: 56px;
		box-sizing: border-box;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 65px;
		/* 使用固定像素，避免百分比基于父元素宽度计算导致布局崩溃 */
		white-space: nowrap;
		/* 防止文字换行 */

		.card-title {
			color: #FFF;
			font-family: D-DIN-PRO;
			font-size: 8px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		.card-value-wrapper {
			display: flex;
			align-items: baseline;
			color: #ffffff;

			.card-value {
				color: #FFF;
				font-family: D-DIN-PRO;
				font-size: 20px;
				font-style: normal;
				font-weight: 700;
				line-height: normal;
			}

			.card-unit {
				color: #FFF;
				font-family: D-DIN-PRO;
				font-size: 8px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
				margin-left: 4px;
			}
		}
	}
}
</style>
