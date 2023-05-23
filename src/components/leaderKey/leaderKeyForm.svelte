<script lang="ts">
	import { leaderKey, hasLeaderBeenSelected } from '../../stores/leaderStore';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let leaderKeyInput = $leaderKey;
	const onSubmit = () => {
		leaderKey.set(leaderKeyInput === " " ? "SPACE" : leaderKeyInput);
		hasLeaderBeenSelected.set(true);
		localStorage.setItem('leader-key', leaderKeyInput === " " ? "SPACE" : leaderKeyInput);
		dispatch('submit');
	};
</script>

<form on:submit|preventDefault={onSubmit}>
	<label for="leader-key">vim.g.mapleader = "</label>
	<input bind:value={leaderKeyInput} type="text" name="leaderKey" id="leaderKey" />
	<p>"</p>
	<button>Set</button>
</form>

<style>
	form {
		display: flex;
		align-items: center;
		gap: 4px;
	}
</style>
