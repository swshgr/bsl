// index.js
import {
    postRequest,
    getRequest
} from "../../utils/http.js";
Page({
    data: {
        navList: [], // 导航栏
        navId: 1, // 导航栏id
        banner: [], // 轮播图
        firstClassify: [], // 全部分类
        lastList: [], // 考试专业
        secId: null,
        LastId: null
    },
    // 事件处理函数
    bindViewTap() {},
    onLoad() {
        getRequest('/app/home/getSecondClassify/1?classify_id=1').then((res) => {
            if (res.code == 200) {
                this.setData({
                    navList: res.data
                })
            }
        })
        // 获取轮播图
        this.getBanner(1)
        getRequest('/app/home/exam/1').then(res => {
            // console.log(res.data);
            this.setData({
                navTitle: res.data
            })
        })
    },
    // last完成
    complete() {
        getRequest(`/app/home/exam/${this.data.firId}`).then(res => {
            // console.log(res.data);
            this.setData({
                LastId: null,
                secId: null,
                navTitle: res.data,
                lastShow: false
            })
        })
    },
    // last选中高亮
    selectLast(e) {
        this.setData({
            LastId: e.currentTarget.dataset.id
        })
    },
    // 获取轮播图
    getBanner(id) {
        getRequest(`/app/home/banner/${id}/4`).then((res) => {
            this.setData({
                banner: res.data
            })
        })
    },
    selectNav(e) {
        // 获取轮播图
        this.getBanner(e.currentTarget.dataset.id)
        this.setData({
            navId: e.currentTarget.dataset.id
        })
    }
})