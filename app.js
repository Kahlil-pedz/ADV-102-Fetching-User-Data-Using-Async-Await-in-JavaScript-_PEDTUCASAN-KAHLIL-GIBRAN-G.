async function fetchUsers() {
    const userContainer = document.getElementById('userContainer');
    
    try {
        userContainer.innerHTML = '<div class="loading">Loading users...</div>';
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        
        const users = await response.json();
        displayUsers(users);
        
    } catch (error) {
        userContainer.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
}

function displayUsers(users) {
    const userContainer = document.getElementById('userContainer');
    let html = '';
    
    users.forEach(user => {
        html += `
            <div class="user-card">
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
            </div>
        `;
    });
    
    userContainer.innerHTML = html;
}

fetchUsers();