const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 7000;

// built in middleware

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/");
const partialsPath = path.join(__dirname, "../templates/partials");

// to set the view engin
app.set("view engine", "hbs"); 

app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));


// template engine route
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/otp", (req, res) => {
    res.render('otp');
});

app.get("/register", (req, res) => {
    res.render('register');
});

app.get("/services", (req, res) => {
    res.render('services');
});

app.get("/feature", (req, res) => {
    res.render('feature');
});

app.get("/team", (req, res) => {
    res.render('team');
});

app.get("/faq", (req, res) => {
    res.render('faq');
});

app.get("/testimonial", (req, res) => {
    res.render('testimonial');
});

app.get("/appoinment", (req, res) => {
    res.render('appoinment');
});

app.get("/project", (req, res) => {
    res.render('project');
});

app.get("/404", (req, res) => {
    res.render('404');
});

app.get("/contact", (req, res) => {
    res.render('contact');
});

app.get("/dashboard", (req, res) => {
    res.render('index');
});
app.get("/remove", (req, res) => {
    res.render('remove');
})
app.get("/otp", (req, res) => {
    res.render('otp');
});
app.get("/thankyou", (req, res) => {
    res.render('thankyou');
})

app.get("/about", (req, res) => {
    console.log(req.query);
    res.render("about");
});

app.get("/readmore", (req, res) => {
    res.render("login");
});


app.get("/deshboard", (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Listening To The Port ${port}`);
});




















// const path = require('path');
// const express = require("express");
// const app = express();

// // console.log(__dirname);
// // console.log(path.join(__dirname, "../public"));

// const staticPath = path.join(__dirname, "../public");

// app.use(express.static(staticPath));

// app.get("/",(req, res) => {
//     res.send("hello word form the express");
// });

// app.get("/about",(req, res) => {
//     res.send("hello word form the about page");
// });

// app.listen(8000, () => {
//     console.log("listing the port at 8000");
// });
