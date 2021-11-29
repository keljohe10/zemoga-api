const model = require("../../models/celebrities");
const ObjectId = require("mongodb").ObjectId;

const handler = async (req, res, next) => {
  try {
    const { vote } = req.query;
    const { id } = req.params;
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
      { _id: ObjectId(id) },
      { $inc: data },
      {
        lean: true,
        maxTimeMS: parseInt(5000, 10),
      }
    );

    res.status(200).send({ successfully: true });
  } catch (error) {
    return next(error);
  }
};
module.exports = handler;
