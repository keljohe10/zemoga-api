const express = require("express");
const router = express.Router();

const celebritiesRoute = express.Router();
const celebritiesController = require("./controllers/celebrities");
celebritiesRoute.get("/", celebritiesController.getCelebrities);
celebritiesRoute.patch("/", celebritiesController.updateCelebrities);

router.get("/", (req, res) => res.send({ message: "Wellcome!" }));
router.use("/celebrities", celebritiesRoute);

module.exports = router;
