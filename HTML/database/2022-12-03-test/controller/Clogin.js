
const LOGIN = require('../model/Mlogin');

exports.login = (req, res) => {
    res.render('index');
}
exports.register = (req, res) => {
    LOGIN.register_user(req.body, function(result){
        res.send(true);
    })
}
exports.login_ = (req, res) => {
    res.render('login');
}