
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (name === "" || email === "" || password === "" || confirm === "") {
        alert("All fields are required!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email!");
        return false;
    }

    if (password !== confirm) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration Successful!");
    return true;
}

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Enter email and password!");
    } else {
        alert("Login Successful!");
    }
}
function showDetails(course) {
    let details = document.getElementById("courseDetails");

   if (course === "ai") {
    details.innerHTML = `
    <h2>Artificial Intelligence</h2>
    <p><b>Description:</b> This course introduces the fundamentals of Artificial Intelligence, including how machines learn from data, make decisions, and solve real-world problems using intelligent algorithms.</p>
    <p><b>Instructor:</b> Jhon</p>
    <p><b>Curriculum:</b> Introduction to AI, Machine Learning Basics, Regression, Classification, Clustering, Neural Networks Overview</p>
    <p><b>Duration:</b> 8 weeks</p>
    <button>Enroll</button>
    `;
}

    if (course === "cs") {
    details.innerHTML = `
    <h2>Cyber Security</h2>
    <p><b>Description:</b> This course teaches how to protect systems, networks, and data from cyber threats. Students learn security basics, attack prevention methods, and safe digital practices used in real-world environments.</p>
    <p><b>Instructor:</b> Alice</p>
    <p><b>Curriculum:</b> Introduction to Cyber Security, Network Security Basics, Cryptography, Ethical Hacking Concepts, Malware Analysis, Web Security Fundamentals</p>
    <p><b>Duration:</b> 10 weeks</p>
    <button>Enroll</button>
    `;
}

 if (course === "dl") {
    details.innerHTML = `
    <h2>Deep Learning</h2>
    <p><b>Description:</b> This course explains how deep neural networks work and how they are used in applications like image recognition, speech processing, and intelligent automation.</p>
    <p><b>Instructor:</b> Harry</p>
    <p><b>Curriculum:</b> Introduction to Deep Learning, Neural Networks Basics, Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN), Model Training Techniques</p>
    <p><b>Duration:</b> 12 weeks</p>
    <button>Enroll</button>
    `;
}

    if (course === "ml") {
    details.innerHTML = `
    <h2>Machine Learning</h2>
    <p><b>Description:</b> This course covers the fundamentals of machine learning and how systems learn patterns from data to make predictions and decisions without explicit programming.</p>
    <p><b>Instructor:</b> Ritche
    <p><b>Curriculum:</b> Introduction to Machine Learning, Supervised Learning, Unsupervised Learning, Regression, Classification, Model Evaluation Techniques</p>
    <p><b>Duration:</b>6 weeks</p>
    <button>Enroll</button>
    `;
}
}
