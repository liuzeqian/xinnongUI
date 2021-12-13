<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<Demo />
		<m-card :imgSrc="`${publicPath}bg7.png`" summary="11">
			<template v-slot:footer>
				<div class="footer">
					<div class="footer-spring">
						<div class="level">4步骤</div>
						<div class="level">10965收藏</div>
					</div>
				</div>
			</template>
		</m-card>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			publicPath: process.env.BASE_URL,
		}
	},
	components: {},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.level {
	color: #9199a1;
	margin-bottom: 8px;
}
.price {
	color: #f01414;
}
.footer-spring {
	display: flex;
	justify-content: space-between;
	padding: 0 8px;
	font-size: 12px;
}
</style>
