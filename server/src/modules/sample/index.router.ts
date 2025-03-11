import { Router } from 'express';
import { handleFileUpload } from './handleFileUpload';

export const sampleRouter = Router();
sampleRouter.post('/file-upload', (req, res) => {
    handleFileUpload(req, res);
});
