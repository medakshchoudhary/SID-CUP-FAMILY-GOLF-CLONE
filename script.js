var crsr = document.querySelector("#cursor") // dom mai pard lena agey 

// document sai pura html select hoh jaeyga ,, ad event listener sai joh joh kuch hoga record hoga kon? ==> mouse ki movements in this case kidr? ==> function (xyz) ke andar 
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"; // px isliye likha kyunki wrt to what move hoga uske liye samjh nhi aya toh bad mai dom pardna hai tab ajeyga samj 
    crsr.style.top = dets.y + "px";
})



// gsap is a librabry of js used for animations
// scoll triger use karke ham animations ko scroll hone par hi chaleygey 

gsap.to("#nav",{
    backgroundColor : "black", // css ki koi bhi property ham de saktey hai by using CAMEL CASE THAT IS background-color ==> backgroundColor

    duration:0.5, // itne time bad load hogi ~ Plus seconds likhne ki zarurat nhi hai 
    height: "110px", // load hone ke bad jitni bhi nav ki css mai height hai change hokr js jitni hoh jaeygi 

    scrollTrigger:{
        trigger:"#nav", // triggers the mentioned element 
        scroller:"body", // mentioned element will be triggered jab mai yaha pai mentioned element ko scroll karunga  

        // markers:true, // is sai pata chaleyga ki chl raha hai ya nhi jab tak maine iske neeche wala yani ki START nhi diya tha tab tak it was starting from zero ..... to be continued

        start:"top -10%", // lekin jab maine yeh dala toh woh animation tabi trigger hui jab maine thorda sa scroll kiya >>>>> aur start matlab upar sai neeche atey time 4 percent pai activate 

        end:"top -11%", // aur end sai 5 percent matlab upar jatey time jaisey hi 5 percent bacha hoga animation khatam

        scrub:1, // yeh repeat mai help karta hai like == > jab mai neeche jaunga iske bina aur wapis aunga upar toh yeh wahi raheyga,,,, Par iske hone pai upar jane pai start mai waisey hi raheyga >>>>>>>>> and ham scrub ki value - sai 5 tak bhi de saktey hai 
    }

})

gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        start : "top -25%",
        end: "top -70%",
        scrub:1,
    }
})