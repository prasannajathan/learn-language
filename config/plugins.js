module.exports = ({ env }) => ({
    'strapi-google-auth': {
        enabled: false,
    },
    seo: {
        enabled: true,
    },
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                article: {
                  field: 'slug',
                  references: 'title',
                },
                tutor: {
                    field: 'slug',
                    references: 'name',
                }
            },
        },
    },
    graphql: {
        enabled: true,
        config: {
            defaultLimit: 10,
            maxLimit: 20
        }
    },

});