const { animate, utils, createDraggable, createSpring, createTimer } = anime;

const [$logo] = utils.$(".logo.js");
const [$button] = utils.$("button");
let rotations = 0;

// Created a bounce animation loop
animate(".logo.js", {
	scale: [
		{ to: 1.25, ease: "inOut(3)", duration: 200 },
		{ to: 1, ease: createSpring({ stiffness: 300 }) },
	],
	loop: true,
	loopDelay: 250,
});

// Make the logo draggable around its center
createDraggable(".logo.js", {
	container: [0, 0, 0, 0],
	releaseEase: createSpring({ stiffness: 200 }),
});

// Animate logo rotation on click
const rotateLogo = () => {
	rotations++;
	$button.innerText = `rotations: ${rotations}`;
	animate($logo, {
		rotate: rotations * 360,
		ease: "out(4)",
		duration: 1500,
	});
};

$button.addEventListener("click", rotateLogo);

const [$time, $count] = utils.$(".value");

createTimer({
	delay: 2000,
	duration: 2000,
	loop: true,
	frameRate: 30,
	onUpdate: (self) => ($time.innerHTML = self.currentTime),
	onLoop: (self) => ($count.innerHTML = self._currentIteration),
});

const [$loops] = utils.$(".loops");
const [$time2] = utils.$(".time");
let loops = 0;
createTimer({
	loop: 5,
	duration: 2000,
	onLoop: () => ($loops.innerHTML = ++loops),
	onUpdate: (self) => ($time2.innerHTML = self.iterationCurrentTime),
});

const [$loops_delay] = utils.$(".loops_delay");
const [$loops_delay_time] = utils.$(".loops_delay_time");

let loops_delay_count = 0;

createTimer({
	loop: true,
	loopDelay: 750,
	duration: 250,
	onLoop: () => ($loops_delay.innerHTML = ++loops_delay_count),
	onUpdate: (self) => ($loops_delay_time.innerHTML = utils.clamp(self.iterationCurrentTime, 0, 250)),
});
