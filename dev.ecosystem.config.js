module.exports = [
    {
        script: 'yarn workspace @auth/front start',
        name: 'front',

    },
    {
        script: 'yarn workspace @auth/back start:dev',
        name: 'back',
    },
];
