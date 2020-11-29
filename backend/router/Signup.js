const router= require("express").Router();

let Signup= require("../model/Signup");

router.route("/login").post((req,res) =>{
    const username=req.body.username;
    const password= req.body.password;

    Signup.findOne({username:username,password:password},(err,user) =>{
        if(err){
            console.log(err);
            return res.status(500).send();
        }

        if(!user)
        {
            return res.status(404).send()
        }
        return res.status(200).send("welcome");
    })
})


router.route("/add").post((req,res)=>{
    const username=req.body.username;
    const email = req.body.email;
    const password= req.body.password;
    const newSignin= new Signup({username,email,password});

    newSignin.save()
    .then(() =>{res.json("user added")})
    .catch(err=> res.status(400).json("error"+err));
})
module.exports= router;