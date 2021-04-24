<script lang="ts">
  import { projects } from '../lib/projects'
  import Item from '../components/Item.svelte'
</script>

<h1>My demo projects</h1>
<div class="grid">
  {#each projects as project}
    <Item name={project.name} />
  {/each}
</div>

<style>
  h1 {
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1.2rem;
  }
</style>
