const { WebClient } = require("@slack/web-api");
const authenticationWithSlack = require("./authenticationWithSlack");

const client = new WebClient();

const slack_client_id = process.env.SLACK_CLIENT_ID;
const slack_client_secret = process.env.SLACK_CLIENT_SECRET;

const exchangeAccessCodeWithSlack = async function (req, res) {
  const state = req.query.state;
  // if (!state || !authenticationWithSlack.validate(state)) {
  //   return res.status(400).send("Invalid state parameter");
  // }

  try {
    const code = req.query.code;
    const token = await client.openid.connect.token({
      client_id: slack_client_id,
      client_secret: slack_client_secret,
      grant_type: "authorization_code",
      code: code,
    });
    // console.log("My token is:", token);
    let userAccessToken = token.access_token;
    let tokenWiredClient = new WebClient(userAccessToken);
    const userInfo = await tokenWiredClient.openid.connect.userInfo();

    // /////////////////////////////////////////////////////////

    const team_domain = userInfo["https://slack.com/team_domain"];
    console.log(`TEAM DOMAIN: ${team_domain}`);

    if (team_domain === "team-maci") {
      console.log(`MEMBER: ${team_domain}`);
      res.send({ userInfo, ShowButton: true });
      // res.send(identityInfo);
    } else {
      console.log(`YOU SHALL NOT PASS! Wrong domain: ${team_domain}`);
      res.status(403).send({ userInfo, ShowButton: false });
    }

    // ////////////////////////////////////////////////////
    // console.log(userInfo);
    // res.send(userInfo);
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = exchangeAccessCodeWithSlack;
