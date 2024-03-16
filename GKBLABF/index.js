document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        sendData();
    }
});

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const dob = document.getElementById("dob");

    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");

        // div1.innerHTML = "this filed must contain @ symbol";
        // div1.style.color="red";
        return false;
    }

    // Validate age as positive integer
    if (!Number.isInteger(parseInt(age)) || parseInt(age) < 0) {
        alert("Please enter a positive integer for age.");
        // div2.innerHTML="this field contain positive integer only";
        // div2.style.color="red"; 
        return false;
    }

    return true;
}

function sendData() {
    const formData = new FormData(document.getElementById("userForm"));
    const user = {};
    formData.forEach((value, key) => {
        user[key] = value;
    });

    fetch('http://localhost:8080/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert("User saved successfully");
        document.getElementById("userForm").reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error occurred while saving user");
    });
}


document.addEventListener("DOMContentLoaded", function() {
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









