import type { Request, Response } from 'express';
import formidable from 'formidable';
import fs from 'fs';

export const handleFileUpload = (req: Request, res: Response) => {
    const form = formidable({
        multiples: true,
        keepExtensions: true,
    });
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(500).json({ error: err });
            return;
        }
        // usually we would save the file to another service or database
        const file = files.file?.[0];
        const formData = new FormData();
        formData.append('someKey', 0);
        formData.append('file', new Blob([fs.readFileSync(file.filepath)]));

        res.json({ fields, files });
    });
};
