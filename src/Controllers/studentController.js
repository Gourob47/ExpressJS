const OTPModel = require("../Models/OTPModel");
const studentModel=require("../Models/StudentModel");
const jwt=require('jsonwebtoken');
const SendEmailUtility = require("../utility/sendEmailUtility");

exports.createStudent=async(req,res)=>{
    try{
        let reqBody=req.body;
        let result= await studentModel.create(reqBody);
        res.status(200).json({status:"success", result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}


exports.loginStudent = async (req, res) => {
   
    try {
        let reqBody = req.body.email;
        let result = await studentModel.aggregate([
            { $match: { email: reqBody } },
            { $count: 'total' }
        ]);

        if (result[0]['total'] === 1) {
            
            // Create Token
            let Payload = {
                exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                data: reqBody  // Access the email directly
            };
            let token = jwt.sign(Payload, "SecretKey12345678911");
            res.status(200).json({ status: "success", data: token });

        } else {
            // Login fail
            res.status(200).json({ status: "fail", data: "No User Found" });
        }
    } catch (e) {
        res.status(200).json({ status: "fail", data: e });
    }
}


exports.readProfile=async (req, res) => {
    try{
        let email = req.headers['email'];
        let result= await studentModel.aggregate([
            {$match:{email:email}}
        ]);

        res.status(200).json({status:"success",data:result});
    }catch (e) {
        res.status(200).json({status:"fail",data:e});
    }
}



exports.updateProfile=async (req, res) => {

    try{
        let email = req.headers['email'];
        let reqBody = req.body;
        let result=await studentModel.updateOne({email: email}, reqBody)
        res.status(200).json({status:"success",data:result})
    }catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}


exports.RecoverVerifyEmail=async (req,res)=>{
    let email = req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000);
    let EmailText="Your Verification Code is ="+OTPCode
    let EmailSubject="Task manager verification code"

    let result= await studentModel.find({email:email}).count();
    if(result===1){
        // Verification Email
       await SendEmailUtility(email,EmailText,EmailSubject);
       await OTPModel.create({email:email,otp:OTPCode});
       res.status(200).json({status:"success",data:"6 Digit Verification Code has been send"});

    }
    else{
        res.status(200).json({status:"fail",data:"No User Found"})
    }

}


exports.RecoverVerifyOTP=async (req,res)=>{

    let email = req.params.email;
    let OTPCode = req.params.code;

   
    let status=0;
    let statusUpdate=1;

    let result= await OTPModel.find({email:email,otp:OTPCode,status:status}).count();
    
    if(result===1){
       
        let rest=await OTPModel.find({email:email,otp:OTPCode,status:status},{_id:1,email:1,createdAt:1});
        
        //Time Validation 5 min
        let prevDate=(rest[0].createdAt.getTime()+(5*60000));
       
        let presentDate=Date.now();
        
        if(prevDate>=presentDate)
        {
         await OTPModel.updateOne({email:email,otp:OTPCode,status:status}, {status:statusUpdate})
         res.status(200).json({status:"success",data:"Verification Completed"})
        }
        else
        {
            res.status(200).json({status:"fail",data:"Your Verification Code is Expired"})
        }

    }
    else{
        res.status(200).json({status:"fail",data:"Invalid Verification"})
    }

}



exports.RecoverResetPass=async (req,res)=>{

    let email = req.body['email'];
    let OTPCode = req.body['OTP'];
    let NewPass =  req.body['password'];
    let statusUpdate=1;

    let result= await OTPModel.find({email:email,otp:OTPCode,status:statusUpdate}).count();
    if(result===1){
        let result=await studentModel.updateOne({email: email}, {password:NewPass})
        res.status(200).json({status:"success",data:"Password Reset Success"})
    }
    else{
        res.status(200).json({status:"fail",data:"Invalid Verification"})
    }
}

