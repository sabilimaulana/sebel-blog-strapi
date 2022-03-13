module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bd9228f52c6a25879a524a685830a9eb'),
  },
});
