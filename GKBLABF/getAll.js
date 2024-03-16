window.addEventListener("load", function() {
    fetch('http://localhost:8080/getAll')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const userTableBody = document.getElementById("userTableBody");
            data.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                    <td>${user.dob}</td>
                `;
                userTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});
