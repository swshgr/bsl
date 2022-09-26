<template>
    <view class="header">
        <search class="search"></search>
    </view>
    <view>
        <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="80">
            <view id="demo1" class="scroll-view-item_H uni-bg-red">推荐</view>
            <view v-for="item in readList" :key="item.id" @click="changId(item.id)" class="scroll-view-item_H uni-bg-green">{{item.name}}</view>

        </scroll-view>
    </view>
    <view>
        <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
            @scrolltolower="lower" @scroll="scroll">
            <view id="demo1" class="scroll-view-item uni-bg-red  read-box" v-for="item,idx in data" :key="item.id">
                <view class="read-box-zuo">
                    <span class="headers">{{ item.title }}</span>
                    <p class="read-box-text">{{item.summary}}</p>
                    <p class="read-box-bottom">
                        <span class="read-box-wen1">{{item.nickName}}</span>
                        <span class="read-box-wen2">{{item.updateDate}}</span>
                        <span class="read-box-wen3">{{item.thumhup}}赞</span>
                    </p>
                </view>
                <view class="read-box-you" v-if="item.imageUrl">
                    <img class="read-box-img" :src="item.imageUrl" alt="">
                </view>
               
            </view>
            
        </scroll-view>
    </view>
</template>

<script>
    import {
        reactive,
        ref,
        toRefs
    } from "vue"
    import http from "/api/api.js"
    import search from '/components/search/search.vue'
    Component: {
        search
    }
    export default {
        setup(props, context) {
            const state = reactive({
                readList: [],
                data:[],
                
            })

            let scrollTop = ref(0)
            let old = reactive({
                scrollTop: 0
            })
            scroll = function(e) {
                console.log(e)
                old.scrollTop = e.detail.scrollTop
            }

            const methods = {
                
                getread: async () => {
                    try {
                        const data = await http.getSearch()
                        // console.log(data);
                        state.readList = data.data.data
                        // console.log(state.readList);
                    } catch {}
                },
                getcommend: async () => {
                    try {
                        const data = await http.getcommend()
                        console.log(data);
                        state.data=data.data.data.records
                        console.log(state.data);

                    } catch {}
                }
            }
            const changId=(idx)=>{
                console.log(idx);
                state.id=idx;
                state.data = state.readList[idx]
            }

            return {
                ...toRefs(state),
                ...methods.getread(),
                scrollTop,
                old,
                scroll,
                ...methods.getcommend(),
                changId
            }
        }
    }
</script>

<style lang="scss">
    .header {
        width: 100%;
        height: 100%;
        background-color: blue;
        
    }
    .headers{
        font-weight: 900;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .read-box{
        width: 100%;
        height: 150px;
      display: flex;
      
        // border: 1px solid aqua;
            
    }
    .read-box-zuo{
        width: 60%;
        height: 150px;
        padding-top: 10px;
        padding-bottom: 10px;
        flex: 1;
        .read-box-text{
            // width: 100px;
              overflow:hidden;
                white-space:nowrap;
                  text-overflow:ellipsis;
                  margin-top: 10px;
                  color: #ccc;
                  font-size: 15px;
                    // width:100%;
                    
        }
        .read-box-bottom{
          width: 100%;
            font-size: 10px;
            height: 50px;
            .read-box-wen1{
                width: 30%;
                height: 50px;
                text-align: center;
                line-height: 50px;
                font-weight: 900;
                margin-right: 15px;
                
            }
            .read-box-wen2{
                width: 30%;
                height: 50px;
                text-align: center;
                line-height: 50px;
                 margin-right: 15px;
                color: #ccc;
                
            }
            .read-box-wen3{
                width: 30%;
                height: 50px;
                text-align: center;
                line-height: 50px;
                color: #ccc;
                
            }
        }
    }
        
    .read-box-you{
        width: 40%;
        height: 150px;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
            
        .read-box-img{
            width: 130px;
            height: 80px;
            border-radius: 0.3125rem;
        }
    }
    .uni-scroll-view {}

    .search {
        width: 100%;
        height: 50px;
    }

    .scroll-view_H {
        white-space: nowrap;
        width: 100%;
    }

    .scroll-view-item_H {
        display: inline-block;
        width: 80px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        font-size: 36rpx;
        // background-color: aqua;
    }
</style>
