const AWS = require('aws-sdk');
// configuire
AWS.config.update({ region: 'us-west-2'});

const sns = new AWS.SNS();

const pickuptopic = 'arn:aws:sns:us-west-2:610126075203:pickup.fifo';

const orderInfo = {
  Store: 'animil',
  OrderID: 'pickup100',
  Customer: 'Jenny Barnes',
}

const payload = {
  Message: JSON.parse(orderInfo),
  TopicArn: pickuptopic,
};

sns.publish(payload).promise() 
  .then(data => {
    console.log('package set for pickup: ', data);
  })
  .catch(e => {
    console.log(e);
  });
