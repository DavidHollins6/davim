<script lang="ts">
	import Bar from '../../components/search/bar.svelte';
	import Shortcut from '../../components/shortcut/shortcut.svelte';
	import DefaultPill from '../../components/defaultPill.svelte';
	import { command } from '../../stores/commandStore';
</script>

<div class="search">
	<Bar />
</div>
<div class="header-container">
	{#if $command.default}
		<DefaultPill />
	{/if}

	<Shortcut />
	<p class="description">{$command.description}</p>
</div>

<style>
	.header-container {
		z-index: 5;
		box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);
		position: relative;
		display: flex;
		gap: 24px;
		align-items: center;
		padding: 60px;
		background-color: var(--bg-color);
		border-radius: 4px;
	}

	.description {
		margin: 0;
	}

	.search {
		position: absolute;
		top: 8px;
		right: 8px;
	}
</style>
