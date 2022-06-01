var user = document.getElementById("FormS15");

user.addEventListener('submit',function(e){
    e.preventDefault()
   var search=document.getElementById("search").value
   var originalName=search.split('').join('')
    alert(originalName)
   fetch("https://api.github.com/users/"+originalName)
    .then((display)=>display.json())
    .then((data)=>{
        console.log(data)
        document.getElementById("display").innerHTML='<iframe width="50%" height="400px" src="https://www.github.com/${originalName); style="-webkit-transform:scale(0.5);-moz-transform-scale(0.5);"></iframes>'

   })
}) 