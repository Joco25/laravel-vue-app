let webpack = require('webpack');
let path = require('path');

module.exports ={
	entry: './resources/assests/js/app.js',
	output:{
		path: path.resolve(__dirname, 'public/js')
		filename: 'bundle.js',
		publickPath: './public'
	}
};