const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getSingleWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");

router.get("/", getWorkout);

router.get("/:id", getSingleWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
