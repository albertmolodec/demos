import { run } from "./run.mjs";

const projects = ["vanilla-auth-form", "usa-map"];

async function build(project) {
	const cwd = `public/projects/${project}`;
	await run("npm install", cwd);
	await run("npm run build", cwd);
}

async function main() {
	try {
		const promises = projects.map(build);
		await Promise.all(promises);
	} catch (err) {
		console.error(err);
	}
}
main();
