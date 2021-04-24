<script lang="ts">
  import { onMount } from 'svelte'
  import { editor } from 'monaco-editor'
  import { getWorker } from '../lib/monaco'

  window.MonacoEnvironment = { getWorker }

  onMount(() => {
    editor.create(document.getElementById('monaco'), {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
      language: 'typescript',
    })
  })
</script>

<div id="monaco" />

<style>
  #monaco {
    height: 100%;
  }
</style>
