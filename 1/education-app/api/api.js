import request from '../until/request.js'

const http = {
	getSearch : () => request.get('article/api/category/label/list'),
	getSwiper : () => request.get('article/api/advert/show/1'),
	getSearch1 : (e) => request.post(`course/api/course/search/`,{content: e.content, sort: e.sort, isFree: e.isFree, labelId: e.labelId, categoryId: e.categoryId, current: e.current, size: e.size} ),
    getList: ()=> request.get('article/api/category/label/list '),
    getread:()=>request.post('article/api/article/search',{size:10, current:1}),
    getcommend:()=>request.post('article/api/article/search',{size:10,current:1})
}
    

export default http