<template>
    <view class="Goods_div">
        <view class="Goods_div1">
            <view class="">
                <span style="font-size: 1.125rem">热门推荐</span>
            </view>
            <view class="" style="font-size: 0.875rem; color: #999999">全部></view>
        </view>
        <view class="Goods_div2s">
            <view class="Goods_div2">
                <view class="Goods_div2_div" v-for="(ele, index) in goods" :key="ele.id">
                    <span class="Goods_div2_span">{{ ele.totalTime }}</span>
                    <img class="Goods_img" :src="ele.mainImage" alt="" />
                    <view class="Goods_div2_div2" style="float: right; width: 50%">
                        <p style="font-size: 0.8125rem; font-weight: bold">
                            {{ ele.title }}
                        </p>
                        <p style="
								font-size: 0.0625rem;
								color: #999999;
								margin-top: 1.0625rem;
							">
                            {{ ele.nickName }}
                        </p>
                        <span style="font-size: 0.875rem; color: orangered">
                            {{ ele.priceOriginal }}
                        </span>
                        <span style="
								font-size: 0.75rem;
								color: #999999;
								float: right;
								margin-right: 1.875rem;
								display: inline-block;
								padding-top: 0.25rem;
							">
                            {{ ele.studyTotal }}人在学
                        </span>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="Goods_div3s">
        <view class="Goods_div1">
            <view class="">
                <span style="font-size: 1.125rem">近期上新</span>
            </view>
            <view class="" style="font-size: 0.875rem; color: #999999">全部></view>
        </view>
        <view class="Goods_div3">
            <view class="Goods_div3_div" v-for="(ele, index) in goods2" :key="ele.id">
                <span class="Goods_div3_span">{{ ele.totalTime }}</span>
                <img class="Goods_img" :src="ele.mainImage" alt="" />
                <view class="Goods_div2_div2" style="padding: 0 0.3125rem">
                    <p style="font-size: 0.8125rem; font-weight: bold">
                        {{ ele.title }}
                    </p>
                    <p style="font-size: 0.0625rem; color: #999999; margin-top: 1.0625rem">
                        {{ ele.nickName }}
                    </p>
                    <span style="font-size: 0.875rem; color: orangered">
                        {{ ele.priceOriginal }}
                    </span>
                    <span style="
							font-size: 0.75rem;
							color: #999999;
							float: right;
							margin-right: 0.9rem;
							display: inline-block;
							padding-top: 0.25rem;
						">
                        {{ ele.studyTotal }}人在学
                    </span>
                </view>
            </view>
        </view>
    </view>
    <view class="Goods_div">
        <view class="Goods_div1">
            <view class="">
                <span style="font-size: 1.125rem">免费精选</span>
            </view>
            <view class="" style="font-size: 0.875rem; color: #999999">全部></view>
        </view>
        <view class="Goods_div2s">
            <view class="Goods_div2">
                <view class="Goods_div2_div" v-for="(ele, index) in goods3" :key="ele.id">
                    <span class="Goods_div2_span">{{ ele.totalTime }}</span>
                    <img class="Goods_img" :src="ele.mainImage" alt="" />
                    <view class="Goods_div2_div2" style="float: right; width: 50%">
                        <p style="font-size: 0.8125rem; font-weight: bold">
                            {{ ele.title }}
                        </p>
                        <p style="
								font-size: 0.0625rem;
								color: #999999;
								margin-top: 1.0625rem;
							">
                            {{ ele.nickName }}
                        </p>
                        <span style="font-size: 0.875rem; color: orangered">
                            {{ ele.priceOriginal }}
                        </span>
                        <span style="
								font-size: 0.75rem;
								color: #999999;
								float: right;
								margin-right: 1.875rem;
								display: inline-block;
								padding-top: 0.25rem;
							">
                            {{ ele.studyTotal }}人在学
                        </span>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="Goods_div">
        <view class="Goods_div1">
            <view class="">
                <span style="font-size: 1.125rem">付费精品</span>
            </view>
            <view class="" style="font-size: 0.875rem; color: #999999">全部></view>
        </view>
        <view class="Goods_div4s">
            <view class="Goods_div4">
                <view class="Goods_div2_div" v-for="(ele, index) in goods4" :key="ele.id">
                    <span class="Goods_div2_span">{{ ele.totalTime }}</span>
                    <img class="Goods_img" :src="ele.mainImage" alt="" />
                    <view class="Goods_div2_div2" style="float: right; width: 50%">
                        <p style="font-size: 0.8125rem; font-weight: bold">
                            {{ ele.title }}
                        </p>
                        <p style="
								font-size: 0.0625rem;
								color: #999999;
								margin-top: 1.0625rem;
							">
                            {{ ele.nickName }}
                        </p>
                        <span style="font-size: 0.875rem; color: orangered">
                            {{ ele.priceOriginal }}
                        </span>
                        <span style="
								font-size: 0.75rem;
								color: #999999;
								float: right;
								margin-right: 1.875rem;
								display: inline-block;
								padding-top: 0.25rem;
							">
                            {{ ele.studyTotal }}人在学
                        </span>
                    </view>
                </view>
            </view>
        </view>
        <view class="longdding" v-show="flags">
            加载更多
        </view>
        <view class="longdding" v-show="flag">
            ——我也是有底线的——
        </view>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue';
    import http from '/api/api.js';
    let goods = ref([]);
    let goods2 = ref([]);
    let goods3 = ref([]);
    let goods4 = ref([]);
    let current = ref([]);
    let flags = ref(true)
    let flag = ref(false)
    let xr = () => {
        http
            .getSearch1({
                content: null,
                sort: 'hot',
                isFree: null,
                labelId: null,
                categoryId: null,
                current: 1,
                size: 10,
            })
            .then((res) => {
                goods.value = res.data.data.records;
            });
        http
            .getSearch1({
                content: null,
                sort: 'new',
                isFree: null,
                labelId: null,
                categoryId: null,
                current: 1,
                size: 10,
            })
            .then((res) => {
                goods2.value = res.data.data.records;
            });
        http
            .getSearch1({
                content: null,
                sort: null,
                isFree: 1,
                labelId: null,
                categoryId: null,
                current: 1,
                size: 10
            })
            .then((res) => {
                goods3.value = res.data.data.records;
            });

    };
    xr();
    let xr2 = () => {
        http
            .getSearch1({
                content: null,
                sort: null,
                isFree: 0,
                labelId: null,
                categoryId: null,
                current: current.value,
                size: 10
            })
            .then((res) => {
                if (current.value < 4) {
                    for (let i = 0; i < res.data.data.records.length; i++) {
                        goods4.value.push(res.data.data.records[i]);
                    }
                    flags.value = true
                } else {
                    flag.value = true
                    flags.value = false
                }

            });
        current.value = Number(current.value) + 1
    }
    xr2()
    window.addEventListener('scroll', function(e) {
        if ((document.body.offsetHeight - screen.height) == e.path[1].pageYOffset) {
            setTimeout(function() {
                if (current.value < 4) {
                    xr2()
                    flags.value = false
                }
            }, 1000)
        }
    })
