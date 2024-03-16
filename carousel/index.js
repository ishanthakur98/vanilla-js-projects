var reviewList = [
    {
        name : "Sussan Smith",
        profession:"Web developer",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, illo. Temporibus in quod reiciendis cumque omnis ipsum eveniet architecto libero commodi totam?",
        image:"/ColorFlipper/carousel/images/susan.jpeg"
    },
    {
        name : "Jason Smith",
        profession:"Fill satck Web developer",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, illo. Temporibus in quod reiciendis cumque omnis ipsum eveniet architecto libero commodi totam?",
        image:"/ColorFlipper/carousel/images/jason.jpeg"
    },
    
        {
            name : "Willow Jackson",
            profession:"PHP developer",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, illo. Temporibus in quod reiciendis cumque omnis ipsum eveniet architecto libero commodi totam?",
            image:"/ColorFlipper/carousel/images/willow.jpeg"
        }
    
]
// addEventListener("DOMContentLoaded", (event) => {
//     console.log(loaded)
// });

var count = 0;

var btn = document.querySelectorAll(".btn");
document.addEventListener("click",(e)=>{
 var clickedButton = e.target.className;
 if(clickedButton.includes("previous")){
    console.log("previous");
    if(count==0){
        count = reviewList.length - 1;
    }else{
        count--;
    }
    
 }else if(clickedButton.includes("next")){
    console.log("next");
    if(count < reviewList.length -1){
        count++;
    }else{
        count = 0;
    }
 }else{
    console.log("random");
    count = Math.floor(Math.random() * (reviewList.length-1 - 0) + 0);
    console.log(count)
 }
 let image = document.querySelector(".employee-image");
 image.src = innerHTML=reviewList[count].image
 document.querySelector(".employee-name").innerHTML=reviewList[count].name;
 document.querySelector(".employee-dep").innerHTML=reviewList[count].profession;
 document.querySelector(".employee-desc").innerHTML=reviewList[count].description;

})
