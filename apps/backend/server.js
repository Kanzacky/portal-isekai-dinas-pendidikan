import app from "./app.js";

const port = process.env.APP_PORT || 8010;

app
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`❌ Port ${port} is already in use`);
      process.exit(1);
    } else {
      throw err;
    }
  });
