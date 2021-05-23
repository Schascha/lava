<template>
	<div
		class="lava"
		:style="{
			'--lava-color': `var(--lava-color-${color})`,
			'--lava-speed': `${speed}s`,
			'--lava-shape': shape,
			'--lava-shape-animation': shapeAnimation,
			'--lava-size': size,
			'--lava-move': move ? 'running' : 'paused',
			'--lava-delay': delay,
			'--lava-opacity': opacity,
			'--lava-position': position
		}"
	>
		<div class="lava-inner"></div>
	</div>
</template>

<script>
function between(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

export default {
	props: {
		color: [Number, String],
		id: [Number, String],
		move: Boolean,
		speed: [Number, String]
	},
	computed: {
		delay() {
			return `-${this.id - 1}s`;
		},
		opacity() {
			return `${between(5, 10) / 10}`;
		},
		position() {
			return `${between(0, 100)}%`;
		},
		shape() {
			return `${between(30, 50)}% ${between(50, 70)}% ${between(50, 70)}% ${between(30, 50)}% / ${between(30, 50)}% ${between(30, 50)}% ${between(50, 70)}% ${between(50, 70)}%`;
		},
		shapeAnimation() {
			return `${between(50, 70)}% ${between(30, 50)}% ${between(50, 70)}% ${between(30, 50)}% / ${between(50, 70)}% ${between(50, 70)}% ${between(30, 50)}% ${between(30, 50)}%`;
		},
		size() {
			return `${between(15, 75)}vw`;
		}
	}
};
</script>

<style lang="scss">
	:root {
		--lava-color-1: linear-gradient(90deg, #ff7e5f, #feb47b);
		--lava-color-2: linear-gradient(90deg, #553e9a, #363dc2);
		--lava-color-3: linear-gradient(135deg, #a0dedb, #03a5d1);
		--lava-color-4: linear-gradient(135deg, #b6f455, #3f8057);
		--lava-color-5: linear-gradient(320deg, #55e7af, #558de7, #af55e7, #e7558d, #e7af55, #8de755);
		--lava-color-6: linear-gradient(90deg, #fbbd64, #ffcf8b);
		--lava-color-7: linear-gradient(175deg, #760817, #9e0c21);
		// --lava-shape: 30% 70% 67% 33% / 30% 30% 70% 70%;
		// --lava-shape-animation: 63% 37% 67% 33% / 52% 67% 33% 48%;
	}

	.lava {
		opacity: var(--lava-opacity);
		transform: translate(-50%, -50%);
		position: absolute;
		top: 50%;
		left: var(--lava-position);
		width: var(--lava-size);
		min-width: 10rem;
		max-width: 20rem;

		&-inner {
			animation: lavaMove calc(var(--lava-speed) * 4) ease-in-out both infinite;
			animation-delay: calc(var(--lava-delay) * -2);
			animation-play-state: var(--lava-move);
			position: relative;

			&::before {
				animation: lavaMorph var(--lava-speed) ease-in-out both infinite;
				animation-delay: var(--lava-delay);
				content: '';
				display: block;
				padding-top: 100%;
				background: var(--lava-color);
				border-radius: var(--lava-shape);
			}
		}
	}

	@keyframes lavaMorph {
		50% {
			border-radius: var(--lava-shape-animation);
		}
	}

	@keyframes lavaMove {
		0%,
		100% {
			transform: translate(0, -100vh);
		}

		50% {
			transform: translate(0, 100vh) rotate(90deg);
		}
	}
</style>
