const UserSchema = require("../../models/user");
const utils = require("../../utils/common");

const Login = (req, res) => {
  let request = req.body,
    email = request.email,
    password = request.password;

  //   utils.debug(request);

  UserSchema.findOne({ Email: email }, (err, result) => {
    if (result) {
      result.comparePassword(password, (err, isMatch) => {
        if (err) {
          res.send(err);
        } else {
          if (isMatch) {
            res.json({
              msg: "Logged in successfully",
              isMatch: isMatch
            });
          } else {
            res.json({
              msg: "Username/Password is not correct.",
              isMatch: isMatch
            });
          }
        }
      });
    } else {
      res.status(403).json({
        msg: "No record found"
      });
    }
  });
};

module.exports = {
  Login
};
