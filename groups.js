// interest-groups.js
document.addEventListener('DOMContentLoaded', function() {
    const joinGroupButtons = document.querySelectorAll('.group-card .btn-success');
    const skipGroupButtons = document.querySelectorAll('.group-card .btn-secondary');
    const retakeQuizButton = document.getElementById('retake-quiz');
    const viewAllGroupsButton = document.getElementById('view-all-groups');

    joinGroupButtons.forEach(button => {
        button.addEventListener('click', function() {
            const groupCard = this.closest('.group-card');
            alert(`You have joined the "${groupCard.querySelector('h2').textContent}" group!`);
        });
    });

    skipGroupButtons.forEach(button => {
        button.addEventListener('click', function() {
            const groupCard = this.closest('.group-card');
            alert(`You have skipped the "${groupCard.querySelector('h2').textContent}" group.`);
        });
    });

    retakeQuizButton.addEventListener('click', function() {
        window.location.href = 'interest-quiz.html';
    });

    viewAllGroupsButton.addEventListener('click', function() {
        window.location.href = 'all-groups.html';
    });
});
