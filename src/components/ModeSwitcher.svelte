<script lang="ts">
  import { RadioButton } from "fluent-svelte";

  export let mode: "readme" | "code";
</script>

<ul class="mode-switcher">
  <li>
    <RadioButton bind:group={mode} value="code">Code</RadioButton>
  </li>
  <li>
    <RadioButton bind:group={mode} value="readme">Readme</RadioButton>
  </li>
</ul>

<style>
  .mode-switcher {
    background-color: white;
    border: 1px solid rgb(229, 231, 235);
    border-radius: 8px;
    width: 120px;

    & label {
      width: 100%;
      padding: 8px;
    }
  }
</style>
