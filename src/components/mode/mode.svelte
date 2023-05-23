<script lang="ts">
	import { command } from '../../stores/commandStore';

	console.log($command);
</script>

<div class="mode-bar">
	Mode: {$command.mode}
</div>

<style>
	.mode-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: var(--current-line);
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        color: var(--comment);
        display: flex;
        padding: 4px;
        box-sizing: border-box;

	}
</style>
