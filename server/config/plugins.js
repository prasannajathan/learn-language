module.exports = ({ env }) => ({
    'strapi-google-auth': {
        enabled: false,
    },
    seo: {
        enabled: true,
    },
    graphql: {
        enabled: true,
        config: {
            defaultLimit: 10,
            maxLimit: 20
        }
    }
});