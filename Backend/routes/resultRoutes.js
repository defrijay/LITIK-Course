const express = require("express");
const {
  getAllResults,
  getResultById,
  createResult,
  getPembahasanById,
} = require("../controllers/resultController");

const router = express.Router();

router.get("/", getAllResults);
router.get("/:id", getResultById);
router.post("/", createResult);
router.get("/:id/pembahasan", getPembahasanById);

module.exports = router;
