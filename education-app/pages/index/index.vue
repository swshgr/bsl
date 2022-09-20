<template>
	<view class="content">
		<swipers></swipers>
		<view class="section">
			<view class="index_tab">
				<view class="index_tab_chil" v-for="ele,index in goods" :key="ele.id">
					{{ele.name}}
				</view>
				<view class="index_tab_chil">
					全部分类
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	import http from "/api/api.js"
	import swipers from "/components/swiper/swiper.vue"
	let goods = ref([])
	let list = ref([])
	let getList =  () => {
		http.getSearch().then(res=>{
			goods.value = res.data.data.slice(0, 7)
		})
		http.getSearch1({current:1,size:0,sort:'hot'}).then(res=>{
			console.log(res);
		})
	}
	getList()
</script>

<style>
	.section {
		padding: 0 15px;
	}

	.content {
		width: 100%;
		height: 40px;
	}

	.index_tab {
		width: 100%;
		row-gap: 10px;
		column-gap: 10px;
		display: grid;
		grid-template:
			"a1 a1 a1 a1" 
			"a1 a1 a1 a1" 
		;
	}

	.index_tab_chil {
		background-color: #f8f9fb;
		border-radius: 20px;
		line-height: 30px;
		width: 75px;
		font-size: 13px;
		text-align: center;
	}
</style>
