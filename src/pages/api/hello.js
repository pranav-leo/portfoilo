import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const imagesDir = path.join(process.cwd(), "public/compnies");

  try {
    const files = fs.readdirSync(imagesDir);
    const imageFiles = files; // Filter only image files
    res.status(200).json({ images: imageFiles });
  } catch (error) {
    res.status(500).json({ error: "Error reading images" });
  }
}
