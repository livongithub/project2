// my variable to scroll through the Array
let counterVar = 0
let stamp = document.getElementById('placeholder')

let imageArray = ['img/norway.png','img/afghanistan.png', 
'img/australia.png', 'img/belgium.png','img/benin.png',
'img/cambodia.png','img/china.png','img/congo.png','img/cuba.png',
'img/czechoslovakia.png','img/france.png','img/germany.png',
'img/guinea.png','img/guyana.png','img/ireland.png',
'img/kampuchea.png','img/korea.png','img/magyar.png','img/mali.png',
'img/mauritania.png','img/mongolia.png','img/netherlands.png',
'img/polska.png','img/russia.png','img/rwanda.png','img/tanzania.png',
'img/tchalanda.png','img/togo.png','img/USA.png']


stamp.addEventListener('click', ()=>{

counterVar ++

if (counterVar>imageArray.length-1){
    counterVar=0
}

stamp.src = imageArray[counterVar]

})