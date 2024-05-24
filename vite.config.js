export default config = {
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:4242",
    },
  },
  preview: {
    port: 3000,
  },
};
