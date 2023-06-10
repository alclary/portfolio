const { Router } = require("express");
const loadController = require("../controllers/loadController");
const { middleware } = require("../functions/middleware");

const router = Router();

// GET - retrieve all loads with pagination
router.get("/", loadController.loads_get);
// GET - retrieve specific load
router.get("/:loadId", loadController.load_get);
// POST - create a new load
router.post("/", middleware.validateLoadSchema, loadController.create_load);
// DELETE - delete a given load
router.delete("/:loadId", loadController.delete_load);

module.exports = router;
