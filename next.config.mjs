// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactCompiler: true,
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "sqyfnfdqixejekchzicd.supabase.co",
//         port: "",
//         pathname: "/storage/v1/object/public/cabin-images/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */      //** 
const nextConfig = {
  reactCompiler: true,
  /* config options here */
  images: {
    remotePatterns: [new URL("https://sqyfnfdqixejekchzicd.supabase.co/storage/v1/object/public/cabin-images/**")],
  },
};

export default nextConfig;
