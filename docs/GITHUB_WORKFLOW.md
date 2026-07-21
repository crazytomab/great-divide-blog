# GitHub Repo Management

This repo is linked to:

```text
https://github.com/crazytomab/great-divide-blog
```

## Basic local workflow

Check what has changed:

```bash
git status
```

Save changes locally:

```bash
git add .
git commit -m "Describe the change"
```

Push changes to GitHub:

```bash
git push
```

Pull latest changes from GitHub:

```bash
git pull
```

## Important branch detail

The repo currently uses the `master` branch.

The Decap CMS config also writes to `master`:

```yaml
backend:
  name: git-gateway
  branch: master
```

If the GitHub repo is later changed to `main`, update `public/admin/config.yml` to match.

## Before publishing changes

Run:

```bash
npm run build
```

If the build passes locally, commit and push.

Netlify will run the same build after every push.

## Git author identity

If commits show the wrong name or email, set them once:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"
```

Use the email address GitHub expects if you want commits to link to your GitHub account.
