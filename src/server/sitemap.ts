import { Response, NextFunction } from 'express';
import { PublicRequest } from 'server-types';
import { customNetworkRequest } from '@utils/network';
import moment from 'moment';
import fs from 'fs';
import { join } from 'path';

const isDev = process.env.NODE_ENV === 'development';
const sitemapFilePath = join(__dirname, '../../public/sitemap.xml');

let lastFetchedDate: Date | null = null;

const sitemapTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ict.com</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://curiousjr.com/blogs</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  __USER_PROFILE_SITEMAP__
</urlset>`;

export default async function sendSitemap(req: PublicRequest, res: Response, next: NextFunction) {
  try {
    if (
      !lastFetchedDate ||
      moment().subtract(24, 'hours').toDate().getTime() > lastFetchedDate.getTime()
    ) {
      const response = await customNetworkRequest<null, string[]>({
        url: 'profile/internal/usernames',
        method: 'GET',
        headers: {
          'x-api-key': process.env.API_KEY_INTERNAL,
          'Content-Type': 'application/json',
        },
      });
      if (!response.data) throw new Error('Not Found');
      const sitemapString = sitemapTemplate.replace(
        '__USER_PROFILE_SITEMAP__',
        appendUsername(response.data),
      );

      await fs.promises.writeFile(sitemapFilePath, sitemapString);
      lastFetchedDate = new Date();
    }
  } catch (e) {
    if (isDev) return next(e);
  } finally {
    res.sendFile(join(__dirname, '../../public/sitemap.xml'));
  }
}

function appendUsername(data: string[]) {
  let urlOutput = '';
  for (let i = 0; i < data.length; i++) {
    urlOutput = urlOutput.concat(`<url>
    <loc>https://curiousjr.com/profile/${data[i]}</loc>
    <changefreq>weekly</changefreq>
  </url>`);
  }
  return urlOutput;
}
