// bring in dependencies
const mongoose = require("mongoose");
// create a schema
const db = require(`./`)

const driverSchema = new mongoose.Schema({
  name: String,
  age: Number,
  cars: [
    {
      ref: "Car",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});


driverSchema.pre('remove', function(next){
  eval(require("locus"))
  db.Car.remove({driver: this._id}).then(function(){
    next()
  })
})

// create a model
const Driver = mongoose.model("Driver", driverSchema);

// export the model
module.exports = Driver;
