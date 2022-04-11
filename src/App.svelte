<script>
  import AddableInputGroup from "./lib/components/AddableInputGroup.svelte";
  import { formatNumber } from "./lib/utils/formatNumber";
  import { range } from "./lib/utils/range";

  let choices = [""];
  let results = null;

  const pickAndSort = (choices) => {
    const picked = range(0, 1_000_000).map(() => {
      const index = Math.floor(Math.random() * choices.length);
      return choices[index];
    });

    const occurences = {};
    for (const choice of picked) {
      occurences[choice] = (occurences[choice] || 0) + 1;
    }

    const sorted = Object.entries(occurences).sort(([, a], [, b]) => b - a);
    return sorted;
  };

  const onSubmit = () => {
    choices = choices.map((c) => c.trim()).filter((choice) => !!choice);
    if (choices.length === 0) {
      choices = [""];
      alert("Please enter at least one choice");
      return;
    }
    results = pickAndSort(choices);
  };
</script>

<svelte:head>
  <title>A Million Coin Flips</title>
  <meta
    name="description"
    content="Feeling indecisive? Input your possible decision and we'll flip a million coins to let you decide"
  />
</svelte:head>

<div class="container max-w-screen-md py-6">
  <h1 class="font-bold text-3xl mb-6">A Million Coin Flips</h1>
  <form on:submit|preventDefault={onSubmit}>
    <fieldset>
      <legend class="font-bold mb-1">Decisions</legend>
      <AddableInputGroup labelPrefix="Decision" bind:values={choices} />
    </fieldset>
    <button type="submit" class="btn btn-primary mt-6">
      Flip me a million coins
    </button>
  </form>
  {#if results}
    <h2 class="font-bold text-xl mt-6 mb-4">Results</h2>
    <ol class="list-decimal list-inside">
      {#each results as [choice, apperances]}
        <li>{choice} (Appeared {formatNumber(apperances)} times)</li>
      {/each}
    </ol>
  {/if}
</div>
