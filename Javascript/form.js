let input=document.getElementById("inputs");
let image=document.getElementById("f1");
let title=document.getElementById("f2");
let content=document.getElementById("f3");
let fsub=document.getElementById("f4")

fsub.addEventListener("click",async(e)=>{
   e.preventDefault();
   
   console.log(image.files[0]);
   try{
    const formData = new FormData();
            formData.append('title' , title.value);
            formData.append('content' , content.value);
            formData.append('image' , image.files[0]);
            // formData.append("userId" , blog.userId);
            // formData.append("user" , token.name);
            //

            console.log(formData.title);
            const response=await fetch("http://localhost:3000/postBlog",{
             method:"POST",
             headers: {
                //  'Content-Type': 'application/json'
               },
               body: formData
             });
                console.log(response);
             // Check if the request was successful
             if (!response.ok) {
               throw new Error(' response  not ok');
             }
   }
   catch(err){
console.log(err);
   }
})