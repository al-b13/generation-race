# Generation Race V7 — Cloudflare Workers

Production structure:

- `wrangler.jsonc` = Cloudflare Workers configuration
- `public/` = the ONLY folder published as static website assets
- `public/assets/images/` = replaceable image library

Cloudflare deploy command:
`npx wrangler deploy`

To change a photo:
replace the corresponding WEBP inside `public/assets/images/`, then Commit + Push.
