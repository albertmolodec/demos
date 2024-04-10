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
        <div class="mode-switcher-wrapper">
          <ModeSwitcher bind:mode />
        </div>
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
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 2rem;
  }

  .playground {
    display: flex;
    flex-grow: 1;
  }

  .editor {
    flex: 1;
    position: relative;
  }

  .view {
    flex: 2;
  }

  .heading {
    padding-right: 140px;
    margin-bottom: 60px;
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
  }
</style>
