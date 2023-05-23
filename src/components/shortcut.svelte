<script lang="ts">
	import { onMount } from 'svelte';
	import confetti from 'canvas-confetti';
	import ShortcutKey from './shortcutKey.svelte';
	import { convertToKeys } from '../utils/convertToKeys';
	import { leaderKey } from '../stores/leaderStore';
	import { command } from '../stores/commandStore';
	import { shortcutCreator } from '../utils/shortcutCreator';
	import { browser } from '$app/environment';
	import mousetrap from 'mousetrap';

	$: shortcut = shortcutCreator($command.cmd, $leaderKey);
	$: shortcutIndex = -1;

	$: binding = convertToKeys(shortcut);
	$: binding, remountBindings(binding);

	onMount(() => remountBindings(binding));

	let sequenceTimeout: ReturnType<typeof setTimeout>;

	const remountBindings = (newBinding: string[]) => {
		if (browser) {
			mousetrap.reset();
			mousetrap.bind(newBinding, (_, combo) => {
				const index = newBinding.findIndex((b) => b === combo);
				if (index === shortcutIndex + 1) {
					shortcutIndex++;
					confetti({
						particleCount: 300,
						spread: 360,
						zIndex: 3
					});

                    clearTimeout(sequenceTimeout);
					sequenceTimeout = setTimeout(() => (shortcutIndex = -1), 750);

					if (shortcutIndex === newBinding.length - 1) {
                        clearTimeout(sequenceTimeout);
						setTimeout(() => (shortcutIndex = -1), 500);
					}
				} else {
					shortcutIndex = -1;
				}
			});
		}
	};
</script>

<div class="shortcut">
	{#each shortcut as key, index}
		{#if Array.isArray(key)}
			{#each key as sc, scIndex}
				{#if scIndex > 0}
					<div class="connector plus">+</div>
				{/if}
				<div>
					<ShortcutKey hit={index <= shortcutIndex} letter={sc} {index} />
				</div>
			{/each}
		{:else}
			<div>
				<ShortcutKey hit={index <= shortcutIndex} letter={key} {index} />
			</div>
		{/if}
	{/each}
</div>

<style>
	.shortcut {
		display: flex;
		gap: 16px;
		align-items: end;
	}

	.connector {
		margin: 0;
	}

	.connector.plus {
		margin: auto;
	}
</style>
