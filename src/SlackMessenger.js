var AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1'
})
var lambda = new AWS.Lambda({
  region: 'us-east-1'
});
class SlackMessenger {
  constructor() {}

  sendMessage(message) {
    var params = {
      FunctionName: 'MentalRepSlackChat',
      /* required */
      Payload: JSON.stringify({
        'message': message
      })
    };
    lambda.invoke(params, function(err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
      } else {
        console.log("successful response"); // successful response
      }
    });
  }
}



module.exports = SlackMessenger;