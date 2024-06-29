const express = require("express");
const router = express.Router();
const empcontrol = require("../controller/employecontrol");

router.post("/", empcontrol.addemploye);
router.get("/", empcontrol.getemployees);
router.get("/:id", empcontrol.getemploye);
router.put("/:id", empcontrol.ubdateemp);
router.delete("/:id", empcontrol.deleteemp);

module.exports = router;
