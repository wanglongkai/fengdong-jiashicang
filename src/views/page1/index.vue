<template>
	<div class="dashboard-container">
		<h1 class="pagetitle">沁水一体化供应链平台指挥运营中心</h1>
		<OverViewTitle />
		<Temprature />
		<TimeCounter />
	</div>
</template>

<script setup lang="ts">
import OverViewTitle from '@/views/page1/components/overview-title/index.vue'
import TimeCounter from '@/views/page1/components/time-counter/index.vue'
import Temprature from '@/views/page1/components/temprature/index.vue'
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
}
</style>
