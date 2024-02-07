const { WebClient } = require("@slack/web-api");
const createIdentifier = require("./createAndValidateSlackState");
const jwt = require("jsonwebtoken");

const client = new WebClient();

const slack_client_id = process.env.SLACK_CLIENT_ID;
const slack_client_secret = process.env.SLACK_CLIENT_SECRET;
const myIdentifier = createIdentifier();

const exchangeAccessCodeWithSlack = async function (req, res) {
  const state = req.query.state;
  console.log(`State passed to validate: ${state}`);
  if (!state || !(await myIdentifier.validate(state))) {
    return res.status(400).send("Invalid state parameter");
  }

  try {
    const code = req.query.code;
    const token = await client.openid.connect.token({
      client_id: slack_client_id,
      client_secret: slack_client_secret,
      grant_type: "authorization_code",
      code: code,
    });
    console.log("My token is:", token);
    let userAccessToken = token.access_token;
    const tokenWiredClient = new WebClient(userAccessToken);
    const userInfo = await tokenWiredClient.openid.connect.userInfo();

    const userObject = {
      user_id: userInfo["https://slack.com/user_id"],
      role: "basic",
    };

    const jwtSecret = process.env.JWT_SECRET;

    // create jwt for access to stay tuned radio (our) website
    const teamMaciToken = jwt.sign(userObject, jwtSecret);
    res.send(teamMaciToken);
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = exchangeAccessCodeWithSlack;
