const querystring = require("querystring");
const createIdentifier = require("./createAndValidateSlackState");

const slack_client_id = process.env.SLACK_CLIENT_ID;
const slack_redirect_uri = process.env.SLACK_REDIRECT_URI;
const scope = "openid,email,profile";

const myIdentifier = createIdentifier();

const authenticationWithSlack = async function (req, res) {
  const state = await myIdentifier.generate();
  console.log(`generated state: ${state}`);
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
