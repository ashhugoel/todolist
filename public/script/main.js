

$(".checkbox").on("change",(event)=>{console.log($(event.target).siblings().toggleClass("cut"));});
