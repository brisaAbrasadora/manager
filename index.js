const express = require("express");
const vhost = require("vhost");

let app = express();

app.use(vhost("vps-4c070e59.vps.ovh.net",
    require("./../vps-test/index").app));

app.listen(3000);