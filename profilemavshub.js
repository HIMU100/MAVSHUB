// profile.js
document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const profilePicture = document.getElementById('profilePicture');
    const profilePictureUpload = document.getElementById('profilePictureUpload');

    // Function to handle profile picture upload
    profilePictureUpload.addEventListener('change', function(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePicture.src = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    });

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const major = document.getElementById('major').value;
        const studyGroups = document.getElementById('studyGroups').value;
        const learningStyle = document.getElementById('learningStyle').value;
        const sportsInterest = Array.from(document.querySelectorAll('input[name="sportsInterest"]:checked')).map(input => input.value);
        const workoutFrequency = document.getElementById('workoutFrequency').value;

        alert('Profile updated successfully!');
    });
});
