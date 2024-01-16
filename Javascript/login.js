let regform=document.getElementById("RegForm");
let username=document.getElementById("r1");
let useremail=document.getElementById("r2");
let userpassword=document.getElementById("r3");
let regsub=document.getElementById("r4");
let loginemail=document.getElementById("l1");
let loginpassword=document.getElementById("l2");
let loginsub=document.getElementById("l3");
regsub.addEventListener("click",async(e)=>{
   e.preventDefault();
   try{
    let user={
        name:username.value,email:useremail.value,password:userpassword.value
    }
        const response=await fetch("http://localhost:3000/Register",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            });
               console.log(response);
            // Check if the request was successful
            if (!response.ok) {
              throw new Error(' response  not ok');
    }
    else{
        alert("user added");
    }
    }
   catch(err){
console.log(err);
   }
})




loginsub.addEventListener("click",async(e)=>{
    e.preventDefault();
    try{
     let user={
         email:loginemail.value,password:loginpassword.value
     }
         const response=await fetch("http://localhost:3000/Login",{
             method:"POST",
             headers: {
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify(user)
             });
                console.log(response);
             // Check if the request was successful
             if (!response.ok) {
               throw new Error(' response  not ok');
     }
     else{
         alert("user logined");
     }
     }
    catch(err){
 console.log(err);
    }
 })