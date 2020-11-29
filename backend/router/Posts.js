const router= require("express").Router();
const posts= require('../model/Posts');

router.route('/getposts').get((req,res) =>{
    posts.find()
    .then(allpost =>res.json(allpost))
    .catch(err => res.status(400).json("error"+err))
})
router.route('/:id').get((req,res) =>{
    posts.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json("err"+err))
})

router.route('/delete/:id').delete((req,res) =>{
    posts.findByIdAndDelete(req.params.id)
    .then(() => res.json("post deleted"))
    .catch(err => res.status(400).json("err"+err))
})


router.route('/edit/:id').post((req,res) =>{
    posts.findById(req.params.id)
    .then(post =>{
        post.username= req.body.username;
        post.booktitle= req.body.booktitle;
        post.decription= req.body.decription;
        post.save()
        .then(() => res.json("post updated"))
        .catch(err => res.status(400).json("error"+err) )
    }).catch(err => res.status(400).json("err"+err) );
});

router.route('/post').post((req,res) =>{
    const username = req.body.username;
    const booktitle = req.body.booktitle;
    const decription = req.body.decription;
   
    const newPosts= new posts({username,booktitle,decription});
    newPosts.save()
    .then(()=>{
        res.json("post added")
    })
    .catch(err=>{
       res.status(400).json("error"+err);
    })
});
module.exports = router;