const pinDisplay = document.getElementById('pin-display');
        const errorMessage = document.getElementById('error-message');
        const loginBox = document.getElementById('login-box');
        const buttons = document.querySelectorAll('.buttons button');

        const correctPin = '112524';
        let enteredPin = '';

        function resetDisplay() {
            enteredPin = '';
            pinDisplay.textContent = '';
            pinDisplay.setAttribute('data-placeholder', 'Enter Passcode');
        }

        function checkPin() {
            if (enteredPin === correctPin) {
                window.location.href = 'search.html';
            } else {
                errorMessage.style.display = 'block'; // Show error message
                loginBox.classList.add('shake');
                
                setTimeout(() => {
                    loginBox.classList.remove('shake');
                    setTimeout(() => {
                        errorMessage.style.display = 'none'; // Hide error message after 1 second
                        resetDisplay(); // Show "Enter Passcode" again after error disappears
                    }, 1000); // Keep the error visible for 1 second
                }, 300); // Shake animation duration
            }
        }

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.classList.contains('enter')) {
                    checkPin();
                } else if (button.classList.contains('backspace')) {
                    enteredPin = enteredPin.slice(0, -1);
                    pinDisplay.textContent = '*'.repeat(enteredPin.length);
                } else {
                    if (enteredPin.length < 6) {
                        enteredPin += button.dataset.value;
                        pinDisplay.textContent = '*'.repeat(enteredPin.length);
                        pinDisplay.setAttribute('data-placeholder', ''); // Hide the placeholder when typing
                    }
                }
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                checkPin();
            }
        });