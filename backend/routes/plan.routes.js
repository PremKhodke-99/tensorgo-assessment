const { createPlan, getAllPlans, updatePlan, deletePlan } = require("../controller/plan.controller");

const router = require("express").Router();

router.post('/', createPlan);
router.get("/", getAllPlans);
router.put("/:id", updatePlan);
router.delete("/:id", deletePlan);

module.exports = router;
