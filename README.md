# Personal Portfolio (GitHub Pages)

This is a simple, responsive portfolio website.

## Edit your details
Update the following in `index.html`:
- Your name
- Bio/About text
- Skills
- Project titles, descriptions, and links
- Contact email, LinkedIn, and GitHub links

## Run locally
You can open `index.html` directly in the browser, or use VS Code Live Server.

## Publish to GitHub Pages
1. Create a new repository on GitHub (for example: `portfolio`).
2. In this project folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**.

Your site will be available at:

- `https://<your-username>.github.io/<repo-name>/`

If your repo is named `<your-username>.github.io`, then URL becomes:
- `https://<your-username>.github.io/`
