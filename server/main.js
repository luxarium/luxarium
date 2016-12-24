var express = require('express');
var assert = require('assert');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
var Posts = [];
var path = require('path');
app.use(express.static(path.join(__dirname, 'template')));
app.post('/login',function (req,res) {
    var request = req.body
    console.log(req.body)
    if(request.password == 'Loopers'){
        res.send({redirect: '/blog'});
     //res.send("ok");
    }
    else{
     res.send("error");
    }
})
app.get('/',function(req,res){
    res.send(base64_encode('files/img/card-saopaolo.png'));
})
app.post('/addpost',function(req,res){
    var rndID = randomId();
   var newPost = {'postId': rndID ,'title' : req.body.title ,'img':base64_encode('files/img/card-saopaolo.png'), 'content' : req.body.content, 'like': JSON.parse(req.body.like) , 'dislike': JSON.parse(req.body.dislike) , 'comments': []};

   Posts.push(newPost);
    res.send("OK")
})  

function randomId()
{
  return Math.floor(Math.random() * 1e11);
}

app.post('/showAllPost' , function(req,res)
{
    // res.send(Posts,base64_encode('/files/img/card-saopaolo.png'));
    res.send("Ok");
    
})
app.post('/like' , function(req,res){
    var postId = req.body.postId;
    for(var i = 0;i<Posts.length ; i++)
    {
        if(Posts[i].postId == postId)
            Posts[i].like = Posts[i].like + 1 ;
    }
    res.send("OK")
})
app.post('/disLike' , function(req,res){
    var postId = req.body.postId;
    for(var i = 0;i<Posts.length ; i++)
    {
        if(Posts[i].postId == postId)
            Posts[i].dislike = Posts[i].dislike + 1 ;
    }
    res.send("OK")
})
var fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
server.listen('8070');