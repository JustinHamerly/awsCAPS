const AWS = require('aws-sdk');
// configuire
AWS.config.update({ region: 'us-west-2'});

const sns = new AWS.SNS();

const deliveredtopic = 'arn:aws:sns:us-west-2:610126075203:delivered';

const payload = {
  Store: 'animil',
  OrderID: 'pickup100',
  Customer: 'Jenny Barnes',
  TopicArn: deliveredtopic,
};
// if we don't chain .promuise on the end, you will pass a callback

// if you want to use async use .promise()

sns.publish(payload).promise() 
  .then(data => {
    console.log('Package out for delivery: ', data);
  })
  .catch(e => {
    console.log(e);
  });
