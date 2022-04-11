<script>
  import { generateRandomId } from "../utils/generateRandomId";
  import { slugify } from "../utils/slugify";
  import { throwError } from "../utils/throwError";

  export let label = throwError("Label must be provided");
  export let value = "";
  export let name = slugify(label);
  export let id = generateRandomId(label);
</script>

<div class="flex flex-col gap-2">
  <label for={id} class="text-sm text-gray-700 font-semibold">
    {label}
  </label>
  <input type="text" {id} bind:value {name} />
</div>