</script>

<style>
    #zhu::-webkit-scrollbar {
        display: none !important;
    }

    .longdding {
        height: 40px;
        width: 100%;
        text-align: center;
    }

    .Goods_div3_div {
        padding: 0.625rem;
        border: 0.0625rem solid #e1e1e1;
        border-radius: 0.625rem;
        position: relative;
    }

    .Goods_div3 {
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        overflow-x: auto;
        overflow-y: hidden;
    }

    .Goods_div2_span {
        position: absolute;
        bottom: -0.5rem;
        left: 6.375rem;
        color: #fff;
        font-size: 0.625rem;
        border-radius: 0.625rem;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0.0625rem 0.125rem;
    }

    .Goods_div3_span {
        position: absolute;
        top: 5rem;
        right: 0.8rem;
        color: #fff;
        font-size: 0.625rem;
        border-radius: 0.625rem;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0.0625rem 0.125rem;
    }

    .Goods_div1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.3125rem 0;
    }

    .Goods_div2s {
        width: 100vw;
        overflow-x: auto;
        overflow-y: hidden;
    }

    .Goods_div2 {
        display: flex;
        flex-wrap: wrap;
        width: 44.5rem;
    }

    .Goods_div4 {
        width: 100%;
    }

    .Goods_img {
        width: 9.6875rem;
        height: 5.625rem;
        border-radius: 0.3125rem;
    }

    .Goods_div2_div {
        position: relative;
        width: 20.625rem;
        height: 5rem;
        box-sizing: border-box;
        margin: 0.9375rem 0;
        margin-right: 0.625rem;
    }
</style>
