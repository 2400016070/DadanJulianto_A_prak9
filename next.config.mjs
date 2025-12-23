/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Perintah untuk bikin HTML statis
  basePath: '/DadanJulianto_A_prak9', // WAJIB SAMA dengan nama Repo Mas
  images: {
    unoptimized: true, // Supaya gambar tidak error
  },
};

export default nextConfig;