const card2 = document.getElementById("card2")

card2.addEventListener('click',flipCard);

function flipCard(){
    card2.classList.toggle("flipCard");

}

function mesg(){
    alert('You have Successfully Subscribed');
}