let input=document.getElementById('design');
let p=document.getElementById('p');
let a = document.getElementById('btn')


a.addEventListener('click',()=>{
if(input.value ===''){
    alert('Please enter your Notes')

}
let li=document.createElement('li')
li.innerHTML=`${input.value}<i class="fa-solid fa-xmark"></i>`
li.className='li'
p.appendChild(li)
input.value=''
li.addEventListener('click',()=>{
    li.remove()
})
})