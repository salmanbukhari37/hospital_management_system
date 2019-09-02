const userSchema = require("../../models/user");

const CreateUser = (req, res) => {
  let request = req.body;

  addUser = new userSchema(request.userData);

  addUser.save((err, userResult) => {
    if (err) res.end(err);

    res.status(200).json({
      message: "User created successfully",
      result: userResult
    });
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
      if (err) res.end(err);

      res.status(200).json({
        message: "User updated successfully",
        data: result
      });
    }
  );
};

module.exports = {
  CreateUser,
  UpdateUser
};
