const express=require('express');
const BrandController = require("../controllers/BrandController");
const CategoryController = require("../controllers/CategoryController");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const ProfileController = require("../controllers/ProfileController");

const FeaturesController = require("../controllers/FeaturesController");
const AuthVerification = require("../middlewares/AuthVerification");

const router=express.Router();


// Brand Category
router.get('/BrandList',BrandController.BrandList);
router.get('/CategoryList',CategoryController.CategoryList)

// Features
router.get('/FeatureList',FeaturesController.FeatureList)

// Product
router.get('/ListByCategory/:categoryID',ProductController.ListByCategory)
router.get('/ListBySmilier/:categoryID',ProductController.ListBySmilier)
router.get('/ListByBrand/:brandID',ProductController.ListByBrand)
router.get('/ListByRemark/:remark',ProductController.ListByRemark)
router.get('/SliderList',ProductController.SliderList)
router.get('/ListByKeyword/:keyword',ProductController.ListByKeyword)
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)
router.get('/ProductReviewList/:ProductID',ProductController.ProductDetails)







router.get('/WishList',AuthVerification,ProductController.WishList)
router.post('/CreateWishList',AuthVerification,ProductController.CreateWishList)
router.post('/RemoveWishList',AuthVerification,ProductController.RemoveWishList)

router.get('/CartList',AuthVerification,ProductController.CartList)
router.post('/CreateCartList',AuthVerification,ProductController.CreateCartList)
router.post('/RemoveCartList',AuthVerification,ProductController.RemoveCartList)














// User
router.get('/UserLogout',AuthVerification,UserController.UserLogout)

router.get('/UserOTP/:email',UserController.UserLogin)


router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin);





// Profile
router.post('/CreateProfile',AuthVerification,ProfileController.CreateProfile);
router.post('/UpdateProfile',AuthVerification,ProfileController.UpdateProfile)
router.get('/ReadProfile',AuthVerification,ProfileController.ReadProfile)


module.exports=router;