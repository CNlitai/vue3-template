export async function getRouteComponent(name: string, componentPromise: Promise<typeof import('*.vue')>) {
	const comp = await componentPromise
	Object.assign(comp.default, {
		name,
	})
	return comp
}
