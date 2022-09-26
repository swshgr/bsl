<template>
	<view>
		<view class="search0" id="search" v-show="!props.flags">
			<search></search>
		</view>
		<view class="scrollsearch" v-show="props.flags">
			<search></search>
		</view>
		<view id="swipers" class="swipers0">
			<swiper
				class="swiper"
				circular
				:indicator-dots="stat.indicatorDots"
				:autoplay="stat.autoplay"
				:interval="stat.interval"
				:duration="stat.duration"
				@change="log"
				indicator-active-color="#fff"
				indicator-color="#ccc"
			>
				<swiper-item
					class="swiperitem"
					v-for="(ele, index) in list"
					:key="ele.id"
				>
					<view class="swiper-item uni-bg-red">
						<img class="images" :src="ele.imageUrl" alt="" />
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		flags: Boolean,
		flaga: Boolean,
	});
	console.log(props.flags, 'props');
	import search from '/components/search/search.vue';
	import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
	// brforeRouterleave
	// beforeRouterEnter
	// foucouse
	import http from '/api/api.js';
	let stat = ref({
		indicatorDots: true,
		autoplay: true,
		interval: 2000,
		duration: 500,
	});
	let list = ref([]);
	let getList = async () => {
		try {
			const res = await http.getSwiper();
			list.value = res.data.data;
		} catch (error) {
			console.log(error);
		}
	};
	getList();
	let log = (e) => {
		if (props.flaga == true) {
			let div1 = document.querySelector('#search') || [];
			let div2 = document.querySelector('#swipers') || [];
			div2.className = 'swipers' + e.detail.current;
			div1.className = 'search' + e.detail.current;
		}
	};
</script>

<style>
	.scrollsearch {
		background-color: #345dc2;
		width: 100%;
		height: 2.5rem;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99999;
	}

	#search {
		height: 2.5rem;
	}

	.swipers0 {
		background-image: linear-gradient(#006c00, #fff);
		width: 690rpx;
		width: 100%;
		padding: 0.9375rem;
		box-sizing: border-box;
	}

	.swipers1 {
		background-image: linear-gradient(#45328c, #fff);
		width: 690rpx;
		width: 100%;
		padding: 0.9375rem;
		box-sizing: border-box;
	}

	.swipers2 {
		background-image: linear-gradient(#0072b7, #fff);
		width: 690rpx;
		width: 100%;
		padding: 0.9375rem;
		box-sizing: border-box;
	}

	.search0 {
		background-color: #006c00;
	}

	.search1 {
		background-color: #45328c;
	}

	.search2 {
		background-color: #0072b7;
	}

	.images {
		width: 100%;
		border-radius: 0.625rem !important;
	}

	.swiperitem {
		border-radius: 0.625rem !important;
	}

	.swiper {
		height: 11.875rem;
		border-radius: 0.625rem;
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
