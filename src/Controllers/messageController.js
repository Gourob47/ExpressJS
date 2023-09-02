exports.createMessage=async(req,res)=>{
    res.status(200).send("Create Message Api")
}

exports.readMessage=async(req,res)=>{
    res.status(200).send("Read Message Api")
}


exports.deleteMessage=async(req,res)=>{
    res.status(200).send("Delete Message Api")
}

exports.updateMessage=async(req,res)=>{
    res.status(200).send("Update Message Api")
}
