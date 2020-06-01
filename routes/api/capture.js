// @route    POST api/auth
// @desc     authenticate user & get token
// @access   Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").exists(),
    check("password", "password required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
  }
);

module.exports = router;
