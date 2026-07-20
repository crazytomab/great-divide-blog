import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().optional(),
			description: z.string().optional(),
			pubDate: z.coerce.date().optional(),
			heroImage: image().optional(),

			day: z.number().int().positive().optional(),
			routeStart: z.string().optional(),
			routeEnd: z.string().optional(),
			distanceKm: z.number().int().positive().optional(),
			elevationM: z.number().int().positive().optional(),
			photos: z
				.array(
					z.union([
						z.string(),
						z.object({
							src: z.string(),
							caption: z.string().optional(),
						}),
					]),
				)
				.default([]),
		}),
});

export const collections = { blog };
