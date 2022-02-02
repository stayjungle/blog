<script lang="ts">
  import { onMount } from 'svelte'
  import { createEventDispatcher } from 'svelte'

  const N_DEVELOPERS = 50
  const developerChars = [
    '🧑‍💻',
    '🧑🏻‍💻',
    '🧑🏼‍💻',
    '🧑🏽‍💻',
    '🧑🏾‍💻',
    '🧑🏿‍💻',
    '👨‍💻',
    '👨🏻‍💻',
    '👨🏼‍💻',
    '👨🏽‍💻',
    '👨🏾‍💻',
    '👨🏿‍💻',
    '👩‍💻',
    '👩🏻‍💻',
    '👩🏼‍💻',
    '👩🏽‍💻',
    '👩🏾‍💻',
    '👩🏿‍💻',
  ]

  let width: number
  let height: number

  let inited = false
  let ufo = { x: 0, y: 0, r: 0, gone: false }
  let developers = Array.from({ length: N_DEVELOPERS }).map(() => ({
    x: 0,
    y: 0,
    c: developerChars[(developerChars.length * Math.random()) | 0],
    abducted: false,
  }))
  let nextAbduction = 0

  const dispatch = createEventDispatcher()

  onMount(() => {
    init()
    const timer = setInterval(update, 200)
    return () => clearInterval(timer)
  })

  function init() {
    ufo = { ...ufo, x: 0.5 * width, y: 0.2 * height }
    developers = developers.map(d => {
      return { ...d, x: Math.random() * width, y: (Math.random() * 0.2 + 0.7) * height }
    })
    inited = true
  }

  function update() {
    // 1명 남기고 다 납치했으면 사라지기
    if (nextAbduction >= developers.length - 1) {
      ufo.gone = true
      dispatch('finished')
      return
    }

    // 움직임
    ufo = {
      ...ufo,
      x: (Math.random() * 0.4 + 0.3) * width,
      y: Math.random() * height * 0.2,
      r: Math.random() * 30 - 15,
    }

    // 납치
    if (Math.random() > 0.5) {
      developers = developers.map((d, i) => (i === nextAbduction ? { ...d, abducted: true } : d))
      nextAbduction += 1
    }
  }
</script>

<div
  class="root fun"
  class:inited
  role="presentation"
  bind:clientWidth={width}
  bind:clientHeight={height}
>
  <div
    class="ufo"
    class:gone={ufo.gone}
    style:--x={`${ufo.x}px`}
    style:--y={`${ufo.y}px`}
    style:--r={`${ufo.r}deg`}
  >
    🛸
  </div>
  <div class="developers">
    {#each developers as d, i}
      <div
        class="developer"
        class:abducted={d.abducted}
        style:--x={`${d.abducted ? ufo.x : d.x}px`}
        style:--y={`${d.abducted ? ufo.y : d.y}px`}
      >
        {d.c}
      </div>
    {/each}
  </div>
</div>

<style>
  .root {
    position: relative;
    aspect-ratio: 2 / 1;
    background-color: #e0e0e0;
    opacity: 0;
    transition: opacity 1s;
    overflow: hidden;
    margin: 2rem 0;

    background: linear-gradient(
      180deg,
      rgba(18, 92, 181, 1) 0%,
      rgba(30, 109, 196, 1) 17%,
      rgba(251, 166, 73, 1) 56%,
      rgba(57, 150, 59, 1) 64%,
      rgba(43, 120, 68, 1) 100%
    );
  }

  .root.root.inited {
    opacity: 1;
  }

  .ufo {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 3em;
    transform: translate(var(--x), var(--y)) rotate(var(--r)) scale(1);
    transition: transform 1s;
  }

  .ufo.gone {
    transform: translate(var(--x), var(--y)) rotate(var(--r)) scale(0);
  }

  .developer {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(var(--x), var(--y)) rotate(0deg) scale(2);
  }

  .developer.abducted {
    transform: translate(var(--x), var(--y)) rotate(720deg) scale(1);
    opacity: 0;
    transition: opacity 5s, transform 3s;
  }
</style>
