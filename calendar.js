// calendar.js
document.addEventListener('DOMContentLoaded', function() {
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const currentMonthDisplay = document.getElementById('currentMonth');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function renderCalendar() {
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const tableBody = document.querySelector('.calendar-table tbody');

        tableBody.innerHTML = '';

        let day = 1;
        let row = document.createElement('tr');

        for (let i = 0; i < firstDayOfMonth; i++) {
            const cell = document.createElement('td');
            cell.classList.add('calendar-day');
            row.appendChild(cell);
        }

        while (day <= daysInMonth) {
            const cell = document.createElement('td');
            cell.classList.add('calendar-day');

            const dateElement = document.createElement('div');
            dateElement.classList.add('calendar-date');
            dateElement.textContent = day;
            cell.appendChild(dateElement);

            const eventsElement = document.createElement('div');
            eventsElement.classList.add('event');

            if (day === 1) {
                const csEvent = document.createElement('div');
                csEvent.classList.add('cs-event');
                csEvent.innerHTML = '<i class="fas fa-laptop-code"></i> CS Study Group';
                eventsElement.appendChild(csEvent);
            } else if (day === 3) {
                const sportsEvent = document.createElement('div');
                sportsEvent.classList.add('sports-event');
                sportsEvent.innerHTML = '<i class="fas fa-basketball-ball"></i> Basketball Game';
                eventsElement.appendChild(sportsEvent);
            } else if (day === 5) {
                const fitnessEvent = document.createElement('div');
                fitnessEvent.classList.add('fitness-event');
                fitnessEvent.innerHTML = '<i class="fas fa-dumbbell"></i> HIIT Workout';
                eventsElement.appendChild(fitnessEvent);
            } else if (day === 7) {
                const csEvent = document.createElement('div');
                csEvent.classList.add('cs-event');
                csEvent.innerHTML = '<i class="fas fa-code"></i> Coding Workshop';
                eventsElement.appendChild(csEvent);
            }

            cell.appendChild(eventsElement);
            row.appendChild(cell);

            if (row.children.length === 7) {
                tableBody.appendChild(row);
                row = document.createElement('tr');
            }

            day++;
        }

        while (row.children.length < 7) {
            const cell = document.createElement('td');
            cell.classList.add('calendar-day');
            row.appendChild(cell);
        }

        if (row.children.length > 0) {
            tableBody.appendChild(row);
        }

        currentMonthDisplay.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(currentYear, currentMonth));
    }

    renderCalendar();

    prevMonthButton.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });
});
