/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: isProd ? "export" : undefined, // ✅ export เฉพาะตอน production
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      "https://flask-todo-app-alh8.onrender.com/api",
  },
};

console.log(
  `✅ Loaded ENV from next.config.js: ${nextConfig.env.NEXT_PUBLIC_API_URL}`
);

module.exports = nextConfig;
