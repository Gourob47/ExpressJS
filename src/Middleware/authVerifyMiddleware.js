const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let token = req.headers['token'];
  jwt.verify(token, "SecretKey12345678911", function (err, decoded) {
    if (err) {
      console.log(token);
      res.status(401).json({ status: "unauthorized" });
    } else {
      if (decoded && decoded.data) {
        let email = decoded.data;
        console.log("decoded : "+email);
        req.headers.email = email;
        next();
      } else {
        console.log("Invalid or unexpected JWT structure");
        res.status(401).json({ status: "unauthorized" });
      }
    }
  });
};