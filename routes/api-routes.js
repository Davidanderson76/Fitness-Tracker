const Workout = require('../models/workout');

module.exports = (app) => {

    //Workout routes//

    //get ALL//
    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });

    //create workouts//
    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });

    //exercises by id//
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findOneAndUpdate( req.params.id,
            {$push: {exercises:req.body }},
            { new: true, runValidators: true})

           .then(data => res.json(data))
           .catch(err => {
               console.log("err", err)
               res.json(err)
           });
    });

    //searches workout ranges//
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
          .then(data => {
            res.json(data);
          })
          .catch(err => res.json(err));
      });
}