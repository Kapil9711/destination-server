const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "enter details correctly";
    const extraDetails = err.errors[0].message;
    const error = {
      message,
      extraDetails,
      status,
    };

    res.status(500).json(error);
  }
};

module.exports = validate;
