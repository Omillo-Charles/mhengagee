import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ichef.bbci.co.uk" },
      { protocol: "https", hostname: "dims.apnews.com" },
      { protocol: "https", hostname: "image.cnbcfm.com" },
      { protocol: "https", hostname: "variety.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "media-cldnry.s3.amazonaws.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "assets.pinterest.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "yt3.ggpht.com" },
    ],
  },
};

export default nextConfig;
