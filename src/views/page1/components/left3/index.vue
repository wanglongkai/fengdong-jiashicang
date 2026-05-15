<template>
	<div class="left3">
		<Page1LongTitle title="站点监控列表" />
		<div class="tablebox">
			<div class="table-header">
				<div class="col">站点名称</div>
				<div class="col">类型</div>
				<div class="col">状态</div>
				<div class="col">更新时间</div>
			</div>
			<div class="table-body">
				<div v-for="(item, index) in tableData" :key="index" class="table-row">
					<div class="col">{{ item.name }}</div>
					<div class="col">{{ item.type }}</div>
					<div class="col">
						<span class="status-badge" :class="item.statusClass">{{ item.status }}</span>
					</div>
					<div class="col">{{ item.time }}</div>
				</div>
			</div>
			<div class="corner-left">
				<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
					<path d="M20.5637 20.0637H0.499979V-2.09808e-05" stroke="url(#paint0_linear_74_7893)" />
					<defs>
						<linearGradient id="paint0_linear_74_7893" x1="0.499981" y1="20.0637" x2="10.5318" y2="8.02545"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#47E0FF" />
							<stop offset="1" stop-color="#00538F" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div class="corner-right">
				<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
					<path d="M0 20.0637H20.0637V-2.09808e-05" stroke="url(#paint0_linear_74_7895)" />
					<defs>
						<linearGradient id="paint0_linear_74_7895" x1="20.0637" y1="20.0637" x2="10.0318" y2="8.02545"
							gradientUnits="userSpaceOnUse">
							<stop stop-color="#47E0FF" />
							<stop offset="1" stop-color="#00538F" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Page1LongTitle from '@/components/page1longtitle/page1longtitle.vue'

// 模拟表格数据
const tableData = [
	{ name: '三文鱼加工厂', type: '摄像头', status: '告警', statusClass: 'alert', time: '9:23' },
	{ name: '冷库监控中心', type: '传感器', status: '正常', statusClass: 'normal', time: '9:23' },
	{ name: '物流园区入口', type: '门禁', status: '离线', statusClass: 'offline', time: '9:23' },
	{ name: '黑山羊牧场', type: '摄像头', status: '正常', statusClass: 'normal', time: '9:23' },
]
</script>

<style lang="less" scoped>
.tablebox {
	width: 282px;
	margin-top: 12px;
	background: rgba(1, 20, 42, 0.6);
	position: relative;
	padding-bottom: 4px;

	/* 底部左侧装饰角 */
	.corner-left {
		position: absolute;
		bottom: 0;
		left: 0;
	}

	/* 底部右侧装饰角 */
	.corner-right {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.col {
		flex: 1;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.table-header {
		display: flex;
		align-items: center;
		height: 32px;
		background: rgba(255, 255, 255, 0.08);

		.col {
			color: #FFF;
			text-align: center;
			font-family: "PingFang SC";
			font-size: 8px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}

	.table-body {
		padding-top: 8px;
	}

	.table-row {
		display: flex;
		align-items: center;
		height: 26px;

		.col {
			color: rgba(255, 255, 255, 0.80);
			text-align: center;
			font-family: "PingFang SC";
			font-size: 8px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		.status-badge {
			display: inline-block;
			padding: 2px 8px;
			border-radius: 12px;
			text-align: center;
			font-family: D-DIN-PRO;
			font-size: 6px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;

			&.alert {
				background: #D43F3F;
				color: #FFFFFF;
			}

			&.normal {
				background: #34C759;
				color: #FFFFFF;
			}

			&.offline {
				background: #D9D9D9;
				color: #747474;
			}
		}
	}
}
</style>
