<script lang="ts">
	import Cabecalho from "./components/Cabecalho.svelte";
	import Usuario from "./components/Usuario.svelte";
	import type IUsuario from "./interfaces/IUsuario";

	let usuario: IUsuario | null = null;
	function definirUsuario(dados: CustomEvent<IUsuario | null>) {
		usuario = dados.detail;
	}
</script>

<div class="app">
	<Cabecalho on:aoAlterarUsuario={definirUsuario} />

	{#if usuario}
		<Usuario {usuario} />
	{/if}
</div>

<style>
	.app {
		max-height: 100vh;
	}

	:global(.app) {
		font-family: "Roboto";
		font-style: normal;
	}
</style>
