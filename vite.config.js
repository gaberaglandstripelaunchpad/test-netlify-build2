export default config = {
  server: {
    port: 3001,
    proxy: {
      "/api": "http://localhost:4242",
    },
  },
};
