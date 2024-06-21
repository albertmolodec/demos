import { run } from "./run.mjs";

const projects = ["vanilla-auth-form", "usa-map", "element-widget", "chat"];

async function build(project) {
  const cwd = `public/projects/${project}`;
  await run("pnpm run build", cwd);
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
