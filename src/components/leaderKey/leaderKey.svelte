<script lang="ts">
	import Popover from 'svelte-popover';
	import LeaderKeyForm from './leaderKeyForm.svelte';
	import { hasLeaderBeenSelected, leaderKey } from '../../stores/leaderStore';
	export let hit: boolean;
	export let width: string;
	export let fontSize: string;

	$: shouldShake = false;
    hasLeaderBeenSelected.subscribe((newHasLeaderBeenSelected) => shouldShake = !newHasLeaderBeenSelected)
</script>

<Popover placement="top-center">
	<button
		slot="target"
		class:shake={shouldShake}
		class:hit
		style="--fontSize:{fontSize}; --width: {width};"
		class="leader-key key"
	>
		{$leaderKey}
	</button>
	<div class="popover-content" slot="content">
		<LeaderKeyForm  />
	</div>
</Popover>

<style>
	.key {
        background-color: transparent;
        color: var(--foreground);
        font-family: inherit;
		width: var(--width);
		height: 36px;
		border: 2px solid var(--foreground);
		border-radius: 4px;
		font-size: var(--fontSize);
		line-height: 20px;
		box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hit {
		background-color: green;
	}
	.popover-content {
		display: flex;
		white-space: nowrap;
		background-color: var(--foreground);
		color: var(--bg-color);
		padding: 16px;
		border-radius: 4px;
	}

	.leader-key:hover {
		background-color: var(--comment);
		cursor: pointer;
	}

	@keyframes shake {
		0% {
			transform: rotate(0deg);
		}
		2% {
			transform: rotate(-15deg);
		}
		4% {
			transform: rotate(15deg);
		}
		6% {
			transform: rotate(-7deg);
		}
		8% {
			transform: rotate(7deg);
		}
		9% {
			transform: rotate(-3deg);
		}
		10% {
			transform: rotate(2deg);
		}
		12% {
			transform: rotate(0deg);
		}
	}
	.shake {
		animation: 10s shake forwards running;
		animation-iteration-count: infinite;
	}
</style>
