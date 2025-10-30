import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://sunajo.com";
    const now = new Date().toISOString();
    return [
        { url: "/", changefreq: "daily", priority: 1.0, lastModified: now },
        { url: "/about", changefreq: "monthly", priority: 0.9, lastModified: now },
        { url: "/services", changefreq: "monthly", priority: 0.9, lastModified: now },
        { url: "/capabilities", changefreq: "monthly", priority: 0.8, lastModified: now },
        { url: "/products", changefreq: "monthly", priority: 0.8, lastModified: now },
        { url: "/careers", changefreq: "monthly", priority: 0.7, lastModified: now },
        { url: "/contact", changefreq: "yearly", priority: 0.7, lastModified: now },
        { url: "/calendly", changefreq: "yearly", priority: 0.6, lastModified: now },
        { url: "/privacy", changefreq: "yearly", priority: 0.5, lastModified: now },
        { url: "/terms", changefreq: "yearly", priority: 0.5, lastModified: now },
    ].map(route => ({
        ...route,
        url: baseUrl + route.url,
    }))
}