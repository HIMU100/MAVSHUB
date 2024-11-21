// create-group.js
document.addEventListener('DOMContentLoaded', function() {
    const createGroupForm = document.getElementById('createGroupForm');

    createGroupForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const groupName = document.getElementById('groupName').value;
        const groupDescription = document.getElementById('groupDescription').value;
        const groupCategory = document.getElementById('groupCategory').value;
        const groupPrivacy = document.getElementById('groupPrivacy').value;


        console.log('Group Data:', {
            name: groupName,
            description: groupDescription,
            category: groupCategory,
            privacy: groupPrivacy 
        });

        createGroupForm.reset();
        alert('Group created successfully!'); 
    });
});
