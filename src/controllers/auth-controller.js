const userDBA=require('../knex').User;
const passwordUtil=require('../utils/password');
const jwtTokenUtils=require('../utils/jwttoken');

exports.loginUser=(req,res)=>{
    const emailId=req.body.emailId;
    const password=req.body.password;
    let userDetails={};
    return userDBA.findOne({'emailId':emailId})
    .then(userDBAResponse=>{
        userDetails=userDBAResponse;
       return passwordUtil.validatePassowrd(password,userDBAResponse.password);
    })
    .then(passwordVerification=>{
        if(passwordVerification){
            userDetails.token=jwtTokenUtils.generateToken(req,userDetails.id);
            delete userDetails.password;
           res.send(userDetails);
        } else{
            res.send({message:"Invalid EmailId or password"});
        }
    })
    .catch(err=>{
        res.send({message:"Invalid EmailId or password"});
    })
}
