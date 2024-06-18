<script>
	import Navbar from './../components/navbar.svelte';
	import '../global.css'
</script>

<body>
	<Navbar darkmode={true}/>
	<div class="start">
		<div class="start-things">
			<div class="header">
				<h1>Lodde</h1>
			</div>
			<div class="info">
				<p>Norges nettbasserte<br>Loddsystem</p>
			</div>
			<div class="buttons">
				<button class="kig background blue">Kom i gang</button>
				<button class="fum transparent">Finn ut mer</button>
			</div>
		</div>
	</div>
</body>

<style>
	.start {
		height: 100vh;
		width: 100%;
		background-color: #E94F37;
		color: white;
		border-radius: 0 0 80px 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.start h1 {
		font-size: 300px;
		margin-bottom: -90px;
	}

	.start p {
		font-size: 40px;
	}

	.start button {
		font-size: 30px;
		padding: 10px 20px;
		border-radius: 20px;
		margin: 10px;
	}

	.start-things {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>