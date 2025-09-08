import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname, "../../"),

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.kitchenwarehouse.com.au",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "kwh-kitchenwarehouse.netlify.app",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.kitchenwarehouse.com.au",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
