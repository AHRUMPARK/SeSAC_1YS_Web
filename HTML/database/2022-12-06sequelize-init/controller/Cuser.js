const { Muser } = require('../model/MUser');

exports.index = (req,res) => {
    res.render("index");
}

exports.signup = (req,res) => {
    res.render("signup");
}
exports.post_signup = (req,res) => {
    let data = {
        id : req.body.id,
        pw : req.body.pw,
        name : req.body.name
    }
    Muser.create(data)
    .then((result)=>{
        res.send(true);
    })
    //let sql = `INSERT INTO user(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
    // User.post_signup(req.body, function(){
    //     res.send(true);
    // });
}

exports.signin = (req,res) => {
    res.render("signin");
}
exports.post_signin = (req,res) => {
    Muser.findAll({
        where : { id : req.body.id, pw : req.body.pw },
        limit : 1
    })
    .then((result)=>{
        if ( result.length > 0 ) res.send(true);
        else res.send(false);
    });
    //let sql = `SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1;`;
    // User.post_signin(req.body.id, req.body.pw, function(result){
    //     if ( result.length > 0 ) res.send(true);
    //     else res.send(false);
    // });
}

exports.profile = (req,res) => {
    Muser.findAll({
        where : { id : req.body.id },
        limit : 1
    })
    .then((result)=>{
        if ( result.length > 0 ) res.render("profile", {data: result[0]});
        else res.redirect("/user/signin");
    })
    //let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`;
    // User.get_user(req.body.id, function(result){
    //     if ( result.length > 0 ) res.render("profile", {data: result[0]});
    //     else res.redirect("/user/signin");
    // })
}

exports.profile_edit = (req,res) => {
    let data = {
        pw : req.body.pw,
        name : req.body.name
    }
    Muser.update(data, {
        where : { id : req.body.id }
    })
    .then((result)=>{
        res.send(true);
    })
    //`UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
    // User.update_profile(req.body, function(){
    //     res.send(true);
    // })
}
exports.profile_delete = (req,res) => {
    Muser.destroy({
        where : { id : req.body.id }
    })
    .then((result)=>{
        res.send(true);
    })
    // `DELETE FROM user WHERE id='${id}'
    // User.delete_user(req.body.id, function(){
    //     res.send(true);
    // })
}