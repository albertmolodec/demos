<script lang="ts">
  import { Circle2 as Spinner } from 'svelte-loading-spinners'

  import NotFound from './NotFound.svelte'

  import { projects } from '../lib/projects'
  import type { names } from '../lib/projects'

  export let name: names

  const project = projects.find((project) => project.name === name)
</script>

{#if project}
  <div class="project-page">
    <h1>{project.label}</h1>
    <div class="playground">
      <div class="container">
        {#await import('../components/Editor.svelte')}
          <Spinner />
        {:then { default: Editor }}
          <svelte:component this={Editor} />
        {:catch error}
          <p>Something went wrong: {error.message}</p>
        {/await}
      </div>

      <div class="container">
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

  .container {
    flex: 1 0 50%;
  }

  .project-iframe {
    width: 100%;
    height: 100%;
  }
</style>
