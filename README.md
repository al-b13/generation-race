# Generation Race V11 — Full Visual Pass

This is the version to deploy after V9

Why this build is different
- CSS and JS filenames are versioned (`styles-v11.css`, `script-v11.js`) so the deployed site cannot keep referencing the previous frontend files
- Multiple HTML pages are modified, so Cloudflare must detect a real new deploy
- New high-resolution visual assets are included for Studio, What We Do and Thinking
- Home Studio and Thinking previews are upgraded too
- Studio, What We Do and Thinking receive a complete visual and interaction pass
- The V8 motion system remains active
- Cloudflare Workers configuration stays unchanged

Expected Cloudflare log
You should see several new or modified assets, including:
- /css/styles-v11.css
- /js/script-v11.js
- /assets/images/studio/studio-v11.webp
- /assets/images/services/what-v11.webp
- /assets/images/thinking/thinking-v11.webp
- updated HTML pages

If the log only says one file changed, do not continue: the repository contents were not replaced correctly
