var likes =document.getElementsByClassName('like')

for (let Y = 0 ; Y<likes.length; Y++){

let like= likes[Y];

like.addEventListener("click",function(){

if (like.style.color == "red"){
  like.style.color = "black"
    
}
else{
    like.style.color ="red"

}

}) 
}

var  deletes = document.getElementsByClassName('delete')
console.log(deletes)
for (let O = 0 ; O<deletes.length; O++){
let del = deletes[O];
del.addEventListener("click", function(){

del.parentElement.remove()
Islam() ;

})
}





var pluus = document.getElementsByClassName("plus")
for(let C=0; C<pluus.length;C++){
let plusieur  = pluus[C];

plusieur.addEventListener("click",function(){

    plusieur.previousElementSibling.value ++;
    Islam() ;
})
}

var minuus = document.getElementsByClassName("minus")
console.log(minuus)
for(let M =0; M<minuus.length;M++){
let islam = minuus[M];
islam.addEventListener("click", function(){


    islam.nextElementSibling.value --;
    Islam() ;


})


}


var conteur = document.getElementsByClassName('div1');
var finalPrice = document.getElementById("price")

console.log(conteur)
function Islam() {

let sum = 0 ;

for(let B =0; B<conteur.length;B++){


   
    let div1 = conteur[B];
    sum+=
    div1.querySelector(".product-price").innerText * div1.querySelector(".input-2").value;


}
return price.value = sum

} Islam() 