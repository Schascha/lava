<template>
	<div id="app">
		<LavaItem
			v-for="n in 10"
			:key="n"
			v-bind="{color, move, speed, id: n}"
		/>

		<div :class="['settings', {'is-active': active}]">
			<button
				type="button"
				@click="active = !active"
			>
				<IconPlus />
			</button>
			<form>
				<label>
					<span>Color ({{ color }})</span>
					<input
						type="range"
						min="1"
						max="7"
						v-model="color"
					/>
				</label>
				<label>
					<span>Speed  ({{ speed }})</span>
					<input
						type="range"
						min="1"
						max="10"
						v-model="speed"
					/>
				</label>
				<label>
					<span>Move</span>
					<input
						type="checkbox"
						v-model="move"
					/>
				</label>
			</form>

		</div>
	</div>
</template>

<script>
import LavaItem from '@/components/LavaItem';
import IconPlus from '@/assets/plus.svg?inline';

export default {
	name: 'App',
	components: {
		LavaItem,
		IconPlus
	},
	data() {
		return {
			active: false,
			color: 1,
			speed: 5,
			move: true
		};
	}
};
</script>

<style lang="scss">
:root {
	--color-bg: #141b1f;
	--color-content: #21262e;
	--color-text: #f0f6fc;
	--font-family: -apple-system, Roboto, Helvetica, Arial, sans-serif;
	--icon-size: 2rem;
}

html {
	box-sizing: border-box;
	font-family: var(--font-family);
	font-size: 16px;
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
	box-sizing: inherit;
}

body {
	margin: 0;
	background-color: var(--color-bg);
	color: var(--color-text);
}

html,
body {
	overflow: hidden;
	height: 100%;
}

button {
	@include button-reset();
	cursor: pointer;
	margin: 0;
	padding: 0;
}

.settings {
	overflow: hidden;
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	width: calc(var(--icon-size) + 1rem);
	max-width: 230px;
	height: calc(var(--icon-size) + 1rem);
	background-color: var(--color-content);
	border-radius: 1rem;
	text-align: left;

	&.is-active {
		width: 100%;
		height: auto;
		max-height: 250px;

		form {
			opacity: 1;
			transform: scale(1) translateZ(0);
			padding: 0.5rem 1rem;
		}

		svg {
			transform: rotate(45deg);
		}
	}

	form {
		transition: all 0.3s ease-out;
		opacity: 0;
		clear: both;
		transform: scale(0) translateZ(0);
		transform-origin: bottom left;
	}

	button {
		float: right;
		padding: 0.5rem;
	}

	input {
		&[type='range'] {
			width: 100%;
		}
	}

	label,
	span {
		display: block;
	}
}

svg {
	transition: transform 0.3s ease-out;
	width: var(--icon-size);
	height: var(--icon-size);
	fill: currentColor;
	vertical-align: middle;
}

/* stylelint-disable selector-max-id */
#app {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
</style>
