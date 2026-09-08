# Generation Race V7.1

Frontend correction on top of the approved Workers V7 structure

Changes:
- Home image slots are now explicitly connected to the modular WEBP library
- Thinking and service images are connected without changing layout geometry
- Terminal full stops removed from visible website copy where they were not required
- Cloudflare Workers configuration unchanged
- `public/` remains the only deployed directory

Deploy workflow:
1. Replace the contents of the local repository with this version
2. GitHub Desktop: Commit to main
3. Push origin
4. Cloudflare Workers deploys automatically
