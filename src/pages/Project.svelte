<script lang="ts">
  import { Circle2 as Spinner } from 'svelte-loading-spinners'
  import NotFound from './NotFound.svelte'
  import { projects } from '../lib/projects'
  import type { Name } from '../lib/projects'

  export let name: Name

  const project = projects.find((project) => project.name === name)
</script>

{#if project}
  <div class="project-page">
    <h1>{project.label}</h1>
    <div class="playground">
      <div class="editor">
        {#await import('../components/Editor.svelte')}
          <Spinner />
        {:then { default: Editor }}
          <svelte:component this={Editor} {project} />
        {:catch error}
          <p>Couldn't load Editor component. {error.message}</p>
        {/await}
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
  }
  
  .view {
    flex: 2;
  }

  .project-iframe {
    width: 100%;
    height: 100%;
  }
</style>
