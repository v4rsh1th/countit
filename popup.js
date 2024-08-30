document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate');
    const clearButton = document.getElementById('clearDate');
    const countdownDisplay = document.getElementById('countdown');
    const targetDateInput = document.getElementById('targetDate');

    // Load saved date from local storage
    const savedDate = localStorage.getItem('targetDate');
    if (savedDate) {
        targetDateInput.value = savedDate;
        displayCountdown(new Date(savedDate));
    }

    calculateButton.addEventListener('click', function () {
        const targetDate = new Date(targetDateInput.value);
        localStorage.setItem('targetDate', targetDateInput.value); // Save the date
        displayCountdown(targetDate);
    });

    clearButton.addEventListener('click', function () {
        localStorage.removeItem('targetDate'); // Clear saved date
        targetDateInput.value = ''; // Clear input field
        countdownDisplay.innerText = ''; // Clear countdown display
    });

    function displayCountdown(targetDate) {
        const currentDate = new Date();
        const timeDiff = targetDate.getTime() - currentDate.getTime();

        if (timeDiff < 0) {
            countdownDisplay.innerText = "The target date has already passed.";
            return;
        }

        const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        countdownDisplay.innerText = `${daysLeft} days ${hoursLeft} hours left`;
    }
});
