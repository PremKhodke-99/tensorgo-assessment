const { registerUser, loginUser, getUser, updateUser, deleteUser } = require("../controller/user.controller");
const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getusers", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;