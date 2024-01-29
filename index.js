const express = require("express");
const vhost = require("vhost");

let app = express();

app.use(vhost("libros.ovh",
    require("./../LibrosWeb/index").app));

app.listen(3000);