const form=document.querySelector('form')
//ya toh post mai submit hota  hai ya(post ya get)se hota  ha
form.addEventListner('submit',function(e){
    //rokna padega
    e.preventDefault()

const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const results=parseInt(document.querySelector('#results').value)


if(height===''||height<0||isNaN(height)){
    results.innerHTML="Please give a Valid Height"
    
}
else if(weight===''||weight<0||isNaN(weight)){
    results.innerHTML="Please give a Valid Weight"
    
}
else{
   const bmi= (weight/((height*height)/10000)).toFixed(2)
//show the  result
results.innerHTML=`<span>${bmi}</span>`;
}

});