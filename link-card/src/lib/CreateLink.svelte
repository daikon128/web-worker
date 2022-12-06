<svelte:options tag="create-link" />
<script lang="ts">
  import axios from 'axios';
  class LinkCard {
    constructor(title: string, url: string) {
      this.title = title;
      this.url = url;
    }
  }

  const linkCard = new LinkCard("", "")

  async function create() {
    axios.post("http://localhost:3000",{title: linkCard.title, url: linkCard.url})
  }

</script>

<div>
    <input class="link-card-title" value={linkCard.title} />
    <input class="link-card-url" value={linkCard.url} />
    <button on:click={create}>create</button>
</div>
