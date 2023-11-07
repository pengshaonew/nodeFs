const express = require('express');
/**
 * 用户相关路由
 * */
const userRouter = express.Router();

// 用户主页
userRouter.get('/', (req, res) => {
    console.log(9,req.query);
    res.send('User Home Page');
});

// 用户个人资料页面
userRouter.get('/profile/:id', (req, res) => {
    console.log(15,req.query,req.params);
    const userId = req.params.id;
    res.send(`User Profile Page for User ID: ${userId}`);
});

/**
 * 博客相关路由
 * */
const blogRouter = express.Router();

// 博客主页
blogRouter.get('/', (req, res) => {
    console.log(27,req.query);
    res.send('Blog Home Page');
});

// 博客文章页面
blogRouter.get('/article/:id', (req, res) => {
    console.log(33,req.query);
    const articleId = req.params.id;
    res.send(`Blog Article Page for Article ID: ${articleId}`);
});

module.exports = {
    userRouter,
    blogRouter
};