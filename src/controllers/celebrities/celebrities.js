const model = require("../../models/celebrities");

const handler = async (req, res, next) => {
  try {
    let celebrities = await model.find();
    celebrities = celebrities.map(celebritie =>(
      {
        id: celebritie._id,
        name: celebritie.name,
          description: celebritie.description,
          category: celebritie.category,
          picture: celebritie.picture,
          lastUpdated: celebritie.lastUpdated,
          votes: {
              positive: celebritie.votes.positive,
              negative: celebritie.votes.negative
          }
      }
    ))
   res.status(200).send({ celebrities });
  } catch (error) {
    return next(error);
  }
};
module.exports =  handler;