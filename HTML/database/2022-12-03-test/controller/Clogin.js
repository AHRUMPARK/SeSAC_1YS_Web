const LOGIN = require('../model/Mlogin');

exports.main = (req, res) => {
    res.render('index');
}
exports.register = (req, res) => {
    LOGIN.register_user(req.body, function(result){
        res.send(true);
    })
}
exports.login = (req, res) => {
    res.render('login');
}
exports.post_login = (req, res) => {
    LOGIN.post_login(req.body.ID, req.body.PW, function(result){
        if( result.length > 0 ){
            res.send(true);
        } else { res.send(false);}
    })
}
exports.profile = (req, res) => {
    LOGIN.get_user(req.body.ID, function(result){
        if(result.length > 0){
            res.render('profile', { data : result[0]});
        } else {res.redirect("/login"); }
    })
}

exports.profile_edit = (req, res) => {
    LOGIN.update_profile(req.body, function(){
        res.send(true);
    })
}
exports.profile_delete = (req, res) => {
    LOGIN.delete_user(req.body.id, function(){
        res.send(true);
    })

}