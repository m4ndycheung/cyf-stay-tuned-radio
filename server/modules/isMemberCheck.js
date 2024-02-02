// "https://slack.com/team_id": "T06GKRJP7H6",
// "https://slack.com/team_name": "Team MACI",
// "https://slack.com/team_domain": "team-maci"

// users.info API method
// // ID of user you watch to fetch information for
// const userId = "U12345";
// try {
//   // Call the users.info method using the WebClient
//   const result = await client.users.info({
//     user: userId
//   });
//   console.log(result);
// }
// catch (error) {
//   console.error(error);
// }

//////////////// OR ///////////////////

// users.identity.team API method
// {
//     "ok": true,
//     "user": {
//         "name": "Sonny Whether",
//         "id": "U0G9QF9C6"
//     },
//     "team": {
//         "name": "Captain Fabian's Naval Supply",
//         "id": "T0G9PQBBK"
//     }
// }

// const { access_token, team_id } = token; // destructure for access

// const tokenWiredClient = new WebClient(access_token);

// // users.identity API method
// const identityInfo = await tokenWiredClient.users.identity(); // missing scope error
// console.log(`IDENTITY INFO: ${identityInfo}`);
// const userTeamId = identityInfo.team.id;

// // member check
// if (userTeamId === "T06GKRJP7H6") {
//   console.log(`TEAM ID: ${userTeamId}`);
//   // res.send(identityInfo);
// } else {
//   console.log(`YOU SHALL NOT PASS! Wrong team id: ${userTeamId}`);
//   res.status(403).send("Forbidden");
// }
