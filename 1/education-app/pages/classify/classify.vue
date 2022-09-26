<template>
    <!-- 头部 -->
    <view class="classify">
        <view>
            分类
            <i class="iconfont">&#xe694;</i>
        </view>
    </view>
    <view class="text">
        <view class="text-left">
            <scroll-view scroll-y="true" class="left-zuo">
                <view :class="{'son_list':true, active:(id==index)}" v-for="item in navList" :key="item.id"
                    @click="changId(item.id)">
                    <span>{{item.name}}</span>
                </view>
            </scroll-view>

        </view>
        <view class="text-right">
            <view class="right" v-for="item,index in data" :key="item.id">
                {{item.name}}
            </view>
        </view>
    </view>
</template>

<script>
    import {
        reactive,
        ref,
        toRefs
    } from "vue"
    import http from "/api/api.js"
    import swipers from '/components/swiper/swiper.vue';
    Component: {
        swipers
    }
    export default {
        setup(props, context) {
            const state = reactive({
                navList: [],
                data : [],
                id : 0
            })
            const methods = {
                getList: async () => {
                    try {
                        const data = await http.getSearch()
                        console.log(data);
                        state.navList = data.data.data
                        

                    } catch {}
                }
            }
            let changId = (index) => {
                state.id = index
                state.data = state.navList[index].labelList
            }
            return {
                ...toRefs(state),
                ...methods.getList(),
                changId
            }
        }

    }
</script>

<style lang="scss">
    .classify {
        width: 100%;
        height: 55rpx;
        text-align: center;
        line-height: 55rpx;
        font-size: 14rpx;
        color: white;
        background-color: rgb(52, 93, 194);
    }

    .iconfont {
        float: right;
        /* background-color: white; */

    }
    .right{
        width: 80px;
        height: 30px;
        margin: 10px 0;
        border: 1px solid black;
        font-size: 12px;
        border-radius: 20px;
        text-align: center;
        line-height: 30px;
    }
    .swiper {
        width: 100%;
        height: 50px;
        /* background-color: blue; */
    }

    .text {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .text-left {
            width: 220rpx;
            margin-right: 50rpx;
            // background-color: #eee;
            height: 100%;
            padding: 40rpx 0 0 0;
            float: left;

            .left-zuo {
                width: 200rpx;
                height: 1400rpx;
                background-color: #eee;

                .son_list {
                    padding: 0rpx 10rpx;
                    margin: 100rpx 20rpx;
                    font-size: 35rpx;
                    color: #ccc;
                    text-align: center;
                    align-items: center;
                    position: relative;
                }

                .active {
                    color: #345DC2;
                }

                .active::after {
                    content: " ";
                    width: 2px;
                    height: 15px;
                    background: #345DC2;
                    position: absolute;
                    top: 7px;
                    left: 0px;
                }
            }
        }

        .text-right {
            // width: 500rpx;  
            height: 50px;
            display: flex;
            flex-direction: row;
            
            justify-content: space-around;
            flex-wrap: wrap;
            float: right;
            margin: 20px 0;

            .right-item {
                box-sizing: border-box;
                width: 200rpx;
                padding: 10rpx;
                margin: 20rpx;
                text-align: center;
                line-height: 60rpx;
                height: 80rpx;
                border: 1px solid #ccc;
                border-radius: 30rpx;
            }
        }
    }
</style>
