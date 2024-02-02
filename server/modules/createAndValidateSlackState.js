const uuid = require("uuid");

//this function creates a unique id for the user that will expire after 10 minutes
function createIdentifier() {
  const activeID = {}; //here i'm creating an empty object to store the id
  //this generates a unique id, save it on the object with the time
  //plus 10 mins, as a key value pair.
  function generate() {
    console.log(`activeID state store generate: ${JSON.stringify(activeID)}`);
    const newValue = uuid.v4();
    activeID[newValue] = Date.now() + 10 * 60 * 1000; // 10 minutes
    return newValue;
  }

  //this is checking if the id is valid or if expired
  function validate(state) {
    console.log(`activeID state store: ${JSON.stringify(activeID)}`);
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

module.exports = createIdentifier;
