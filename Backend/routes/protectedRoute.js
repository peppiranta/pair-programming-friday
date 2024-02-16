const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/jwt");

router.get("/", requireAuth, (req, res) => {
  console.log("Hello from protected route!");
  res.send("Hello from protected route!");
});

module.exports = router;
