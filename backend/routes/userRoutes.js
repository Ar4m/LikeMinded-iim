const express = require("express");
const { registerUser, editUser, authUser, allUsers } = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers).put(editUser);
router.post("/login", authUser);
//router.put("/edit", editUser);

module.exports = router;