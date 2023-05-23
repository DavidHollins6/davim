<script lang="ts">
	import confetti from 'canvas-confetti';
	import { leaderKey } from '../../stores/leaderStore';
	import LeaderKey from '../leaderKey/leaderKey.svelte';

	export let letter: string;
	export let hit: boolean;
	export let index: number;

	const FONT_SIZE_LOOKUP: Record<string, string> = {
		SPACE: '18px',
		CTRL: '14px',
		SHIFT: '14px'
	};
	const WIDTH_LOOKUP: Record<string, string> = {
		SPACE: '90px',
		CTRL: '44px',
		SHIFT: '60px'
	};
	$: {
		hit &&
			confetti({
				particleCount: 100 * (index + 1),
				spread: 360,
				zIndex: 3
			});
	}

	export let fontSize = FONT_SIZE_LOOKUP[letter] || '20px';
	export let width = WIDTH_LOOKUP[letter] || '36px';
</script>

{#if letter === $leaderKey}
    <LeaderKey {fontSize} {hit} {width} />
{:else}
	<div class:hit style="--fontSize:{fontSize}; --width: {width};" class="key">
		{letter}
	</div>
{/if}

<style>
	.key {
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

</style>
