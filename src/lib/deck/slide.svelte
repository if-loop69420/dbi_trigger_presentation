<script lang="ts">
	export let id: string | null = null
	export let animate = false
	export let restart = false
	export let background: string = "https://media.itpro.co.uk/image/upload/v1570817004/itpro/2019/01/database.jpg"
	export let backgroundOpacity: number = 0.5
</script>

<section
	data-auto-animate-id={id}
	data-auto-animate={animate || null}
	data-auto-animate-restart={restart || null}
	data-background-image={background}
	data-background-opacity={backgroundOpacity}
>
	<slot />
</section>

