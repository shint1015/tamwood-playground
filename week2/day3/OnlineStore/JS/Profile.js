export function init(){
    console.log("profile.init() called - validating token")
    console.log("Token: ",sessionStorage.getItem("token"));
    console.log("token check: ",!sessionStorage.getItem("token") ? "no token" : "has token");
    if(!sessionStorage.getItem("token")){
        // redirect to login page
        loadPage("Login","Login");
    }
}