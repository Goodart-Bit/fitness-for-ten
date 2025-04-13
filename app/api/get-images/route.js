import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const folderPath = path.join(process.cwd(), 'public', 'gallery'); // Modify the folder as needed
  const files = fs.readdirSync(folderPath);
  const imageFiles = files.filter(file => file.match(/\.(jpg|jpeg|png)$/));

  const imagePaths = imageFiles.map(file => `/gallery/${file}`);

  return NextResponse.json(imagePaths);
}
