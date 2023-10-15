const express=require('express');

const { createStudent, loginStudent, updateProfile, readProfile, RecoverVerifyEmail, RecoverVerifyOTP, RecoverResetPass } = require('../Controllers/studentController');
const { createWork, readWork, updateWork, deleteWork } = require('../Controllers/workController');
const authVerifyMiddleware = require('../Middleware/authVerifyMiddleware');


const router=express.Router();


router.post('/create/student',createStudent);
router.post('/login/student',loginStudent);

router.post('/update/student',authVerifyMiddleware,updateProfile);
router.get('/read/student',authVerifyMiddleware,readProfile);

router.get('/recovery/verifyEmail/:email',authVerifyMiddleware,RecoverVerifyEmail);
router.get('/recovery/verifyOtp/:email/:code',authVerifyMiddleware,RecoverVerifyOTP);
router.post("/recoverResetPass",authVerifyMiddleware, RecoverResetPass);

router.post('/create/work',authVerifyMiddleware,createWork);
router.get('/read/work',authVerifyMiddleware,readWork);
router.post('/update/work/:id',authVerifyMiddleware,updateWork);
router.post('/delete/work/:id',authVerifyMiddleware,deleteWork);

module.exports=router;