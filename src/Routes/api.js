const express=require('express');
const { createUser, updateUser, deleteUser, readUser } = require('../Controllers/userController');
const { createPost, readPost, updatePost, deletePost } = require('../Controllers/postController');
const { createAdmin, readAdmin, updateAdmin, deleteAdmin } = require('../Controllers/adminController');
const { createSubAdmin, readSubAdmin, updateSubAdmin, deleteSubAdmin } = require('../Controllers/subAdminController');


const router=express.Router();

// User API
router.get('/create/user',createUser);
router.get('/read/user',readUser);
router.get('/update/user',updateUser);
router.get('/delete/user',deleteUser);



// Post API
router.get('/create/post',createPost);
router.get('/read/post',readPost);
router.get('/update/post',updatePost);
router.get('/delete/post',deletePost);


// Admin API
router.get('/create/admin',createAdmin);
router.get('/read/admin',readAdmin);
router.get('/update/admin',updateAdmin);
router.get('/delete/admin',deleteAdmin);


// SubAdmin API
router.get('/create/subadmin',createSubAdmin);
router.get('/read/subadmin',readSubAdmin);
router.get('/update/subadmin',updateSubAdmin);
router.get('/delete/subadmin',deleteSubAdmin);


module.exports=router;