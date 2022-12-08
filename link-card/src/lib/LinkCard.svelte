<svelte:options tag="link-card" />
<script lang="ts">
  export let url;
  export let title;
</script>

<div>
  <a href={url}>{title}</a>
</div>
