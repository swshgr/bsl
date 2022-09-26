<script>
	export default {
		onLaunch: function () {
			console.log('App Launch');
		},
		onShow: function () {
			console.log('App Show');
		},
		onHide: function () {
			console.log('App Hide');
		},
	};
</script>

<style>
	/*每个页面公共css */
	/*公共样式*/
	@import url('/common/css/common.css');
	@font-face {
		font-family: 'iconfont';
		src: url('/static/icon/iconfont.ttf');
		/* src: url("https://at.alicdn.com/t/c/font_3660586_g2ds1f642yf.ttf?t=1663730085430"); */
	}
	body {
		/* padding-bottom: 69rem !important; */
		height: auto;
	}

</style>
