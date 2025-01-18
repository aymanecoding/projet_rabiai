


let names=['zouhir','elouahabi','jalil','hicham']
let sit=['celebataire','celebataire','marié','marié']

let container =document.createElement('div')
document.body.appendChild(container)
container.style.textAlign='center' 
 

function element(names,sit) {
let card=document.createElement('div')
let title=document.createElement('h3')
let spa=document.createElement('p')
let img=document.createElement('img')

let content=document.createTextNode(names)
let situa=document.createTextNode(sit)
img.src='image/img.jpg'

title.appendChild(content)
spa.appendChild(situa)

card.style.width='200px'
card.style.background='#444'
card.style.color='#fff'
card.style.padding='10px'
card.style.margin='2px'
card.style.display='inline-block';
img.style.width='100%'

card.appendChild(title)
card.appendChild(spa)
card.appendChild(img)

container.appendChild(card);
}

for (let i=0;i<4;i++){
    element(names[i],sit[i]);
}  
