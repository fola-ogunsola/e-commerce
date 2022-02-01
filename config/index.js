const path = require('path');
const util = require('util')



var development = require('./env/development')
var test = require('./env/test')

const extend = (util)._extend;
const defaults = {
	root: path.normalize(`${__dirname}/..`),
};

const environment = {
	development: extend(development, defaults),
	test: extend(test, defaults),
}[process.env.NODE_ENV || 'development'];

module.exports = environment;