<template>
	<view class="search-box">
		<input
			v-model="value"
			class="search-input"
			type="text"
			placeholder="搜索你想要的内容"
			@click="go"
			disabled=""
		/>
		<i class="iconfont" id="Sousuo">&#xe694;</i>
	</view>
</template>

<script setup>
	let value = '';
	let go = () => {
		console.log(1);
	};
</script>

<style lang="scss">
	.search-box {
		position: relative;
		width: 100%;
		height: 2.5rem;
		background-color: transparent;
		padding: 0.3125rem;
		box-sizing: border-box;
		.search-input {
			background-color: #f8f8f8;
			font-size: 0.75rem;
			height: 100%;
			text-align: center;
			border-radius: 30rpx;
		}
	}
	#Sousuo{
		font-size: 20px;
		color: #ccc;
		position: absolute;
		top: 50%;
		left: 34%;
		transform: translate(-50%, -50%);
	}
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
</style>
