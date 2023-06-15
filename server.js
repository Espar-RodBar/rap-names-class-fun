const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
    "21 savage": {
        age: 29,
        bithName: "Shéyaa Bin Abraham-Joseph",
        birthLocation: "London, England",
    },
    "chance the rapper": {
        age: 30,
        bithName: "SChancelor Jonathan Bennett",
        birthLocation: "Chicago, USA",
    },
    dylan: {
        age: 30,
        bithName: "Dylan",
        birthLocation: "Dylan",
    },
};

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.get("/js", (request, response) => {
    console.log(request.body);
    response.sendFile(__dirname + "/js/main.js");
});

app.get("/api", (request, response) => {
    response.json(rappers);
});

app.get("/api/:rapperName", (request, response) => {
    const name = request.params.rapperName.toLowerCase();
    console.log("requested name:", name);
    if (rappers[name]) response.json(rappers[name]);
    else response.json(rappers["dylan"]);
});

app.listen(PORT, () => console.log("server init on port:", PORT));
