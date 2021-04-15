const mongoose = require('mongoose');
require('./Schemas/User');

const connect = () => {
    return new Promise((resolve) => {
        //连接数据库 地址 端口
        mongoose.connect('mongodb://127.0.0.1:27017');

        //回调函数 数据库打开后
        mongoose.connection.on('open', () => {
            console.log('连接数据库成功');
            resolve();
        });
    });
};

module.exports = {
    connect,
}