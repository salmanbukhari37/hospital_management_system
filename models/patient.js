const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
// autoIncrement = require("mongoose-auto-increment");

// // connection with mongodb
// const dbPath = "mongodb://localhost:27017/hospital_system";

// mongoose.connection.openUri(dbPath, { useNewUrlParser: true });

// var connection = mongoose.connection.on("connected", () => {
//   console.log("Connected to DB");
// });

// mongoose.connection.on("error", err => {
//   if (err) console.log(`Error while connecting to DB ${err}`);
// });

const patientSchema = new Schema(
  {
    PatientName: {
      type: String,
      required: true
    },
    TokenNumber: {
      type: Number,
      require: true,
      default: 1
    },
    Price: {
      type: Number,
      require: true
    },
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserSchema"
    }
  },
  {
    timestamps: true
  }
);

// autoIncrement.initialize(connection);

// patientSchema.plugin(autoIncrement.plugin, {
//   model: "PatientSchema",
//   field: "TokenNumber",
//   startAt: 1
// });

// patientSchema.pre("save", function(next) {});

module.exports = mongoose.model("PatientSchema", patientSchema);
