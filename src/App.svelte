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
  :global(html),
  :global(body) {
    height: 100%;
  }

  :global(body) {
    max-width: 1280px;
    margin: 0 auto;
  }

  :global(#app) {
    height: 100%;
    padding: 40px;
  }

  .page {
    font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100%;
  }
</style>
