const initializeConnection = (dynamoose) => {
    dynamoose.AWS.config.update({
        accessKeyId: 'AKID',
        secretAccessKey: 'SECRET',
        region: 'us-east-2'
    });
    dynamoose.local();
};

export { initializeConnection };
