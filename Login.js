

function Login(e) {
    e.preventDefault();

    let loginData = {
        password: document.getElementById('password').value,
        username: document.getElementById('name').value
    }
    lData = JSON.stringify(loginData);

    fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
        method: 'POST',
        body: lData,
        // mode: "no-cors",

        // headers: {
        //     'Content-Type': 'application/json'
        // }
        headers: {
            'Content-Type': 'application/json',
            
        }
    })
    .then((res) => {
        return res.json();
    })
     .then((res) => {
         console.log('res:', res)
         if (res.error == false) {
                alert('Login Successful')
                window.location.href = "Home.html";
                 
        }
     })
    .catch((err2) => {
        console.log('err2:', err2)
            
    })
}


function SignupOpen() {
    window.location.href = "Signup.html";
}





// ===========================





























// function SignupOpen() {
//     window.location.href = "Signup.html";
// }
// // let isPresent = false;
// function SubmitLogin(e) {
//     e.preventDefault();
//     let form = document.getElementById('form');

//     let username = form.name.value
//     let password = form.password.value

//     let arr = JSON.parse(localStorage.getItem('signup'));
//     // console.log(arr);
//     var isPresent = false;
//     finalLogin = function () {
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i].name == username && arr[i].password == password) {
//                 window.location.href = 'Home.html';
//                 isPresent = true;
//             }
//         }
//         if (isPresent == false) { alert('invalid Credentials') }
//     }
//     finalLogin();

// }

// function HomeOpen() {
//     window.location.href = "Home.html";
// }
