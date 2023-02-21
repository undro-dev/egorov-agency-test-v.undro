const DATA_TIMER = {
	days: {
		full: 'Days',
		short: 'DD',
	},
	hours: {
		full: 'Hours',
		short: 'HH',
	},
	minutes: {
		full: 'Minutes',
		short: 'MM',
	},
	seconds: {
		full: 'Seconds',
		short: 'SS',
	},
};

const daysValue = document.querySelector(
	'[data-value="days"] .timer-item__numbers'
);
const hoursValue = document.querySelector(
	'[data-value="hours"] .timer-item__numbers'
);
const minutesValue = document.querySelector(
	'[data-value="minutes"] .timer-item__numbers'
);
const secondsValue = document.querySelector(
	'[data-value="seconds"] .timer-item__numbers'
);

const finishDAte = new Date('2023-05-31');

const timer = () => {
	let nowDate = new Date();
	let timeLeft = finishDAte - nowDate;

	let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
	let hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
	let minutes = Math.floor(timeLeft / 1000 / 60) % 60;
	let seconds = Math.floor(timeLeft / 1000) % 60;

	daysValue.textContent = days < 10 ? `0${days}` : days;
	hoursValue.textContent = hours < 10 ? `0${hours}` : hours;
	minutesValue.textContent = minutes < 10 ? `0${minutes}` : minutes;
	secondsValue.textContent = seconds < 10 ? `0${seconds}` : seconds;
};

const changeTimerValues = (width, el) => {
	let value = el.dataset.value;
	let currentElValue = el.querySelector('.timer-item__values');
	width < 769
		? (currentElValue.textContent = DATA_TIMER[value].short)
		: (currentElValue.textContent = DATA_TIMER[value].full);
};

export { timer, changeTimerValues };
