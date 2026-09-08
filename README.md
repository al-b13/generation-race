# Generation Race V7.2 — definitive image rendering fix

What was fixed:
- All image URLs are now root-absolute (`/assets/images/...`)
- Main homepage images are bound directly in CSS, without depending on CSS custom-property URL resolution
- Service and Thinking images are directly mapped by selector
- Internal page visuals use direct absolute asset paths
- Home wordmark is `GENERATION RACE` top-left
- Internal pages retain `GENERATION RACE` top-right
- Cloudflare Workers configuration remains unchanged

Deploy:
1. Replace local repo contents with this package
2. Commit to main
3. Push origin
4. Wait for Workers deployment success
5. Open the site in a private/incognito window
