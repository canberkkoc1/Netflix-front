var a = document.getElementsByClassName("para1");
 var i;
 for(i=0;i<a.length;i++){
     a[i].addEventListener("click",function(){
         this.classList.toggle("active");
         var para = this.nextElementSibling;
         if (para.style.maxHeight) {
            para.style.maxHeight = null;
         }else{
             para.style.maxHeight = para.scrollHeight + "px";
         }
     });
 }