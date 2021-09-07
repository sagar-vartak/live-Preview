var express = require("express");
var nunjucks = require("nunjucks");
var cors = require("cors");
const path = require("path");

require("dotenv").config();
const Contentstack = require("./contentstack");

var app = express();

// Setup nunjucks templating engine
nunjucks.configure("views", {
    autoescape: true,
    express: app,
});

// Contentstack Setup
const Stack = Contentstack.Stack({
    api_key: process.env.API_KEY,
    delivery_token: process.env.ACCESS_TOKEN,
    management_token: process.env.MANAGEMENT_TOKEN,
    environment: "preview",
    fetchOptions: {
        timeout: 30000,
    },
});

if (process.env.HOST) {
    Stack.setHost(process.env.HOST);
}

app.use(Stack.livePreview({ enable: true, include_edit_tags: true }));

app.use(cors());

app.set("port", process.env.PORT || 3000);

app.get("/live-preview", function (req, res) {
    var options = {
        root: path.join(__dirname),
    };

    var fileName = "live-preview/index.js";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            // console.log("Sent:", fileName);
        }
    });
});

app.get("/css/live-preview.css", function (req, res) {
    console.error("req", req.path);
    var options = {
        root: path.join(__dirname),
    };

    var fileName = "views/live-preview.css";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            // console.log("Sent:", fileName);
        }
    });
});

// Home page
app.all(/.*/, async function (req, res) {
    let data;
    try {
        const home = await Stack.ContentType("dfsfs").Query().toJSON().find();
        data = home && home[0] && home[0][0];
        // console.error("stack", data);
    } catch (err) {
        console.error("contentstack error", err);
        data = err;
    }

    let nextPath;
    if (req.path === "/next-page") {
        nextPath = "/";
    } else {
        nextPath = "/next-page";
    }

    res.render("index.html", {
        api_key: process.env.API_KEY,
        path: req.path,
        nextPath,
        data: data,
    });
});

// Kick start our server
app.listen(app.get("port"), function () {
    console.log("Server started on port", app.get("port"));
});
