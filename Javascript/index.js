// get all blogs from backend

const trend = document.querySelector(".trend");

const getAllBlogs = async()=>{
    try{
       // get all data 
       
       const response = await fetch("http://localhost:3000/getAllPost");

       if(response.ok){
         const data = await response.json();
         const arr = data.posts;
         console.log(arr[0].title);
            
         for(let i=0; i<arr.length; i++){
            const trending = document.createElement("div");
            trending.className="trending";
            const img = document.createElement("img");
            img.src = `http://localhost:3000/${arr[i].image}`;
            
            const username = document.createElement("p");
            username.className = "username";
            username.innerText = arr[i].title;

            // trending.appendChild(img);
            trending.appendChild(username);
            trend.appendChild(trending);
         }
       }
       else{
        console.log("err");
       }

    } catch(err){
        console.log(err);
    }
}

getAllBlogs();