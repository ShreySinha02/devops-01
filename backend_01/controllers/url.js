import { nanoid } from 'nanoid';
import URL from '../models/url.js'; // Ensure you have the correct file extension (.js) if you're using ES modules.

export async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: 'url is required' });
    }

    const shortID = nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}
