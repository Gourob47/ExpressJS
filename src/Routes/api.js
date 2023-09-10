const express=require('express');
const { createBlog, readBlog, updateBlog, deleteBlog } = require('../Controllers/blogController');
const { createComment, readComment, updateComment, deleteComment } = require('../Controllers/commentController');
const { createMessage, readMessage, updateMessage, deleteMessage } = require('../Controllers/messageController');
const { createPortfolio, readPortfolio, updatePortfolio, deletePortfolio } = require('../Controllers/portfolioController');
const { createProduct, readProduct, updateProduct, deleteProduct } = require('../Controllers/productController');



const router=express.Router();

// Blog API
router.get('/create/blog',createBlog);
router.get('/read/blog',readBlog);
router.get('/update/blog',updateBlog);
router.get('/delete/blog',deleteBlog);



// Comment API
router.get('/create/comment',createComment);
router.get('/read/comment',readComment);
router.get('/update/comment',updateComment);
router.get('/delete/comment',deleteComment);


// Message API
router.get('/create/message',createMessage);
router.get('/read/message',readMessage);
router.get('/update/message',updateMessage);
router.get('/delete/message',deleteMessage);


// Portfolio API
router.get('/create/portfolio',createPortfolio);
router.get('/read/portfolio',readPortfolio);
router.get('/update/portfolio',updatePortfolio);
router.get('/delete/portfolio',deletePortfolio);


// Product API
router.get('/create/product',createProduct);
router.get('/read/product',readProduct);
router.get('/update/product',updateProduct);
router.get('/delete/product',deleteProduct);


module.exports=router;