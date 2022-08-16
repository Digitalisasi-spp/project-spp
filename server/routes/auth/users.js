const router = require("express").Router();

router.post("/signin", (req, res) => {
  res.send(req.method);
});

router.post("/signup", (req, res) => {
  res.send(req.method);
});

module.exports = router;
