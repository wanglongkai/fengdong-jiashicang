<template>
	<div class="pixed-cats">
		<!-- 左侧：无人机分类框 -->
		<div class="box">
			<div class="list drone-list">
				<div class="item">
					<img src="./assets/cat1.png" alt="配送无人机" class="icon" />
					<span class="text">配送无人机（5）</span>
				</div>
				<div class="item">
					<img src="./assets/cat2.png" alt="巡检无人机" class="icon" />
					<span class="text">巡检无人机（3）</span>
				</div>
				<div class="item">
					<img src="./assets/cat3.png" alt="农情无人机" class="icon" />
					<span class="text">农情无人机（2）</span>
				</div>
			</div>
		</div>

		<!-- 右侧：道路分类框 -->
		<div class="box w-100px!">
			<div class="list road-list">
				<div class="item">
					<img src="./assets/road1.png" alt="外部-主干路" class="icon road-icon" />
					<span class="text">外部-主干路（12m）</span>
				</div>
				<div class="item">
					<img src="./assets/road2.png" alt="外部-次干路" class="icon road-icon" />
					<span class="text">外部-次干路（6m）</span>
				</div>
				<div class="item">
					<img src="./assets/road3.png" alt="园区-主干路" class="icon road-icon" />
					<span class="text">园区-主干路（14m）</span>
				</div>
				<div class="item">
					<img src="./assets/road4.png" alt="园区-次干路" class="icon road-icon" />
					<span class="text">园区-次干路（7m）</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.pixed-cats {
	position: fixed;
	color: #fff;
	right: 365px;
	bottom: 67px;
	display: flex;
	gap: 16px; // 两个框之间的间距

	.box {
		width: 90px; // 根据截图预估的宽度
		height: 90px;
		background: url('./assets/labelbg.png') no-repeat center center;
		background-size: 100% 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		.list {
			display: flex;
			flex-direction: column;
			gap: 2px; // 列表项之间的垂直间距
			padding-left: 4px;

			.item {
				display: flex;
				align-items: center;

				.icon {
					width: 20px; // 无人机图标大小
					height: auto;
					margin-right: 4px;
					object-fit: contain;
				}

				.road-icon {
					width: 15px; // 道路图标比较长，需要稍微宽一点
				}

				.text {
					color: #FFF;
					font-family: D-DIN-PRO;
					font-size: 8px;
					font-style: normal;
					font-weight: 400;
					line-height: normal;
				}
			}
		}

		/* 道路列表项的间距可能需要比无人机紧凑一点，因为有4项 */
		.road-list {
			gap: 6px;

		}
	}
}
</style>