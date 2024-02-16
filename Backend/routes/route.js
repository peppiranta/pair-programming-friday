const express = require("express");

const {
  getUsers,
  //getSingleUser,
  //updateUser,
  deleteUser,
  createUser,
  loginUser,
} = require("../controllers/userController");

const router = express.Router();

// GET all User
router.get("/", getUsers);

// POST a new User
router.post("/", createUser);

// UPDATE a new User
//router.patch("/:id", updateUser);

// DELETE User
router.delete("/:id", deleteUser);

// GET SINGLE User
//router.get("/:id", getSingleUser);

// LOGIN user
router.post("/login", loginUser);

module.exports = router;
