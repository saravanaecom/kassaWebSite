import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kassapos.in';

  // Base static routes
  const baseRoutes = [
    '',
    '/about',
    '/products',
    '/features',
    '/blog',
    '/contact',
    '/pricing',
    '/demo',
    '/privacy-policy',
    '/terms',
    '/refund-policy',
  ];

  const sitemapUrls: MetadataRoute.Sitemap = baseRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamically read product routes from the file system
  try {
    const productsDir = path.join(process.cwd(), 'src', 'app', 'products');
    
    if (fs.existsSync(productsDir)) {
      // Read all directories inside src/app/products
      const entries = fs.readdirSync(productsDir, { withFileTypes: true });
      
      for (const entry of entries) {
        // Skip dynamic routes like [slug] and only process directories
        if (entry.isDirectory() && !entry.name.startsWith('[')) {
          const pagePath = path.join(productsDir, entry.name, 'page.tsx');
          
          // If a page.tsx exists, add it to the sitemap
          if (fs.existsSync(pagePath)) {
            sitemapUrls.push({
              url: `${baseUrl}/products/${entry.name}`,
              lastModified: new Date(),
              changeFrequency: 'daily',
              priority: 0.8,
            });
          }
        }
      }
    }
  } catch (error) {
    console.error('Error generating dynamic product sitemap:', error);
  }

  return sitemapUrls;
}
