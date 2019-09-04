const userSchema = require("../../models/user");
const utils = require("../../utils/common");

const CreateUser = (req, res) => {
  let request = req.body;

  addUser = new userSchema(request.userData);

  addUser.save((err, userResult) => {
    if (err) {
      res.status(403).json({ error: err });
    } else {
      res.status(200).json({
        message: "User created successfully",
        result: userResult
      });
    }
  });
};

const UpdateUser = (req, res) => {
  let request = req.body,
    id = request.id;

  userSchema.findByIdAndUpdate(
    id,
    request.updateUserData,
    { new: true },
    (err, result) => {
      if (err) {
        res.status(403).json({ error: err });
      } else {
        res.status(200).json({
          message: "User updated successfully",
          data: result
        });
      }
    }
  );
};

const DeleteUser = (req, res) => {
  var request = req.body;

  const id = request.userId;

  userSchema.findByIdAndRemove(id, (err, result) => {
    if (result) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json({
          message: "Record deleted successfully",
          result
        });
      }
    } else {
      res.status(403).json({
        code: 403,
        message: "No record found"
      });
    }
  });
};

module.exports = {
  CreateUser,
  UpdateUser,
  DeleteUser
};
