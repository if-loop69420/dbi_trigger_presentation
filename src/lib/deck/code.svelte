<script lang="ts">
	export let id: string | null = null
	export let lines: string | boolean | null = null
	export let noescape = false
</script>

<pre data-id={id || null}>
  <code
    data-trim
    data-line-numbers={lines || null}
    data-noescape={noescape || null}
    style="max-width: 100%; max-height: 100%; font-size: 0.7em;"
  >
    <slot />
  </code>
</pre>

