const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use( "/uploads", express.static( "uploads" ) );
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,done){
            done( null, 'uploads/');
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext );
        }
    })
});
app.get("/register", (req,res) => {
    res.render("practice35-register");
});
app.post("/register", upload.single("userfile"), (req,res) => {
    res.render("practice35-result", { path: req.file.path } );
});
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});