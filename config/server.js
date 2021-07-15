module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1212),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a7cc9f5ac823228c61b49ba02ce9c3f2'),
    },
  },
});
