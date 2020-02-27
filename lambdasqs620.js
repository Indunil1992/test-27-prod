let AWS = require('aws-sdk');
const sqs = new AWS.SQS();

exports.handler = async (event) => {
    try {
        let data = await sqs.receiveMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/test-queue.fifo`,
            MaxNumberOfMessages: 1,
            VisibilityTimeout: 30,
            WaitTimeSeconds: 0,
            AttributeNames: ['All']
        }).promise();

        console.log("data-receiveMsg");
        console.log(data);
    } catch (err) {
        // error handling goes here
        console.log("err-receiveMsg");
        console.log(err);

    };
    try {
        let data = await sqs.sendMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/fdfdfe.fifo`,
            MessageBody: "test1",
            DelaySeconds: 0,
            MessageDeduplicationId: "njjjjjjjjjjjjh",
            MessageGroupId: "0"
        }).promise();
        console.log("data-sendMsg");
        console.log(data);
    } catch (err) {
        // error handling goes here
    };
    console.log("err-sendMsg");
    console.log(err);
    try {
        let data = await sqs.deleteMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/my-message-queue`,
            ReceiptHandle: "d"
        }).promise();
        console.log("data-deleteMe");
        console.log(data);
    } catch (err) {
        // error handling goes here
            console.log("err-deleteMe");
    console.log(err);
    };


    return { "message": "Successfully executed" };
};