//////////////////////////////////////////////////////////////////////////
//ROUTES FOR PERFORMING CRUD OPERATIONS ON ROUND DOCUMENTS
//////////////////////////////////////////////////////////////////////////

import User from "../models/User.js";
import {Round} from "../models/Round.js";
import express from 'express';
const roundRoute = express.Router();

//CREATE round route: Adds a new round as a subdocument to 
//a document in the users collection (POST)
roundRoute.post('/rounds/:userId', async (req, res, next) => {
    console.log("in /rounds (POST) route with params = " + 
                JSON.stringify(req.params) + " and body = " + 
                JSON.stringify(req.body));
    if (!req.body.hasOwnProperty("date") || 
        !req.body.hasOwnProperty("course") || 
        !req.body.hasOwnProperty("type") ||
        !req.body.hasOwnProperty("holes") || 
        !req.body.hasOwnProperty("strokes") ||
        !req.body.hasOwnProperty("minutes") ||
        !req.body.hasOwnProperty("seconds") || 
        !req.body.hasOwnProperty("images") ||
        !req.body.hasOwnProperty("notes")) {
      //Body does not contain correct properties
      return res.status(400).send("POST request on /rounds formulated incorrectly." +
        "Body must contain all 8 required fields: date, course, type, holes, strokes, " +
        "minutes, seconds, notes.");
    }
    try {
    const round = new Round(req.body);
    const error = round.validateSync();
    if (error) {
      //Schema validation error occurred
      return res.status(400).send("Round not added to database. " + error.message);
    }
    const status = await User.findOneAndUpdate(
      { "accountData.id": req.params.userId },
      { $push: { rounds: req.body } },
      { new: true }
    );
    if (!status) {
      console.log("add rounds status:", status);
      return res.status(400).send("Round not added to database. " + "User '" + req.params.userId + "' does not exist.");
    } else {
      const newRoundData = status.rounds[status.rounds.length - 1]; // get the new round at the end of the array
      console.log("round data", newRoundData);
      return res.status(201).json({ newRoundData });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send("Round not added to database. " +
      "Unexpected error occurred: " + err);
  }
  });

//READ round route: Returns all rounds associated with a given user in 
//the users collection (GET)
roundRoute.get('/rounds/:userId', async(req, res) => {
    console.log("in /rounds route (GET) with userId = " + 
      JSON.stringify(req.params.userId));
    try {
      let thisUser = await User.findOne({"accountData.id": req.params.userId});
      if (!thisUser) {
        return res.status(400).send("No user account with specified userId " + 
           "was found in database.");
      } else {
        return res.status(200).json(JSON.stringify(thisUser.rounds));
      }
    } catch (err) {
      console.log()
      return res.status(400).send("Unexpected error occurred when looking " +
        "up user in database: " + err);
    }
  });
  
//UPDATE round route: Updates a specific round for a given user
//in the users collection (PUT)
//TODO: Implement this route
//DONE
roundRoute.put("/rounds/:userId", async (req, res, next) => {
  console.log(
    "in /rounds (PUT) route with params = " + JSON.stringify(req.params) + " and body = " + JSON.stringify(req.body)
  );
  if (
    !req.body.hasOwnProperty("date") ||
    !req.body.hasOwnProperty("course") ||
    !req.body.hasOwnProperty("type") ||
    !req.body.hasOwnProperty("holes") ||
    !req.body.hasOwnProperty("strokes") ||
    !req.body.hasOwnProperty("minutes") ||
    !req.body.hasOwnProperty("seconds") ||
    !req.body.hasOwnProperty("images") ||
    !req.body.hasOwnProperty("notes")
  ) {
    //Body does not contain correct properties
    return res
      .status(400)
      .send(
        "PUT request on /rounds formulated incorrectly." +
          "Body must contain all 8 required fields: date, course, type, holes, strokes, " +
          "minutes, seconds, notes."
      );
  }
  try {
    const round = new Round(req.body);
    const error = round.validateSync();
    if (error) {
      //Schema validation error occurred
      return res.status(400).send("Round not updated. " + error.message);
    }
    const status = await User.updateOne(
      {
        "accountData.id": req.params.userId,
        "rounds._id": req.body.id,
      },
      {
        $set: { "rounds.$": req.body },
      }
    );
    if (status.modifiedCount != 1) {
      return res
        .status(404)
        .send("Round not updated. Either no round with that id " + "exists, or no value in the round was changed.");
    } else {
      return res.status(200).send("Round successfully updated.");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send("Round not updated. " + "Unexpected error occurred: " + err);
  }
});

//DELETE round route: Deletes a specific round for a given user
//in the users collection (DELETE)
roundRoute.delete("/rounds/:userId/:roundId", async (req, res, next) => {
  console.log("in /rounds route (DELETE) with userId = " + JSON.stringify(req.params.userId));
  try {
    let status = await User.updateOne(
      { "accountData.id": req.params.userId },
      { $pull: { rounds: { _id: req.params.roundId } } }
    );
    if (status.modifiedCount != 1) {
      return res.status(404).send(`No round ${req.params.roundId} was found. Round could not be deleted.`);
    } else {
      return res.status(200).send("Round " + req.params.roundId + " was successfully deleted.");
    }
  } catch (err) {
    return res
      .status(400)
      .send("Unexpected error occurred when attempting to delete" + "round with id " + req.params.roundId + ": " + err);
  }
});

export default roundRoute;