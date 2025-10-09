export function init(){
    const form = document.querySelector("#login");
    if(!form) return;
    form.replaceWith(form.cloneNode(true));
    const newForm = document.querySelector('#login');
    newForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const requestBody = JSON.stringify({
            email:document.querySelector("input[type=email]").value,
            password:document.querySelector("input[type=password]").value
        })
        const xhttp = new XMLHttpRequest();
        xhttp.onload = ()=>{
            if(xhttp.status === 201){
                sessionStorage.setItem("token",xhttp.responseText);
                loadPage('Profile','Profile');
            }else{
                console.log("Error in login: ",xhttp.statusText)
            }
        }
        xhttp.open("POST","https://api.escuelajs.co/api/v1/auth/login",true);
        xhttp.setRequestHeader('Content-Type','application/json');
        xhttp.send(requestBody);
    })
}