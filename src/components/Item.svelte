<script lang="ts">
  import { link } from "svelte-routing";
  import type { Project } from "../lib/projects";

  export let project: Project;

  const { name, accentColor, year, label } = project;
</script>

<article class="item" style="--color-accent: {accentColor}">
  <div class="image-wrapper">
    <a class="link" href="/{name}">
      <img
        src="/projects/{name}/preview.png"
        alt="Preview for {label}"
        class="image"
      />
    </a>
  </div>
  <div class="caption">
    <a class="link" href="/{name}" use:link>
      <h2 class="title">{label}</h2>
    </a>
    {#if year}
      <div class="subtitle">{year}</div>
    {/if}
    <a
      href="https://github.com/kitcat-dev/demos/tree/source/public/projects/{name}"
      target="_blank"
    >
      <svg
        height="24"
        class="github-icon"
        viewBox="0 0 16 16"
        version="1.1"
        width="24"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    </a>
  </div>
</article>

<style>
  .item {
    --color-border: #e6e6e6;
    --size-border: 6px;
    --delay-animation: 75ms;

    /* Default value */
    --color-accent: var(--color-border);

    --color-github: #d1d5da;
    --color-github-hover: #6a737d;
  }

  .image-wrapper {
    position: relative;
    background-color: var(--color-accent);
  }

  .image-wrapper::before,
  .image-wrapper::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
  }

  .image-wrapper::before,
  .image-wrapper::after,
  .image {
    transition-property: transform;
    transition-timing-function: ease;
    transition-duration: var(--delay-animation);
  }

  .image-wrapper::before {
    top: 0;
    left: 0;

    border-top: var(--size-border) solid transparent;
    border-bottom: var(--size-border) solid transparent;
    border-right: var(--size-border) solid var(--color-accent);

    transform-origin: left center;
    transform: translateY(calc(var(--size-border) * -1)) scale(0);
  }

  .image-wrapper::after {
    bottom: 0;
    right: 0;

    border-left: var(--size-border) solid transparent;
    border-right: var(--size-border) solid transparent;
    border-top: var(--size-border) solid var(--color-accent);

    transform-origin: center bottom;
    transform: translateX(var(--size-border)) scale(0);
  }

  .image-wrapper:hover .image {
    transform: translate(var(--size-border), calc(var(--size-border) * -1));
    transition-delay: var(--delay-animation);

    border-bottom: none;
    border-left: none;
  }

  .image-wrapper:hover::before {
    transform: translateY(calc(var(--size-border) * -1)) scale(1);
    transition-delay: var(--delay-animation);
  }

  .image-wrapper:hover::after {
    transform: translateX(var(--size-border)) scale(1);
    transition-delay: var(--delay-animation);
  }

  .image {
    aspect-ratio: 16 / 9;
    width: 100%;

    border: 1px solid var(--color-border);
  }

  .link {
    text-decoration: none;
    color: inherit;
  }

  .caption {
    padding: 8px 48px 8px 8px;
    position: relative;

    border: 1px solid var(--color-border);
    border-top: none;
  }

  .github-icon {
    position: absolute;

    top: 18px;
    right: 18px;

    color: var(--color-github);
    fill: currentColor;
    transition: calc(var(--delay-animation) * 2) ease color;
  }

  .github-icon:hover {
    color: var(--color-github-hover);
  }

  .title {
    margin: 0;
    overflow: hidden;

    color: black;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title:hover {
    text-decoration: underline;
  }

  .subtitle {
    margin-top: 2px;

    font-size: 12px;
    color: grey;
  }
</style>
