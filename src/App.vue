<template>
	<div id="app">
		<LavaItem
			v-for="n in 10"
			:key="n"
			v-bind="{color, move, speed, id: n}"
		/>

		<div :class="['settings', {'is-active': active}]">
			<form v-if="active">
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
			<button
				type="button"
				@click="active = !active"
			>
				<IconSettings />
			</button>
		</div>
	</div>
</template>

<script>
import LavaItem from '@/components/LavaItem';
import IconSettings from '@/assets/settings.svg?inline';

export default {
	name: 'App',
	components: {
		LavaItem,
		IconSettings
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
	transition: none;
	overflow: hidden;
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	padding: 0.5rem 1rem;
	width: calc(var(--icon-size) + 2rem);
	max-width: 230px;
	max-height: calc(var(--icon-size) + 1rem);
	background-color: var(--color-content);
	border-radius: 1rem;
	text-align: left;

	&.is-active {
		transition: all 0.3s ease-out;
		width: 100%;
		max-height: 250px;
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
