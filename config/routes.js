var scrape = require("../scripts/scrape");

var headLinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");

module.exports = function(router) {

    // route renders theomepage and the saved handlebars page
    router.get("/", function (req, res){
        res.render("home");
    });

    router.get("/saved", function (req, res){
        res.render("saved");
    });

    router.get("/api/fetch", function(req , res){
        headLinesController.fetch(function(err, docs){
            if  (!docs || docs.insertedCount === 0){
                res.json({
                    message: "No new articles today.Check back tomorrow!"
                });
            }else {
                res.json({
                    message: "Added " + docs.insertedCount + " new articles!"
                });
            }
        });
    });

    router.get("/api/headlines", function(req, res){
        var query = {};
        if(req.query.saved){
            query = req.query;
        }
    })
} 