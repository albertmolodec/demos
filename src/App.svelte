<script lang="ts">
  import { Router, Route } from 'svelte-routing'

  import Home from './pages/Home.svelte'
  import Project from './pages/Project.svelte'
  import NotFound from './pages/NotFound.svelte'
</script>

<div class="page">
  <Router>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/:name" let:params>
      <Project name={params.name} />
    </Route>
    <Route component={NotFound} />
  </Router>
</div>

<style>
  .page {
    font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100%;
  }
</style>
