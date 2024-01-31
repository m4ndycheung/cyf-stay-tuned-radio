const { WebClient } = require("@slack/web-api"); // requires v6.4 or higher
const jwt = require("jsonwebtoken");
const uuid = require("uuid");

const slack_client_id = process.env.SLACK_CLIENT_ID;
const slack_client_secret = process.env.SLACK_CLIENT_SECRET;
const slack_redirect_uri = process.env.SLACK_REDIRECT_URI;
const scope = "openid,email,profile";

//this function creates a unique id for the user that will expire after 10 minutes

function createIdentifier() {
  const activeID = {}; //here i'm creating an empty object to store the id

  //this generates a unique id, save it on the object with the time
  //plus 10 mins, as a key value pair.
  function generate() {
    const newValue = uuid.v4();
    activeID[newValue] = Date.now() + 10 * 60 * 1000; // 10 minutes
    return newValue;
  }

  //this is checking if the id is valid or if expired
  function validate(state) {
    const expiresAt = activeID[state];
    if (expiresAt && Date.now() <= expiresAt) {
      delete activeID[state];
      return true;
    }
    return false;
  }

  return {
    generate,
    validate,
  };
}

const myIdentifier = createIdentifier();
