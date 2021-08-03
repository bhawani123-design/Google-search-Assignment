

function register(e) {
    e.preventDefault();

    let registerData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("contact").value,
        description: document.getElementById("desc").value,
    }

    registerData = JSON.stringify(registerData);
    console.log('registerData:', registerData)

    fetch('https://masai-api-mocker.herokuapp.com/auth/register', {

        method: 'POST',
        body: registerData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log('res:', res)
        window.location.href = "Login.html";
    })
    .catch((err)=>{
        console.log('err:', err)  
    })
}

function LoginOpen() {
    window.location.href = "Login.html";
}













// =======================



























// function LoginOpen() {
//     window.location.href = "Login.html";
// }


// // function HomeOpen() {
// //     window.location.href = "Home.html";
// // }



// function Submit(e) {
//     e.preventDefault();
//     let form = document.getElementById("form");
//     let name = form.name.value;
//     let contact = form.contact.value;
//     let email = form.email.value;
//     let password = form.password.value;

//     const data = {
//         name,
//         contact,
//         email,
//         password
//     }
    
//     let arr;
//     arr = localStorage.getItem('signup')
//     if (arr == null) {
//         arr = [];
//     }
//     else {
//         arr = JSON.parse(localStorage.getItem('signup'))
//     }
//     if (name != "" && contact != "" && email != "" && password != "") {
//         arr.push(data);
//         localStorage.setItem('signup', JSON.stringify(arr));
//         alert('Register Successfully')
//         window.location.href = 'Login.html';
//         form.name.value = null;
//         form.contact.value = null;
//         form.email.value = null
//         form.password.value = null
//     } else { alert('Please fill all the fields')}

// }


