/*let card_title= document.querySelectorAll('.card-title');

card_title.forEach(titles => {
    titles.style.color= 'red';

});
console.log(card_title);*/

/*let star= document.querySelectorAll('.star');
star.forEach(star_element => {
    star_element.onclick = () =>{
        for (let i = 0; i< star.length; i++) {
            star[i].style.color = 'yellow';
            
        }
    }
});*/ 

function calificador(item) {
    console.log(item);
/*esto es para introducirnos dentro de del id y coger
 solo en numero de star1 o 2 o 3..*/
    let cont =parseInt(item.id[4]) /*pq 4? por lo de star? son 4 posiciones*/
    /* esto es para cuando hagamos un click en una estrella pues
    se iluminaran solo la que pulse y las que esten por de bajo
    por eso lo de que sea menor que en cont*/
    for (let i = 0; i < 5; i++) {
        if (i < cont) {
          document.getElementById(`star` +`${i+1}`).style.color ='orange';
     
        } else{
         document.getElementById(`star` + `${i+1}`).style.color ='black';
        }
         
     }   
}

