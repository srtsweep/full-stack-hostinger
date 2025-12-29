import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "https://full-stack-hostinger-client.onrender.com/",
      "https://full-stack-hostinger-client-try.onrender.com/",
      // TODO : add production url
    ],
    credentials: true,
    // methods: ["GET", "POST"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the chaicode server" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
