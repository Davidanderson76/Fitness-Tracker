const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema(

  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Type of exercise?"
        },
        name: {
            type: String,
            trim: true,
            required: "Name of exercise?"
        },
        duration: {
            type: Number,
            required: "How long will you do this exercise?"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
      }
    ]
  }, {
      toJSON: {
          virtual: true
      }
  }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercise.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;