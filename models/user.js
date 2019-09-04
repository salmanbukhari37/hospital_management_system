const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

var bcrypt = require("bcrypt-nodejs"),
  SALT = 10;

const userSchema = new Schema(
  {
    FirstName: {
      type: String,
      require: true
    },
    LastName: {
      type: String,
      require: true
    },
    Email: {
      type: String,
      require: true,
      unique: true
    },
    Password: {
      type: String,
      require: true
    },
    Role: {
      type: Array,
      require: true
    },
    LoginTime: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);
//
userSchema.pre("save", function(next) {
  var user = this;

  // only hash the password if it has been modified ( or is new )
  if (!user.isModified("Password")) {
    return next();
  }

  bcrypt.genSalt(SALT, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.Password, salt, null, (err, result) => {
      if (err) {
        return next(err);
      }

      user.Password = result;
      next();
    });
  });
});

userSchema.pre("set", function(next) {
  var user = this;

  if (!user.isModified("Password")) {
    return next();
  }

  bcrypt.genSalt(SALT, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.Password, salt, null, (err, result) => {
      if (err) return next(err);

      user.Password = result;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.Password, (err, result) => {
    if (err) return cb(err);

    cb(null, result);
  });
};

module.exports = mongoose.model("UserSchema", userSchema);
