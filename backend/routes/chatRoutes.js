const express = require("express");
const { accessChat, fetchChats, createGroupChat, deleteGroupChat, fetchPublicGroups, removeFromGroup, addToGroup, renameGroup } = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/deletegroup").put(protect, deleteGroupChat);
router.route("/groups").get(protect, fetchPublicGroups);
router.route("/rename").put(protect, renameGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removeFromGroup);

module.exports = router;