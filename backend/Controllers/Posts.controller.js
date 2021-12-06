const Posts = require('../models/Posts').Post;

function deleteData(req,res) {
    const parameter = req.params.name;

    return Posts.deleteOne({title: parameter })
}


function getData(req,res){
    
    return Posts.find()
    .exec()
    .then((result)=>{
        if(result.length>0){
            res.json(result);
        }
        else{
            res.status(202).json({message :'error 202'})
        }
         
    })
    .catch((error)=>{
        res.status(500).json(error)
    })
}
//module.exports = { deleteData, getData}