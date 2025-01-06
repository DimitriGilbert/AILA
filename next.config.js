/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  output: 'export', // Enable static export for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/AILA' : '', // Replace with your repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AILA/' : '', // Replace with your repository name
  typescript: {
    ignoreBuildErrors: true,  // Ignore TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true,  // Ignore ESLint errors during build
  },
  // Exclude OLD directory from compilation
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/OLD/**']
    };
    return config;
  }
};

export default config;