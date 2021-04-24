<script lang="ts">
  import NotFound from './NotFound.svelte'

  import { projects } from '../lib/projects'
  import type { names } from '../lib/projects'

  export let name: names

  const project = projects.find((project) => project.name === name)
</script>

{#if project}
  <iframe
    src="/projects/{name}/{project.isBundled ? 'dist/' : ''}index.html"
    frameborder="0"
    class="project-iframe"
    title={project.label}
  />
{:else}
  <NotFound />
{/if}

<style>
  .project-iframe {
    width: 100%;
    height: 100%;
  }
</style>
