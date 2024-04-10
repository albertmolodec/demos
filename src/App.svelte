<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import "fluent-svelte/theme.css";

  import Home from "./pages/Home.svelte";
  import Project from "./pages/Project.svelte";
  import NotFound from "./pages/NotFound.svelte";
</script>

<Router>
  <div class="page">
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/:name" let:params>
      <Project name={params.name} />
    </Route>
    <Route component={NotFound} />
  </div>
</Router>

<style>
  :global(html),
  :global(body) {
    height: 100%;
  }

  .page {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
</style>
