module.exports = [
    {
        script: 'yarn env-cmd yarn workspace @auth/front start',
        name: 'front',

    },
    {
        script: 'yarn env-cmd yarn workspace @auth/back start:dev',
        name: 'back',
    },
];
