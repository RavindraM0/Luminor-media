import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parser with high limit for uploading image assets
  app.use(express.json({ limit: "50mb" }));

  // API routes FIRST
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/team-photos", (req, res) => {
    try {
      const { memberId, base64Data } = req.body;
      if (!memberId || !base64Data) {
        return res.status(400).json({ error: "Missing memberId or base64Data" });
      }

      const buffer = Buffer.from(base64Data.replace(/^data:image\/\w+;base64,/, ""), "base64");

      // Save to public/team/
      const publicDir = path.join(process.cwd(), "public", "team");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      const publicFilePath = path.join(publicDir, `${memberId}.png`);
      fs.writeFileSync(publicFilePath, buffer);

      // Save to src/assets/images/team/
      const srcDir = path.join(process.cwd(), "src", "assets", "images", "team");
      if (!fs.existsSync(srcDir)) {
        fs.mkdirSync(srcDir, { recursive: true });
      }
      const srcFilePath = path.join(srcDir, `${memberId}.png`);
      fs.writeFileSync(srcFilePath, buffer);

      return res.json({ success: true, url: `/team/${memberId}.png` });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("Error saving team photo:", message);
      return res.status(500).json({ error: message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
