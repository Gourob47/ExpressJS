exports.createProduct=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Create Product Api"
    })
}

exports.readProduct=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Read Product Api"
    })
}


exports.deleteProduct=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Delete Product Api"
    })
}

exports.updateProduct=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Update Product Api"
    })
}
