<script>
	import Bar from '../components/search/bar.svelte';
	import { allCommands } from '../stores/commandStore';
	import FaRandom from 'svelte-icons/fa/FaRandom.svelte';
	import githubLogo from '../assets/github-mark.svg';

	let randomCommand = $allCommands[Math.floor(Math.random() * $allCommands.length)];
</script>

<div class="container">
	<h1>DAVIM</h1>
	<p>A place for me to go to figure out what VIM motion I need for my very specific task</p>
	<div class="actions">
		<div>
			<Bar />
		</div>
		<a href={`/${randomCommand.cmd}`}><FaRandom /></a>
	</div>
</div>
<div class="usings">
	<a href="https://github.com/DavidHollins6/davim" target="_blank" ><img src={githubLogo} /></a>
</div>

<style>
	h1 {
		font-size: 10rem;
		text-align: center;
		margin-block-end: 0.1em;
	}

	.container {
		max-width: 65%;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.container p {
		text-align: center;
		margin-block-end: 5em;
	}

	.actions {
		display: flex;
		gap: 1rem;
		justify-content: space-around;
	}

	.actions a {
		width: 32px;
		cursor: pointer;
		background-color: white;
		display: flex;
		border: 1px solid #ebebeb;
		border-radius: 4px;
		color: grey;
		padding: 0.5rem;
	}

	.actions div {
		flex-grow: 1;
	}

	.usings {
		position: absolute;
		left: 0.5rem;
		bottom: 0.5rem;
	}

	.usings img {
		width: 32px;
		height: 32px;
	}
</style>
