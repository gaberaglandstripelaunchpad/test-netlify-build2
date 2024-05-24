export default config = {
  server: {
    proxy: {
      // Send API requests to the server
      "/api": "http://localhost:4242",
    },
  },
};
