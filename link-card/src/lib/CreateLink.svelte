<svelte:options tag="create-link" />
<script lang="ts">
  import axios from 'axios';
  let title = ""
  let url = ""

  async function create() {
    axios.post("http://localhost:3000/links",{title: title, url: url})
  }

</script>

<div>
    <input class="link-card-title" bind:value={title} />
    <input class="link-card-url" bind:value={url} />
    <button on:click={create}>create</button>
</div>
