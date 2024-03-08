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
    console.log(`UserINFO here: ${userInfo}`);

    //checks if user is part of workspace and if true, create JWT and redirect user to frontend with token
    const teamVerificationName = process.env.SLACK_WORKSPACE_NAME;
    const userTeamDomain = userInfo["https://slack.com/team_domain"];
    const slackUserID = userInfo["https://slack.com/user_id"];
    const groupAdminID = process.env.SLACK_ADMIN_USER_ID;

    if (userTeamDomain === teamVerificationName) {
      // check to see if user is workspace member in order have authorisation to add songs
      const userObject = {
        user_id: userInfo["https://slack.com/user_id"],
        role: slackUserID === groupAdminID ? "admin" : "basic", // check to see if user is team admin in order have authorisation to reset daily playlist
      };
      console.log(`I are ${userObject.role}`);
      const jwtSecret = process.env.JWT_SECRET;

      // create jwt for access to stay tuned radio (our) website
      const teamWorkspaceToken = jwt.sign(userObject, jwtSecret);
      // add FRONTEND_URL to readme and .env
      //teamWorkspaceToken is sent to frontend using the querystring
      res.redirect(`${process.env.FRONTEND_URL}?token=${teamWorkspaceToken}`);
    } else {
      res.redirect(`${process.env.FRONTEND_URL}`);
    }
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = exchangeAccessCodeWithSlack;
