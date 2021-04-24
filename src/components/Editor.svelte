<script lang="ts">
  import { onMount } from 'svelte'

  import * as monaco from 'monaco-editor'
  import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
  import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
  import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
  import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
  import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

  window.MonacoEnvironment = {
    getWorker(_workerId: string, label: string) {
      if (label === 'json') {
        return new jsonWorker()
      }
      if (label === 'css' || label === 'scss' || label === 'less') {
        return new cssWorker()
      }
      if (label === 'html' || label === 'handlebars' || label === 'razor') {
        return new htmlWorker()
      }
      if (label === 'typescript' || label === 'javascript') {
        return new tsWorker()
      }
      return new editorWorker()
    },
  }

  onMount(() => {
    monaco.editor.create(document.getElementById('monaco'), {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join(
        '\n'
      ),
      language: 'javascript',
    })
  })
</script>

<div id="monaco" />

<style>
  #monaco {
    height: 100%;
  }
</style>
