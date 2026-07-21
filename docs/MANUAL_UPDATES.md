# Manual Blog Updates

Manual updates are useful if the CMS is unavailable, or if you want to edit directly in GitHub.

## Add a new post

Create a new Markdown file in:

```text
src/content/blog/
```

Example:

```text
src/content/blog/day-006.md
```

Use this structure:

```md
---
pubDate: 2026-07-21
day: 6
routeStart: 'Start place'
routeEnd: 'End place'
distanceKm: 82
elevationM: 1300
photos:
  - src: '/images/posts/day6/photo-1.jpg'
    caption: 'Short caption.'
---

Write the update text here.
```

For multi-day posts:

```yaml
day: 3
dayEnd: 5
```

This renders as:

```text
Days 3–5: Start place → End place
```

## Add photos manually

Put photos in:

```text
public/images/posts/day6/
```

Then reference them from the post:

```yaml
photos:
  - src: '/images/posts/day6/photo-name.jpg'
    caption: 'Caption shown under the image.'
```

The path must start with `/images/...`, not `public/images/...`.

## Update trip totals

The homepage totals are calculated automatically from all posts:

- `distanceKm`
- `elevationM`

If either is unknown, use `0` or leave it out.

## Manual update from GitHub web/mobile

1. Open the repo on GitHub.
2. Add/upload photos under `public/images/posts/...`.
3. Add a new Markdown file under `src/content/blog/`.
4. Commit the changes.
5. Netlify will rebuild the site automatically.

This works, but editing Markdown and photo paths on a phone can be fiddly. The `/admin` editor is intended to be easier.
