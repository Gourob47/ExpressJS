exports.createComment=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Create Comment Api"
    })
}

exports.readComment=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Read Comment Api"
    })
}


exports.deleteComment=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Delete Comment Api"
    })
}

exports.updateComment=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Update Comment Api"
    })
}
