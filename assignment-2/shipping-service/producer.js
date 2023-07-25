const amqp = require('amqplib');

const sendMessage = async (msg) => {
  try {
    const connection = await amqp.connect('amqp://host.docker.internal:5672'); // "rabbitmq" is the Docker hostname for RabbitMQ
    const channel = await connection.createChannel();
    const queueName = 'message_queue_1';

    const message = { text: msg || 'Hello from the SHIPPING microservice!' };
    const messageString = JSON.stringify(message);

    await channel.assertQueue(queueName);
    await channel.sendToQueue(queueName, Buffer.from(messageString));
    console.log('Message sent:', message);

    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

module.exports = {sendMessage}