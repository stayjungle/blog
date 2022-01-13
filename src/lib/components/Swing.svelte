<script lang="ts">
  export let duration: number
  export let content: string
</script>

<span style={`--duration: ${duration}s`}>
  {content}
</span>

<style>
  span {
    display: inline-block;
    animation-name: swing;
    animation-duration: var(--duration);
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @media (prefers-reduced-motion) {
    span {
      animation: none;
    }
  }

  @keyframes swing {
    from {
      transform: rotate(-3deg);
    }

    to {
      transform: rotate(3deg);
    }
  }
</style>
