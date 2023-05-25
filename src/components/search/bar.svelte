<script lang="ts">
	import { onMount } from 'svelte';
	import type { Command } from '../../schema/command';
	import fuzzy from 'fuzzy';
	import mousetrap from 'mousetrap';
	import Modal from '../modal.svelte';
	import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
	import { allCommands } from '../../stores/commandStore';

	let showModal = false;
	$: searchTerm = '';

	var options: fuzzy.FilterOptions<Command> = {
		pre: '<mark>',
		post: '</mark>',
		extract: function (el: Command) {
			return el.description;
		}
	};
	onMount(() => {
		mousetrap.bind('/', (e) => {
			e.preventDefault();
			showModal = true;
		});
	});

	$: filteredCommands = fuzzy.filter(searchTerm, $allCommands, options).map(function (el) {
		return { string: el.string, command: el.original };
	});
</script>

<button class="search-button" on:click={() => (showModal = true)}>
	<FaSearch />Search...
</button>
<Modal bind:showModal>
	<!-- svelte-ignore a11y-autofocus -->
	<input
		autofocus
		class="search-input"
		placeholder="Search for commands"
		bind:value={searchTerm}
		type="text"
	/>
	<div class="results">
		{#if filteredCommands.length > 0}
			{#each filteredCommands as command}
				<a href={`/${command.command.cmd}`}>
					<b>{command.command.cmd}</b>
					{@html command.string}
				</a>
			{/each}
		{:else}
			No Results...
		{/if}
	</div>
</Modal>

<style>
	.search-button {
        height: 100%;
		width: 100%;
		cursor: pointer;
		background-color: white;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		border: 1px solid #ebebeb;
		border-radius: 4px;
		color: grey;
		padding: 0.5rem;
	}

	:global(.search-button svg) {
		width: 0.75rem !important;
		height: 0.75rem !important;
	}

	.search-input {
		height: 4rem;
		font-size: 1rem;
		padding: 1rem;
		border: 0;
		border-bottom: 2px solid #ebebeb;
		outline: none;
	}

	.results {
		flex-grow: 1;
		width: 100%;
		height: 100%;
		max-height: 100%;
		overflow-y: auto;
		background-color: white;
		display: flex;
		flex-direction: column;
	}

	.results a {
		outline: none;
		text-decoration: none;
		color: var(--bg-color);
		padding: 1rem;
		border-bottom: 1px solid #ebebeb;
	}

	.results a:hover,
	a:focus {
		background-color: var(--foreground);
	}
</style>
