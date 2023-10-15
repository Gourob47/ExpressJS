const workModel=require("../Models/WorkModel");


exports.createWork=async(req,res)=>{    

    try{

        let reqBody=req.body;
        reqBody.email=req.headers['email'];       
        let result= await workModel.create(reqBody);
        res.status(200).json({status:"success", data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }

}

exports.readWork=async(req,res)=>{    

    try{
        let reqBody=req.headers['email'];
        let result= await workModel.aggregate([
            {$match:{email:reqBody}}
        ])
        res.status(200).json({status:"success", data:result});
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e});
    }

}


exports.updateWork=async(req,res)=>{  
      
        try{
            let id = req.params.id;
            let reqBody = req.body;
            let result=await workModel.updateOne({_id: id}, reqBody);
            console.log(result);
            res.status(200).json({status:"success",data:result});
        }catch (e) {
            res.status(200).json({status:"fail",data:e});
        }
}


exports.deleteWork=async (req,res)=>{
    try {
        let id= req.params.id;
        let Query={_id:id};
        let result= await workModel.deleteOne(Query);
        res.status(200).json({status:"success",data:result});
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}
