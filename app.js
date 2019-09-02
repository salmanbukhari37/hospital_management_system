var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
require("./dbConfig/config");
const jwt = require("jsonwebtoken");

// routes
// Front App Route
const frontAppRoute = require("./routes/front-app/frontAppRoute").router;

// main app route
const mainRoute = require("./routes/admin/mainAppRoute").router;

const PORT = 5000;

var app = express();

app.use(cors());

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serving static content
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/api", mainRoute);

app.use("/front", frontAppRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// verify token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];

  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // split at the space
    const bearer = bearerHeader.split(" ");

    // Get token from Array
    const bearerToken = bearer[1];

    // set the token
    req.token = bearerToken;

    // next middleware
    jwt.verify(req.token, "secretKey", (err, authData) => {
      if (err) {
        res.status(403).send(err);
      } else {
        req.authData = authData;
        next();
      }
    });
  } else {
    res.status(403).send("Forbidden");
  }
}
