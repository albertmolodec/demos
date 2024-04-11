<script lang="ts">
  import { Circle2 as Spinner } from "svelte-loading-spinners";
  import SvelteMarkdown from "svelte-markdown";
  import NotFound from "./NotFound.svelte";
  import { projects } from "../lib/projects";
  import type { Name } from "../lib/projects";
  import { onMount } from "svelte";
  import ModeSwitcher from "../components/ModeSwitcher.svelte";

  export let name: Name;

  const project = projects.find((project) => project.name === name);

  let mode: "readme" | "code" = project.withReadme ? "readme" : "code";
  let readmeContent: string = "";
  onMount(async () => {
    readmeContent = await (
      await fetch(`/projects/${project.name}/README.md`)
    ).text();
    readmeContent = readmeContent.replace(/^#+\s*.+\n\n/, "");
  });
</script>

{#if project}
  <div class="project-page">
    <div class="playground">
      <div class="editor">
        <h1 class="heading">{project.label}</h1>
        {#if project.withReadme}
          <div class="mode-switcher-wrapper">
            <ModeSwitcher bind:mode />
          </div>
        {/if}
        {#if mode === "code"}
          {#await import("../components/Editor.svelte")}
            <Spinner />
          {:then { default: Editor }}
            <svelte:component this={Editor} {project} />
          {:catch error}
            <p>Couldn't load Editor component. {error.message}</p>
          {/await}
        {/if}
        {#if mode === "readme"}
          <SvelteMarkdown source={readmeContent} />
        {/if}
      </div>

      <div class="view">
        <iframe
          src="/projects/{name}/{project.isBundled ? 'dist/' : ''}index.html"
          frameborder="0"
          class="project-iframe"
          title={project.label}
        />
      </div>
    </div>
  </div>
{:else}
  <NotFound />
{/if}

<style>
  .project-page {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 2rem;
  }

  .playground {
    display: flex;
    flex-grow: 1;
    gap: 10px;

    flex-direction: row;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .editor {
    flex-grow: 1;
    flex-basis: 0px;
    flex-shrink: 0;
    position: relative;

    padding: 20px;
    border: 1px solid rgb(224, 230, 237);
    border-radius: 2px;
  }

  .view {
    flex-grow: 2;
    flex-basis: 0px;
    flex-shrink: 0;

    padding: 20px;
    border: 1px solid rgb(224, 230, 237);
    border-radius: 2px;
  }

  .heading {
    padding-right: 140px;
  }

  .mode-switcher-wrapper {
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 10px;
  }

  .project-iframe {
    width: 100%;
    height: 100%;
    min-height: 700px;
  }
</style>
