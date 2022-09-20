<template>
	<view>
		<view class="search0" id="search">
			<search></search>
		</view>
		<view id="swipers" class="swipers0">
			<swiper class="swiper" circular :indicator-dots="indicatorDots"  :interval="interval"
				:duration="duration" @change="log" indicator-active-color="#fff" indicator-color="#ccc">
				<swiper-item class="swiperitem" v-for="ele,index in list" :key="ele.id">
					<view class="swiper-item uni-bg-red">
						<img class="images" :src="ele.imageUrl" alt="">
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
	import search from "/components/search/search.vue"
	import {
		ref
	} from "vue";
	import http from "/api/api.js"
	let indicatorDots = true
	let autoplay = true
	let interval = 2000
	let duration = 500
	let list = ref([])
	let getList = async () => {
		try {
			const res = await http.getSwiper()
			list.value = res.data.data
		} catch (error) {
			console.log(error);
		}
	}
	getList()
	let log = (e) => {
		let div1 = document.querySelector('#search')||[]
		let div2 = document.querySelector('#swipers')||[]
		div1.className = 'search' + e.detail.current
		div2.className = 'swipers' + e.detail.current
	}
</script>

<style>
	.swipers0 {
		background-image: linear-gradient(#006C00, #fff);
		width: 690rpx;
		width: 100%;
		padding: 15px;
		box-sizing: border-box;
	}

	.swipers1 {
		background-image: linear-gradient(#45328c, #fff);
		width: 690rpx;
		width: 100%;
		padding: 15px;
		box-sizing: border-box;
	}

	.swipers2 {
		background-image: linear-gradient(#0072B7, #fff);
		width: 690rpx;
		width: 100%;
		padding: 15px;
		box-sizing: border-box;
	}

	.search0 {
		background-color: #006C00;
	}

	.search1 {
		background-color: #45328c;
	}

	.search2 {
		background-color: #0072B7;
	}



	.images {
		width: 100%;
		border-radius: 10px;
	}

	.swiperitem {
		border-radius: 10px;
	}


	.swiper {
		height: 190px;
		border-radius: 10px;
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
