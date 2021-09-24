const express = require("express");
const router = express.Router();

const {create, eliminar, edit, list, store, update} = require("../controllers/adminController");

router.get("/", list);

router.get("/create", create);
router.post("/create", store);

router.get("/edit", edit);
router.put("/edit", update);

router.delete("/eliminar", eliminar);

module.exports = router;