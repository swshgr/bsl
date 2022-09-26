<template>
	<view class="content">
		<view>
			<swipers :flags="flag" :flaga="flags"></swipers>
		</view>
		<view class="section">
			<view class="index_tab">
				<view
					class="index_tab_chil"
					v-for="(ele, index) in goods"
					:key="ele.id"
				>
					{{ ele.name }}
				</view>
				<view class="index_tab_chil">
					全部分类
				</view>
			</view>
			<view class="index_goods">
				<Goods></Goods>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import http from '/api/api.js';
	import swipers from '/components/swiper/swiper.vue';
	import { onBeforeUnmount, onUnmounted } from 'vue';
	import { onBeforeRouteLeave } from 'vue-router';
	import Goods from '/components/goods/goods.vue';
	Components: {
		swipers, Goods;
	}
	let goods = ref([]);
	let list = ref([]);
	let flag = ref(false);
	let flags = ref(true);
	let getList = () => {
		http.getSearch().then((res) => {
			goods.value = res.data.data.slice(0, 7);
		});
	};
	getList();

	window.addEventListener('scroll', function (e) {
		if (e.path[1].pageYOffset > 0) {
			flag.value = true;
		} else {
			flag.value = false;
		}
	});
	onBeforeRouteLeave((to, from) => {
		flags.value = false;
	});
</script>

<style>
	.swipersdiv {
		height: 2.5rem;
	}

	.index_goods {
		width: 100%;
		margin-top: 1.875rem;
	}

	.section {
		padding: 0 0.9375rem;
	}

	.content {
		width: 100%;
		height: 100%;
	}

	.index_tab {
		width: 100%;
		row-gap: 0.625rem;
		column-gap: 0.625rem;
		display: grid;
		grid-template:
			'a1 a1 a1 a1'
			'a1 a1 a1 a1';
	}

	.index_tab_chil {
		background-color: #f8f9fb;
		border-radius: 1.25rem;
		line-height: 1.875rem;
		width: 4.6875rem;
		font-size: 0.8125rem;
		text-align: center;
	}
</style>
