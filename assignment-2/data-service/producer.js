const amqp = require('amqplib');

const sendMessage = async (msg) => {
  try {
    const connection = await amqp.connect('amqp://guest:guest@127.0.0.1:5672/'); // "rabbitmq" is the Docker hostname for RabbitMQ
    const channel = await connection.createChannel();
    const queueName = 'message_queue_2';

    const message = { text: msg || 'Hello from the DATA SERVICE microservice!' };
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

module.exports = {sendMessage};