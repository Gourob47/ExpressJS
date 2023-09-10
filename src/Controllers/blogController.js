exports.createBlog=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Create Blog Api"
    })
}

exports.readBlog=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Read Blog Api"
    })
}


exports.deleteBlog=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Delete Blog Api"
    })
}

exports.updateBlog=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Update Blog Api"
    })
}
