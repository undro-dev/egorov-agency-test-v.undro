const closePopup = e => {
	if (
		e.target.classList.contains('popup') ||
		e.target.classList.contains('popup-body__btn') ||
		e.target.classList.contains('popup-body__btn-close')
	) {
		document.querySelector('.popup').style.display = 'none';
	}
};

export { closePopup };
