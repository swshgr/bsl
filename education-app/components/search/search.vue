<template>
	<view class="search-box">
		<input v-model="value" class='search-input' type="text" placeholder='搜索你想要的内容' @click="go" disabled="" >
	</view>
</template>

<script setup>
	let value=''
	let go=()=>{
		console.log(1);
	}
</script>

<style lang="scss">
	.search-box {
		width: 100%;
		height: 40px;
		background-color: transparent;
		padding: 5px;
		box-sizing: border-box;
		.search-input {
			background-color: #f8f8f8;
			font-size: 12px;
			height: 100%;
			text-align: center;
			border-radius: 30rpx;
		}
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
