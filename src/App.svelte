<script lang="ts">
  import { Router, Route } from 'svelte-routing'

  import Home from './pages/Home.svelte'
  import Project from './pages/Project.svelte'
</script>

<div class="page">
  <Router>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/project/:name" let:params>
      <Project name={params.name} />
    </Route>
  </Router>
</div>

<style>
  .page {
    font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100%;
  }
</style>
