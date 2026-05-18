<template>
	<div class="dashboard-container">
		<h1 class="pagetitle">沁水一体化供应链平台指挥运营中心</h1>
		<OverViewTitle />
		<Temprature />
		<TimeCounter />
		<div class="leftbox">
			<Left1 />
			<Left2 />
			<Left3 />
		</div>
		<div class="rightbox">
			<Right />

		</div>
	</div>
	<PixedCats />
	<BottomBtns />
	<div class="yunzaiing">
		运载中...
	</div>
	<AirplaneVideo />
	<CenterSheep />
</template>

<script setup lang="ts">
import OverViewTitle from '@/views/page1/components/overview-title/index.vue'
import TimeCounter from '@/views/page1/components/time-counter/index.vue'
import Temprature from '@/views/page1/components/temprature/index.vue'
import Left1 from '@/views/page1/components/left1/index.vue'
import Left2 from '@/views/page1/components/left2/index.vue'
import Left3 from '@/views/page1/components/left3/index.vue'
import Right from '@/views/page1/components/right/index.vue'
import PixedCats from '@/views/page1/components/pixed-cats/index.vue'
import BottomBtns from '@/components/bottom-btns/index.vue'
import AirplaneVideo from '@/views/page1/components/airplanevideo/index.vue'
import CenterSheep from '@/views/page1/components/center-sheep/index.vue'
</script>

<style scoped lang="less">
.dashboard-container {
	width: 1920px;
	height: 672px;
	padding: 0 30px 15px;
	overflow: hidden;
	background: url('/bg.png') no-repeat center center / cover;

	.pagetitle {
		color: #FFF;
		text-align: center;
		font-family: "Alimama ShuHeiTi";
		font-size: 36px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		margin-top: 12px;
	}

	.leftbox {
		position: absolute;
		color: #FFF;
		top: 80px;
		left: 30px;
	}

	.rightbox {
		position: absolute;
		top: 80px;
		right: 30px;
		color: #FFF;
	}
}

.yunzaiing {
	display: flex;
	width: 100px;
	line-height: 25px;
	padding: 2px 6px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	align-self: stretch;
	border-radius: 2px;
	background: rgba(0, 0, 0, 0.80);
	position: fixed;
	right: 910px;
	top: 280px;
	color: #47E0FF;
	text-align: center;
	font-family: D-DIN-PRO;
	font-size: 8px;
	font-style: normal;
	font-weight: 700;
}
</style>
