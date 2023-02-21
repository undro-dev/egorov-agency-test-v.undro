const INPUT_EMAIL = document.querySelector('.footer-input');
const POPUP = document.querySelector('.popup');

const validateEmail = email => {
	const EMAIL_REGEXP =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

	return EMAIL_REGEXP.test(email.toLowerCase());
};

const onSubmit = async e => {
	e.preventDefault();

	if (!validateEmail(INPUT_EMAIL.value)) {
		INPUT_EMAIL.classList.add('error');
	} else {
		INPUT_EMAIL.classList.remove('error');

		let response = await fetch('http://localhost:5000/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({ id: Date.now(), email: INPUT_EMAIL.value }),
		});

		let result = await response.json();

		if (result.message === 'success') POPUP.style.display = 'flex';

		INPUT_EMAIL.value = '';
	}
};

export { onSubmit };
