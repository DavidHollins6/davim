<script>
	import '@fontsource/fira-code';
	import { onMount } from 'svelte';
	import { leaderKey, hasLeaderBeenSelected } from '../stores/leaderStore';

	onMount(() => {
		const localStorageLeader = localStorage.getItem('leader-key');
		if (localStorageLeader !== null) {
			leaderKey.set(localStorageLeader);
			hasLeaderBeenSelected.set(true);
		}
	});
</script>

<div class="container">
	<div class="content">
		<slot />
	</div>
</div>

<style>
	:root {
		--bg-color: #282a36;
		--current-line: #44475a;
		--foreground: #f8f8f2;
		--foreground-dark: #ebebdb;
		--comment: #6272a4;
	}

	.container {
		background-color: var(--current-line);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	:global(*, *:before, *:after) {
		box-sizing: border-box;
	}
	:global(*) {
		font-family: 'Fire Code', monospace;
	}

	:global(body) {
		margin: 0;
		color: var(--foreground);
		font-family: 'Fire Code', monospace;
	}

	.content {
		height: 80%;
		margin: auto;
	}
</style>
