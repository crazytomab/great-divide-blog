# Netlify Hosting and Admin Updates

The intended live setup is:

```text
GitHub repo → Netlify build → live static site
```

The `/admin` page uses Decap CMS. It creates Markdown posts and uploads images by committing files back to GitHub.

## One-time Netlify setup

1. Create or log in to Netlify.
2. Add a new site from Git.
3. Connect this GitHub repo:

```text
https://github.com/crazytomab/great-divide-blog
```

4. Use these build settings:

```text
Build command: npm run build
Publish directory: dist
```

These are also stored in `netlify.toml`.

## Enable the admin editor

In the Netlify dashboard for the site:

1. Enable Netlify Identity.
2. Set registration to invite-only.
3. Enable Git Gateway.
4. Invite Beth/Tom editor emails.

Once configured, open:

```text
https://your-domain.com/admin
```

## Creating a post through `/admin`

1. Log in at `/admin`.
2. Choose “Trip updates”.
3. Create a new update.
4. Fill in:
   - publish date
   - start day
   - optional end day
   - route start/end
   - distance
   - elevation
   - update text
   - photos and captions
5. Publish/save the entry.

Decap CMS will commit the post and images to GitHub. Netlify will then rebuild and publish the updated site.

## Where CMS uploads go

Uploaded images are saved to:

```text
public/images/posts/uploads/
```

Published image paths use:

```text
/images/posts/uploads/...
```

This shared upload folder is deliberate: it is simpler from a phone than creating a new folder for each day.

## Local admin testing

Run:

```bash
npm run dev
```

Open:

```text
http://localhost:4321/admin/
```

You can check that the CMS interface loads and that the form fields are correct.

Full login, save, upload, and publish testing requires the deployed Netlify site with Identity and Git Gateway enabled.

## Custom domain

After the Netlify site is working:

1. Add the domain in Netlify’s domain settings.
2. Follow Netlify’s DNS instructions.
3. Wait for HTTPS/SSL to be issued.

The site should then be available at the custom domain, and `/admin` should work there too.
