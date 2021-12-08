var express = require("express");
var router = express.Router();
//const Post = require('../Controllers/Posts.controller');
const Post = require('../models/Posts');



//Get 
router.get('/', async(req,res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  } catch(err){
    res.json({message:err});
  }
});

//Specific posts
router.get('/:postId', async function (req, res, next) {

  try {
    const post = await Post.findById(req.params.postId)
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Post
router.post('/', async (req, res)=> {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    datedupost: req.body.datedupost,
    type: req.body.type

  });

  try{  
  const savedPost = await post.save();
    res.json(savedPost);
  }catch(err){
 res.json({message: err});
  } 
});

//router.get('/:name',Post.getData);

//Delete a post
router.delete('/:postId', async function (req, res, next) {

  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId })
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }

});



//router.delete('/:name',Post.deleteData);

//Update Post
router.patch('/:postId', async function (req, res, next) {
  try {
    const updatedPost = await Post.updateOne(
    { _id: req.params.postId }, 
    { $set: {title: req.body.title }, 
      $set:{description:req.body.description},
      $set:{datedupost:req.body.datedupost},
      $set:{type:req.body.type}
    }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }

});


module.exports = router;

