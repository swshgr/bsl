import request from '../until/request.js'

const http = {
	getSearch : () => request.get('article/api/category/label/list'),
	getSwiper : () => request.get('article/api/advert/show/1'),
	getSearch1 : (e) => request.get(`course/api/course/search/`,{current:e.current,size:e.size,sort:e.sort})
}

export default http