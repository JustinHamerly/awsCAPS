const { Consumer } = require('sqs-consumer');

const queueUrl = 'https://sqs.us-west-2.amazonaws.com/610126075203/packages.fifo';

const consumer = Consumer.create({
  queueUrl: queueUrl,
  handlePayload: (payload) => {
    console.log('package picked up: ', payload);
  }
});

consumer.start();
