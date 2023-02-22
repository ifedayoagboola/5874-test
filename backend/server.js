import express from "express";
import cors from "cors";
import testimonials from "./testimonials.js";
import testimonial_data from "./testimonials.js";
const app = express();
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://bitshub-admin.vercel.app",
    "https://bitshub.vercel.app",
  ],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("server is ready");
});
app.get("/api/testimonials", (req, res) => {
  res.send(testimonial_data);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
