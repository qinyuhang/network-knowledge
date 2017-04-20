var express = require('express');
var request = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render("index",{
      "title": "Welcome to Github searcher!",
      "user_info": null
    })
});

router.post('/', function(req, res, next) {
    request.get({
        url: "https://api.github.com/users/" + req.body.github_username,
        headers: {
            'User-Agent': 'request'
        }
    }, function(err, resp, res_body){
        //console.log(res_body);
        if(err){
            res.render("index",{
                "title": "Welcome to GitHub search!",
                "user_info": null
            })
            return;
        }
        res.render("index",{
            "title": "Welcome to Github searcher!",
            "user_info": res_body
        })
    })
});

router.get("/search", function(req, res, next){
    res.render("search", {
        "title": "Welcome to GitHub searcher!"
    })
})

router.post('/search', function(req, res, next) {
    request.get({
        url: "https://api.github.com/users/" + req.body.github_username,
        headers: {
            'User-Agent': 'request'
        }
    }, function(err, resp, res_body){
        //console.log(res_body);
        if(err){
            res.render("index",{
                "title": "Welcome to GitHub search!",
                "user_info": null
            })
            return;
        }
        res.render("index",{
            "title": "Welcome to Github searcher!",
            "user_info": res_body
        })
    })
});

router.post("/search/api", function(req, res, next){
    request.get({
        url: "https://api.github.com/users/" + req.body.github_username,
        headers: {
            'User-Agent': 'request'
        }
    }, function(err, resp, res_body){
        if (err){
            res.send(undefined);
            return;
        }
        res.send(res_body);
    })
})

module.exports = router;
