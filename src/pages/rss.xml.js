import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => {
			const route =
				post.data.routeStart || post.data.routeEnd
					? `${post.data.routeStart ?? ''}${post.data.routeStart && post.data.routeEnd ? ' → ' : ''}${post.data.routeEnd ?? ''}`
					: 'Route pending';
			const title = post.data.title ?? `${post.data.day ? `Day ${post.data.day}` : 'Update'} · ${route}`;

			return {
				...post.data,
				title,
				description: post.data.description ?? `Update from ${route}`,
				link: `/blog/${post.id}/`,
			};
		}),
	});
}
