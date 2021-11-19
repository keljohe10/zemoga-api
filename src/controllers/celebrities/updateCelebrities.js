const model = require("../../models/celebrities");

const handler = async (req, res, next) => {
  try {
    const { vote } = req.query;

    if (!vote) {
      throw new Error("No vote given");
    }

    let data =
      vote == 1
        ? {
            "votes.positive": 1,
          }
        : {
            "votes.negative": 1,
          };

    await model.updateOne(
      { name: "Cristina Fernández de Kirchner" },
      { $inc: data },
      {
        lean: true,
        maxTimeMS: parseInt(5000, 10),
      }
    );

    res.status(200).send({ ok: true });
  } catch (error) {
    return next(error);
  }
};
module.exports = handler;
