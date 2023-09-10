exports.createPortfolio=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Create Portfolio Api"
    })
}

exports.readPortfolio=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Read Portfolio Api"
    })
}


exports.deletePortfolio=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Delete Portfolio Api"
    })
}

exports.updatePortfolio=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Update Portfolio Api"
    })
}
