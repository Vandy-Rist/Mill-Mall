module.exports = {
	devServer: {
		host: 'localhost',
		port: 8080,
		proxy: { //代理
			'/api': {
				target: 'http://mall-pre.springboot.cn',
				changeOrigin: true,
				pathRewrite: {
					'/api': ''
				}
			}
		}
	}
}