<template>
	<div class="mb-8px">
		<Page1LongTitle title="渠道销售与经营" />
		<div class="cats">
			<div class="cat-item">
				<div class="value-wrap">
					<span class="value" style="color: #47E0FF;">564</span>
					<span class="unit">家</span>
				</div>
				<div class="label">智慧村店</div>
			</div>

			<div class="cat-item">
				<div class="tag-wrap">
					<span class="tag-text">同比</span>
					<span class="tag-value">+15.2% ↑</span>
				</div>
				<div class="value-wrap">
					<span class="value">4,281</span>
					<span class="unit">单</span>
				</div>
				<div class="label">电商订单</div>
			</div>

			<div class="cat-item">
				<div class="value-wrap">
					<span class="value" style="color: #FF5A5A;">3</span>
					<span class="unit">项</span>
				</div>
				<div class="label">采购缺货</div>
			</div>

			<div class="cat-item">
				<div class="value-wrap">
					<span class="value">103</span>
					<span class="unit">家</span>
				</div>
				<div class="label">优选商家</div>
			</div>

			<div class="cat-item">
				<div class="value-wrap">
					<span class="value" style="color: #FF9D00;">16</span>
					<span class="unit">国</span>
				</div>
				<div class="label">出口国家</div>
			</div>
		</div>
		<div class="cards">
			<CartdContainer title="销售趋势">
				<LineChart />
			</CartdContainer>
			<CartdContainer title="品类占比（件）">
				<PieChart />
			</CartdContainer>
			<CartdContainer title="产品销量情况">
				<BarChart />
			</CartdContainer>
			<CartdContainer title="产品产值情况">
				<TalbeChart />
			</CartdContainer>
		</div>
		<p class="desc truncate">
			AI仓储建议丨当前冷库利用率82%，建议优先出库蜂蜜饮料产品，避免临期AI仓储建议丨当前冷库利用率82%，建议优先出库蜂蜜饮料产品，避免临期AI仓储建议丨当前冷库利用率82%，建议优先出库蜂蜜饮料产品，避免临期
		</p>
	</div>
</template>
<script lang="ts" setup>
import Page1LongTitle from '@/components/page1longtitle/page1longtitle.vue'
import CartdContainer from './cartdcontainer.vue'
import LineChart from './linechart.vue'
import PieChart from './piechart.vue'
import BarChart from './barchart.vue'
import TalbeChart from './talbechart.vue'

</script>
<style lang="less" scoped>
.cats {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	/* 让底部对齐 */
	width: 282px;
	height: 48px;
	background: url('../assets/rightcats.png') no-repeat center center;
	background-size: 100% 100%;
	margin-bottom: 8px;
	margin-top: 12px;
	padding: 0 20px 6px;
	/* 内边距控制元素位置 */
	box-sizing: border-box;

	.cat-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		.tag-wrap {
			position: absolute;
			top: -12px;
			left: 50%;
			transform: translateX(-50%);
			white-space: nowrap;
			display: flex;
			align-items: center;

			.tag-text {
				color: #A1C0E6;
				font-size: 6px;
				font-family: 'PingFang SC', sans-serif;
				margin-right: 4px;
			}

			.tag-value {
				color: #34C759;
				font-size: 6px;
				font-family: 'D-DIN-PRO', sans-serif;
			}
		}

		.value-wrap {
			display: flex;
			align-items: baseline;
			margin-bottom: 2px;

			.value {
				color: #FFFFFF;
				font-family: 'D-DIN-PRO', sans-serif;
				font-size: 12px;
				font-weight: bold;
				line-height: 1;
			}

			.unit {
				color: #A1C0E6;
				font-size: 6px;
				font-family: 'PingFang SC', sans-serif;
				margin-left: 2px;
			}
		}

		.label {
			color: #FFFFFF;
			font-size: 6px;
			font-family: 'PingFang SC', sans-serif;
			white-space: nowrap;
		}
	}
}

.cards {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 8px;
	margin-bottom: 6px;
}

.desc {
	color: #FFF;
	text-align: center;
	font-family: D-DIN-PRO;
	font-size: 8px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	opacity: 0.77;
	background: #01142A;
	padding: 5px 8px;
	width: 282px;
}
</style>