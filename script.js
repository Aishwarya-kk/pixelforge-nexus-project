async function login(){

 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;

 const res = await fetch("http://localhost:5000/api/auth/login",{
  method:"POST",
  headers:{
   "Content-Type":"application/json"
  },
  body: JSON.stringify({ email, password })
 });

 const data = await res.json();

 if(data.token){
  localStorage.setItem("token", data.token);
  window.location = "dashboard.html";
 }else{
  alert("Login Failed");
 }
}
async function createProject(){

 const token = localStorage.getItem("token");

 const name = document.getElementById("pname").value;
 const description = document.getElementById("pdesc").value;

 const res = await fetch("http://localhost:5000/api/projects",{
  method:"POST",
  headers:{
   "Content-Type":"application/json",
   Authorization:"Bearer " + token
  },
  body: JSON.stringify({
   name,
   description
  })
 });

 const data = await res.json();

 alert("Project Created");

 loadProjects();
}