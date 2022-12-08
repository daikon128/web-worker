<svelte:options tag="link-cards" />
<script lang="ts">

  import LinkCard from "./LinkCard.svelte";
  import {LinkCards as LinkCardsModel, LinkCard as LinkCardModel} from "../model/LinkCards";
  import {onMount} from "svelte";
  let linkCards: LinkCardModel[] = []
  onMount(async () => {
    linkCards = [
      new LinkCardModel("title", "http://example.com")
    ]
  })


</script>

<div>
  {#each linkCards as card}
    <LinkCard {...card}></LinkCard>
  {:else}
    <p>loading now...</p>
  {/each}
</div>