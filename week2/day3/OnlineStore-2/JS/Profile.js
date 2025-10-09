const profileLoad = ()=>{
    console.log("validateFun");
    const accessToken = sessionStorage.getItem("token");
    if(!accessToken){
        loadPage("Login","Login");
    }
};

const handleProfileReady = (event)=>{
    if(event.detail?.pageName === "Profile"){
        profileLoad();
    }
};

document.addEventListener("page:ready", handleProfileReady);
