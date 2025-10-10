const express = require("express");
const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  enrollCourse
} = require("../controllers/coursecontroller");

const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getCourses); // public
router.get("/:id", getCourseById); // public

router.post("/", protect, createCourse); // instructor/admin only
router.put("/:id", protect, updateCourse);
router.delete("/:id", protect, deleteCourse);

router.post("/:id/enroll", protect, enrollCourse);

module.exports = router;
