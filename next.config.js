/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID:
      '891949740369-s7e9joafjlilgjoo79fjoavftph4uipn.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: 'SuperSecret',
  },
};

module.exports = nextConfig;
