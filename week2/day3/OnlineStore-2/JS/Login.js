const handleLoginSubmit = (event)=>{
    event.preventDefault();
    const requestBody = JSON.stringify({
        email: document.querySelector("input[type=email]").value,
        password: document.querySelector("input[type=password]").value
    });
    const xhttp = new XMLHttpRequest();
    xhttp.onload = ()=>{
        if(xhttp.status === 201){
            sessionStorage.setItem("token",xhttp.responseText);
            loadPage('Profile','Profile');
        }else{
            console.log("Error in login: ",xhttp.statusText);
        }
    };
    xhttp.open("POST","https://api.escuelajs.co/api/v1/auth/login",true);
    xhttp.setRequestHeader('Content-Type','application/json');
    xhttp.send(requestBody);
};

const initializeLoginPage = ()=>{
    const loginForm = document.querySelector("#login");
    if(!loginForm){
        return;
    }
    loginForm.addEventListener("submit", handleLoginSubmit);
};

const handleLoginReady = (event)=>{
    if(event.detail?.pageName === "Login"){
        initializeLoginPage();
    }
};

document.addEventListener("page:ready", handleLoginReady);
