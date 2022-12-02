<svelte:options tag="create-link" />
<script lang="ts">
  class LinkCard {
    title: string
    url: string

    constructor(title: string, url: string) {
      this.title = title;
      this.url = url;
    }
  }

  const linkCard = new LinkCard("", "")

</script>

<div>
  <form>
    <input class="link-card-title" value={linkCard.title} />
    <input class="link-card-url" value={linkCard.url} />
  </form>
</div>
