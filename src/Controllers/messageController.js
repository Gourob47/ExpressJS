exports.createMessage=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Create Message Api"
    })
}

exports.readMessage=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Read Message Api"
    })
}


exports.deleteMessage=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Delete Message Api"
    })
}

exports.updateMessage=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Update Message Api"
    })
}
