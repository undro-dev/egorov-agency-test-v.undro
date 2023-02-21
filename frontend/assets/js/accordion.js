const EVENTS_WRAPPER = document.querySelector('.events');
const ACCORDION = document.querySelector('.accordion');
const ACCORDION_ITEMS = ACCORDION.querySelectorAll('.acc-item');
const ACCORDION_ITEMS_BODY = ACCORDION.querySelectorAll('.acc-item__body');
const EVENTS_BTN = document.querySelector('.footer-btn-events');

function accordion() {
	ACCORDION_ITEMS_BODY.forEach(el => (el.style.width = 0));

	let currentItemBody =
		ACCORDION.querySelector('.acc-item.hovered').querySelector(
			'.acc-item__body'
		);

	currentItemBody.style.width = `${ACCORDION.offsetWidth - 708}px`;
	ACCORDION_ITEMS.forEach(el => {
		el.addEventListener('click', () => {
			ACCORDION_ITEMS.forEach(el => el.classList.remove('hovered'));
			el.classList.toggle('hovered');
			accordion();
		});
	});

	EVENTS_BTN.addEventListener('click', e => {
		e.currentTarget.classList.toggle('open');

		if (e.currentTarget.classList.contains('open')) {
			EVENTS_WRAPPER.style.display = 'flex';
			EVENTS_WRAPPER.classList.add('animate__fadeInDown');
		} else {
			EVENTS_WRAPPER.style.display = 'none';
			EVENTS_WRAPPER.classList.remove('animate__fadeInDown');
		}
	});
}

export { accordion };
