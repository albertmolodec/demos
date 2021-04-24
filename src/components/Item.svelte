<script lang="ts">
  import { link } from 'svelte-routing'
  import { projects } from '../lib/projects'
  import type { names } from '../lib/projects'

  export let name: names

  const { accentColor, year, label } = projects.find((project) => project.name === name)
</script>

<article class="item" style="--color-accent: {accentColor}">
  <div class="item__image-wrapper">
    <a class="item__link" href="/project/{name}">
      <img
        src="/projects/{name}/preview.png"
        alt="Preview for {label}"
        class="item__image"
      />
    </a>
  </div>
  <div class="item__caption">
    <a class="item__link" href="/project/{name}" use:link>
      <h2 class="item__title">{label}</h2>
    </a>
    {#if year}
      <div class="item__subtitle">{year}</div>
    {/if}
    <a
      href="https://github.com/albertmolodec/demos/tree/source/public/projects/{name}"
      target="_blank"
    >
      <svg
        height="24"
        class="item__github-icon"
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

    --color-accent: var(--color-border);

    --color-github: #d1d5da;
    --color-github-hover: #6a737d;
  }

  .item__image-wrapper {
    position: relative;
    background-color: var(--color-accent);
  }

  .item__image-wrapper::before,
  .item__image-wrapper::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
  }

  .item__image-wrapper::before,
  .item__image-wrapper::after,
  .item__image {
    transition-property: transform;
    transition-timing-function: ease;
    transition-duration: var(--delay-animation);
  }

  .item__image-wrapper::before {
    top: 0;
    left: 0;

    border-top: var(--size-border) solid transparent;
    border-bottom: var(--size-border) solid transparent;
    border-right: var(--size-border) solid var(--color-accent);

    transform-origin: left center;
    transform: translateY(calc(var(--size-border) * -1)) scale(0);
  }

  .item__image-wrapper::after {
    bottom: 0;
    right: 0;

    border-left: var(--size-border) solid transparent;
    border-right: var(--size-border) solid transparent;
    border-top: var(--size-border) solid var(--color-accent);

    transform-origin: center bottom;
    transform: translateX(var(--size-border)) scale(0);
  }

  .item__image-wrapper:hover .item__image {
    transform: translate(var(--size-border), calc(var(--size-border) * -1));
    transition-delay: var(--delay-animation);

    border-bottom: none;
    border-left: none;
  }

  .item__image-wrapper:hover::before {
    transform: translateY(calc(var(--size-border) * -1)) scale(1);
    transition-delay: var(--delay-animation);
  }

  .item__image-wrapper:hover::after {
    transform: translateX(var(--size-border)) scale(1);
    transition-delay: var(--delay-animation);
  }

  .item__image {
    aspect-ratio: 16 / 9;
    object-fit: contain;
    width: 100%;

    border: 1px solid var(--color-border);
  }

  .item__link {
    text-decoration: none;
    color: inherit;
  }

  .item__caption {
    padding: 8px 48px 8px 8px;
    position: relative;

    border: 1px solid var(--color-border);
    border-top: none;
  }

  .item__github-icon {
    position: absolute;

    top: 18px;
    right: 18px;

    color: var(--color-github);
    fill: currentColor;
    transition: calc(var(--delay-animation) * 2) ease color;
  }

  .item__github-icon:hover {
    color: var(--color-github-hover);
  }

  .item__title {
    margin: 0;
    overflow: hidden;

    color: black;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .item__title:hover {
    text-decoration: underline;
  }

  .item__subtitle {
    margin-top: 2px;

    font-size: 12px;
    color: grey;
  }
</style>
