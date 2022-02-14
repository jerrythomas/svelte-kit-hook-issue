export async function handle({ event, resolve }) {
	console.log('handle', event.url.pathname);

	const response = await resolve(event);
	return response;
}
