<template>
	<div class="card-container">
		<div class="title">{{ title }}</div>
		<slot />
	</div>
</template>
<script lang="ts" setup>
defineProps<{
	title: string
}>()
</script>
<style lang="less" scoped>
.card-container {
	width: 138px;
	height: 140px;
	background: url('../assets/cardbg1.png') no-repeat center center;
	background-size: 100% 100%;

	.title {
		color: #FFF;
		font-family: D-DIN-PRO;
		font-size: 10px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		padding: 4px 0 4px 14px;
	}
}
</style>