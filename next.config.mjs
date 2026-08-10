/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The .vercel.app deployment URLs are a duplicate of the real site. Send
      // every hit (and any link equity Google already gave them) to the custom
      // domain with a permanent redirect so only ng.gower2.com is indexed.
      {
        source: "/:path*",
        has: [{ type: "host", value: "wer2go-nigeria.vercel.app" }],
        destination: "https://ng.gower2.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "wer2go-nigeria-samstickkzs-projects.vercel.app" }],
        destination: "https://ng.gower2.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
