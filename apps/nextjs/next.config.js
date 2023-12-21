/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@abide/shared", "@abide/db"],
};

module.exports = nextConfig;
