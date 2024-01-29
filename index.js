const express = require("express");
const vhost = require("vhost");

let app = express();

app.use(vhost("libros.ovh",
    require("./../vps-test/index").app));

app.listen(3000);