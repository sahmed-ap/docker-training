// consumer.js
const amqp = require('amqplib');

const consumeMessage = async () => {
  try {
    // "rabbitmq" is the Docker hostname for RabbitMQ
    const connection = await amqp.connect('amqp://guest:guest@127.0.0.1:5672/'); 
    const channel = await connection.createChannel();
    const queueName = 'message_queue_2';

    await channel.assertQueue(queueName);
    console.log('Waiting for messages...');

    channel.consume(queueName, (message) => {
      if (message) {
        const messageObject = JSON.parse(message.content.toString());
        console.log('Message received:', messageObject);
        channel.ack(message); // Acknowledge the message to remove it from the queue
      }
    });
  } catch (error) {
    console.error('Error consuming message:', error);
  }
}

module.exports = {consumeMessage}