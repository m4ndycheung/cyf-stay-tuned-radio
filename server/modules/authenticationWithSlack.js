const uuid = require("uuid");
const querystring = require("querystring");

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

const authenticationWithSlack = async function (_, res) {
  const state = await myIdentifier.generate();
  const queryParams = querystring.stringify({
    client_id: slack_client_id,
    response_type: "code",
    redirect_uri: slack_redirect_uri,
    state: state,
    scope: scope,
  });
  console.log(queryParams);
  res.redirect(`https://slack.com/openid/connect/authorize?${queryParams}`);
};

module.exports = authenticationWithSlack;
