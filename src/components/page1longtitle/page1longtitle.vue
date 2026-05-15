<template>
	<div class="page1longtitle">
		<span class="title-text">{{ title }}</span>
	</div>
</template>
<script lang="ts" setup>
defineProps<{
	title: string
}>()
</script>
<style lang="less" scoped>
.page1longtitle {
	width: 282px;
	height: 30px;
	background: url('@/assets/img/titlelong.png') no-repeat center center;
	background-size: 100% 100%;
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	padding-left: 25px;

	.title-text {
		color: #FFF;
		font-family: D-DIN-PRO;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		transform: translateY(-5px);
	}
}
</style>