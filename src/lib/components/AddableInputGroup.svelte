<script>
  import { insertAtIndex } from "../utils/insertAtIndex";
  import { removeAtIndex } from "../utils/removeAtIndex";

  import TextInput from "./TextInput.svelte";

  export let labelPrefix = "Input";
  export let values = [""];

  if (!values.length) {
    values = [""];
  }
</script>

<div class="flex flex-col gap-4">
  {#each values as value, i}
    <div class="flex items-end gap-4">
      <TextInput label="{labelPrefix} {i + 1}" bind:value />
      {#if i !== 0}
        <button
          type="button"
          on:click={() => (values = removeAtIndex(values, i))}
          class="btn btn-danger">-</button
        >
      {/if}
      <button
        type="button"
        on:click={() => (values = insertAtIndex(values, i + 1, ""))}
        class="btn btn-primary"
      >
        +
      </button>
    </div>
  {/each}
</div>
