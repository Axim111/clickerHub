import { createWorker } from 'tesseract.js';

export const ocr = async (path:string, len:string) => {
  const worker = await createWorker(len);
  const ret = await worker.recognize(path);
  await worker.terminate();
  return ret.data.text
  
};