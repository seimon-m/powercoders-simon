const express = require("express"); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require("body-parser"); // Middleware

app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/main.html");
});

app.post("/", (req, res) => {
    let name = req.body.name;
    let lastname = req.body.lastname;
    let checkbox = req.body.checkbox;
    let options = req.body.options;
    let inputtext = req.body.inputtext;
    let buttons = req.body.buttons;
    let date = req.body.date;

    res.send(
        `
        <p>Name: ${name}</p>
        <p>Lastname: ${lastname}</p>
        <p>Tomato: ${checkbox}</p>
        <p>Options: ${options} \n</p>
        <p>Inputtext: ${inputtext}\n</p>
        <p>Buttons: ${buttons}</p>
        <p>Date: ${date}</p>
        `
    );
});

const port = 3000; // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
