export default `
	document.addEventListener("DOMContentLoaded", function() {
		var root = document.querySelector('html');
		var navbarToggleForKeyboard = document.getElementById("hamburger");
		var navbarToggle = document.getElementById("hamburger-cover");

		var navbarToggleForKeyboardHandler = function() {
			var method = navbarToggleForKeyboard.checked ? 'add' : 'remove';
			root.classList[method]('navbar--expanded');
			navbarToggle.checked = navbarToggleForKeyboard.checked;
		}

		navbarToggleForKeyboard.addEventListener("change", navbarToggleForKeyboardHandler);

		var enterKeyCode = 13;
		navbarToggleForKeyboard.addEventListener("keypress", function(e) {
			var keyCode = (e.which || e.keyCode);
			if (keyCode === enterKeyCode) {
				navbarToggleForKeyboard.checked = navbarToggleForKeyboard.checked ? false : true;
				navbarToggleForKeyboardHandler();
			}
		});

		navbarToggle.addEventListener("change", function() {
			var method = navbarToggle.checked ? 'add' : 'remove';
			root.classList[method]('navbar--expanded');
			navbarToggleForKeyboard.checked = navbarToggle.checked;
		});
	});
`;
