/*JS xóa border và text trong khung grid */
document.addEventListener("DOMContentLoaded", function(){
    var div=document.querySelectorAll("div");
    div.forEach(function(i){
        i.textContent="";
        i.style.border="none";
    });

})

