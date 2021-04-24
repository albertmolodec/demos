<script lang="ts">
  import { projects } from '../lib/projects'
  import type { names } from '../lib/projects'

  export let name: names

  const { isBundled, label } = projects.find((project) => project.name === name)
</script>

<iframe
  src="/projects/{name}/{isBundled ? 'dist/' : ''}index.html"
  frameborder="0"
  class="project-iframe"
  title={label}
/>

<style>
  .project-iframe {
    width: 100%;
    height: 100%;
  }
</style>
