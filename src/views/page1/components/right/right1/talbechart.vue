<template>
	<div class="custom-table">
		<div class="table-header">
			<div class="col">&nbsp;&nbsp;排名</div>
			<div class="col">乡镇</div>
			<div class="col">主营产品</div>
			<div class="col">采购额</div>
		</div>
		<div class="table-body">
			<div v-for="(item, index) in tableData" :key="index" class="table-row">
				<div class="col font-din font-bold">{{ item.rank }}</div>
				<div class="col">{{ item.town }}</div>
				<div class="col">{{ item.product }}</div>
				<div class="col font-din">{{ item.amount }}</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const tableData = [
	{ rank: 1, town: '某某县', product: '黑山羊', amount: '125,546万元' },
	{ rank: 2, town: '某某县', product: '黑山羊', amount: '125,546万元' },
	{ rank: 3, town: '某某县', product: '黑山羊', amount: '125,546万元' },
	{ rank: 4, town: '某某县', product: '黑山羊', amount: '125,546万元' },
	{ rank: 5, town: '某某县', product: '黑山羊', amount: '125,546万元' },
]
</script>

<style lang="less" scoped>
.custom-table {
	width: 138px;
	height: 100px;
	display: flex;
	flex-direction: column;

	.col {
		flex: 1;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-family: 'PingFang SC', sans-serif;

		/* 缩小第一列（排名）的宽度，适当增加最后一列（采购额）的宽度以容纳长文本 */
		&:nth-child(1) {
			flex: 0.5;
		}

		&:nth-child(4) {
			flex: 1.5;
		}
	}

	.font-din {
		font-family: 'D-DIN-PRO', sans-serif;
	}

	.font-bold {
		font-weight: bold;
	}

	.table-header {
		display: flex;
		align-items: center;
		height: 20px;
		background: rgba(255, 255, 255, 0.08);
		/* 半透明表头背景 */

		.col {
			color: #A1C0E6;
			/* 表头浅蓝色 */
			font-size: 6px;
			/* 表格较小，字号也需要小一点 */
		}
	}

	.table-body {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		/* 行之间均匀分布 */
		padding: 4px 0;
	}

	.table-row {
		display: flex;
		align-items: center;

		.col {
			color: #FFFFFF;
			/* 行内容白色 */
			font-size: 6px;
			/* 较小的字体以适应容器宽度 */

			/* 由于需要通过缩小比例来实现小于 12px 的字体效果 */
			transform: scale(0.9);
		}
	}
}
</style>