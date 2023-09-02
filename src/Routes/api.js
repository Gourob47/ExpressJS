const express=require('express');
const { createBlog, readBlog, updateBlog, deleteBlog } = require('../Controllers/blogController');
const { createBlogDetails, readBlogDetails, updateBlogDetails, deleteBlogDetails } = require('../Controllers/blogDetailsController');
const { createComment, readComment, updateComment, deleteComment } = require('../Controllers/commentController');
const { createMessage, readMessage, updateMessage, deleteMessage } = require('../Controllers/messageController');
const { createPortfolio, readPortfolio, updatePortfolio, deletePortfolio } = require('../Controllers/portfolioController');
const { createProduct, readProduct, updateProduct, deleteProduct } = require('../Controllers/productController');
const { createProfit, readProfit, updateProfit, deleteProfit } = require('../Controllers/profitController');
const { createProject, readProject, updateProject, deleteProject } = require('../Controllers/projectController');
const { createService, readService, updateService, deleteService } = require('../Controllers/serviceController');
const { createTitle, readTitle, updateTitle, deleteTitle } = require('../Controllers/titleController');

const router=express.Router();

// Blog API
router.get('/create/blog',createBlog);
router.get('/read/blog',readBlog);
router.get('/update/blog',updateBlog);
router.get('/delete/blog',deleteBlog);


//BlogDetails API
router.get('/create/blogDetails',createBlogDetails);
router.get('/read/blogDetails',readBlogDetails);
router.get('/update/blogDetails',updateBlogDetails);
router.get('/delete/blogDetails',deleteBlogDetails);


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


// Profit API
router.get('/create/profit',createProfit);
router.get('/read/profit',readProfit);
router.get('/update/profit',updateProfit);
router.get('/delete/profit',deleteProfit);


// Project API
router.get('/create/project',createProject);
router.get('/read/project',readProject);
router.get('/update/project',updateProject);
router.get('/delete/project',deleteProject);


// Service API
router.get('/create/service',createService);
router.get('/read/service',readService);
router.get('/update/service',updateService);
router.get('/delete/service',deleteService);


// Title API
router.get('/create/title',createTitle);
router.get('/read/title',readTitle);
router.get('/update/title',updateTitle);
router.get('/delete/title',deleteTitle);


module.exports=router;