import { timer, changeTimerValues } from './assets/js/timer.js';
import { onSubmit } from './assets/js/form.js';
import { closePopup } from './assets/js/popup.js';
import { accordion } from './assets/js/accordion.js';

const TIMER_ITEMS = document.querySelectorAll('.timer-item');
const FORM = document.querySelector('.footer-form');

window.addEventListener('resize', () => {
	const width = document.body.clientWidth;
	TIMER_ITEMS.forEach(el => changeTimerValues(width, el));
	accordion();
});

document.addEventListener('DOMContentLoaded', () => {
	setInterval(() => {
		timer();
	}, 1000);

	FORM.onsubmit = e => onSubmit(e);

	document.addEventListener('click', e => closePopup(e));

	accordion();
});
