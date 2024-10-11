// pages/api/upload.ts

import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Disable Next.js built-in body parsing for this route
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to create directory if it doesn't exist
const ensureDirectoryExistence = (filePath: string) => {
  const dir = path.dirname(filePath);
  if (fs.existsSync(dir)) {
    return true;
  }
  fs.mkdirSync(dir, { recursive: true });
};

// API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = './public/images'; // Set upload directory
  form.keepExtensions = true; // Keep file extension

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing file:', err);
      return res.status(500).json({ message: 'Error uploading file' });
    }

    const file = files.image; // Assume the file input is named 'image'
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const uploadPath = path.join('./public/images', file.newFilename);
    ensureDirectoryExistence(uploadPath);

    // Move the file to the images directory
    fs.rename(file.filepath, uploadPath, (err) => {
      if (err) {
        console.error('Error moving file:', err);
        return res.status(500).json({ message: 'Error saving file' });
      }
      return res.status(200).json({ message: 'File uploaded successfully', filePath: `/images/${file.newFilename}` });
    });
  });
}
