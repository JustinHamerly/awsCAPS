const { Consumer } = require('sqs-consumer');

const queueUrl = 'https://sqs.us-west-2.amazonaws.com/610126075203/delivery';

const consumer = Consumer.create({
  queueUrl: queueUrl,
  handlePayload: (payload) => {
    console.log('Package was delivered: ', payload);
  }
});

consumer.start();

