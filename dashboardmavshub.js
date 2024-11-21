// dashboardmavshub.js
document.addEventListener('DOMContentLoaded', function() {
    const interestForm = document.getElementById('interestForm');
    const recommendationsSection = document.getElementById('recommendations');
    const connectionList = document.getElementById('connectionList');

    interestForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const major = document.getElementById('major').value;
        const studyGroups = document.getElementById('studyGroups').value;
        const learningStyle = document.getElementById('learningStyle').value;
        const academicCompetitions = document.getElementById('academicCompetitions').value;
        const sportsInterest = Array.from(document.querySelectorAll('input[name="sportsInterest"]:checked')).map(input => input.value);
        const sportsFrequency = document.getElementById('sportsFrequency').value;
        const intramuralSports = document.getElementById('intramuralSports').value;
        const sportsPreference = document.getElementById('sportsPreference').value;
        const workoutFrequency = document.getElementById('workoutFrequency').value;
        const workoutType = Array.from(document.querySelectorAll('input[name="workoutType"]:checked')).map(input => input.value);
        const workoutPartners = document.getElementById('workoutPartners').value;
        const workoutLocation = document.getElementById('workoutLocation').value;

        const recommendations = [
            { name: 'John Smith', major: 'Computer Science', interests: ['Study Groups', 'Basketball', 'Gym'] },
            { name: 'Jane Doe', major: 'Engineering', interests: ['Academic Competitions', 'Soccer', 'Yoga'] },
        ];

        connectionList.innerHTML = ''; 
        recommendations.forEach(recommendation => {
            const listItem = document.createElement('li');
            listItem.textContent = `${recommendation.name} - ${recommendation.major} - Interests: ${recommendation.interests.join(', ')}`;
            connectionList.appendChild(listItem);
        });

        recommendationsSection.style.display = 'block';

    });
});
