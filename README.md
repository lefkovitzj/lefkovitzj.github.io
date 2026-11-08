# lefkovitzj.github.io
My personal website - introduction, portfolio, and contact.

### Deployed with:
* GitHub Pages
* Jekyll static site generator
* Tailwind CSS 4 CDN
* daisyUI 5 CDN
* Google Tag for Google Analytics
* A custom domain (lefkovitzj.com)
* Cloudflare for security

### Search metadata

The shared head generates page titles, descriptions, canonical URLs, social previews, and JSON-LD structured data. Update the site identity and profile links in `_config.yml`. Each page can set `seo_title` to customize its search title without changing its visible heading, and `description` to override its project summary in search metadata. Optional `image` and `image_alt` fields customize social previews.

Project URLs use `/projects/<filename>` through the front matter defaults in `_config.yml`. Keep internal links, canonical URLs, and sitemap entries consistent when adding pages. The `jekyll-sitemap` plugin, included with `github-pages`, generates `/sitemap.xml`; `/robots.txt` links to it. Set `sitemap: false` and `noindex: true` on pages that should stay out of search results.

After publishing, submit `https://lefkovitzj.com/sitemap.xml` in Google Search Console. The `CNAME` file contains the primary domain only; configure DNS for `www` so GitHub Pages can redirect it to the primary domain. Restart `jekyll serve` after changing `_config.yml`.
