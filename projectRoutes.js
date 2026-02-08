const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { checkRole } = require("../middleware/roleMiddleware");

const projectController = require("../controllers/ProjectController");
const upload = require("../middleware/upload");

// TEST ROUTE
router.get("/test",(req,res)=>{
 res.send("Project Route Working");
});

// ⭐ ASSIGN ROUTE MUST COME BEFORE /:id
router.put(
 "/assign/:id",
 protect,
 checkRole("Admin","Lead"),
 projectController.assignUsers
);



 router.post(
 "/upload/:id",
 protect,
 upload.single("file"),
 projectController.uploadDocument
);

router.put(
 "/complete/:id",
 protect,
 checkRole("Admin","Lead"),
 projectController.markCompleted
);


// CREATE PROJECT
router.post("/", protect, checkRole("admin"), projectController.createProject);

// GET ALL PROJECTS
router.get("/", protect, projectController.getProjects);

// UPDATE PROJECT
router.put("/:id", protect, projectController.updateProject);

// DELETE PROJECT
router.delete("/:id", protect, projectController.deleteProject);

router.get("/stats/overview", protect, projectController.getStats);
console.log(projectController);
console.log("protect =", protect);
console.log("checkRole =", checkRole);
console.log("assignUsers =", projectController.assignUsers);

module.exports = router;




