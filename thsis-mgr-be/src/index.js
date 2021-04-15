const Koa = require('koa');
const koaBody = require('koa-body');
// const Body = require('koa-body');
const { connect } = require('./db');
const registerRoutes = require('./routers/index.js');
const cors = require('@koa/cors');

// const Router = require('@koa/router')

const app = new Koa();

connect().then(() => {
    app.use(cors());
    app.use(koaBody());

    registerRoutes(app);

    app.listen(3000, () => {
        console.log('启动成功');
    });
});


// const authRouter = Router({
//     prefix: '/auth'
// });

// authRouter.get('/register', async(ctx) => {
//     ctx.body = '注册页面';
// });

// const thsisRouter = Router({
//     prefix: '/thsis'
// });

// thsisRouter.get('/add', async(ctx) => {
//     ctx.body = '论文页面';
// });

// app.use(authRouter.routes());
// app.use(thsisRouter.routes());