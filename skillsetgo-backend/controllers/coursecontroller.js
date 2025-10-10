const Course = require("../models/course");
const User = require("../models/user");

// Create a new course (instructor only)
exports.createCourse = async (req, res) => {
  try {
    if (req.user.role !== "instructor" && req.user.role !== "admin") {
      return res.status(403).json({ message: "Only instructors or admins can create courses" });
    }

    const course = await Course.create({
      ...req.body,
      instructor: req.user._id,
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all courses (with optional filters)
exports.getCourses = async (req, res) => {
  try {
    const { category, level, search } = req.query;
    let filter = {};

    if (category) filter.category = category;
    if (level) filter.level = level;
    if (search) filter.title = { $regex: search, $options: "i" };

    const courses = await Course.find(filter).populate("instructor", "name email");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("instructor", "name email");
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a course (instructor or admin)
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({ message: "Course not found" });

    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized to update this course" });
    }

    Object.assign(course, req.body);
    await course.save();

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({ message: "Course not found" });

    if (course.instructor.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized to delete this course" });
    }

    await course.deleteOne();
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Enroll in a course
exports.enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const user = await User.findById(req.user._id);

    if (user.enrolledCourses.includes(course._id)) {
      return res.status(400).json({ message: "Already enrolled in this course" });
    }

    user.enrolledCourses.push(course._id);
    course.studentsEnrolled.push(user._id);

    await user.save();
    await course.save();

    res.json({ message: "Enrolled successfully", course });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
