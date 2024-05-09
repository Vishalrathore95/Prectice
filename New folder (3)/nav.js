let obj = [
    {
        page:'home',
        link:'home.html'
    },
    {
        page:'about',
        link:'about.html'
    },
    {
        page:'contact',
        link:'contact.html'
    },


]

let cocialobj =[
    {
        href:'#',
        icon: '<i class="fa-brands fa-instagram">'
    },
    {
        href:'#',
        icon: '<i class="fa-brands fa-twitter"></i>'
    },
    {
        href:'#',
        icon: '<i class="fa-brands fa-instagram">'
    }
]

let pagecontainer =document.querySelector('.pages')
let pageArr= pageobj.map(item)=>{
    return   ` <li class="page"><a href=${item.link}>${item.page}</a></li>`
})
ageContainer.innerHTML = pageArr.join('')

let btn = document.querySelector('.menu')

btn.addEventListener('click', () => {
  let pages = document.querySelector('.pages')
  pages.classList.toggle('show')
  let icons = document.querySelector('.social-icons')
  icons.classList.toggle('show')
})

let socialContainer = document.querySelector('.social-icons')
let socialArr = socialObj.map((item) => {
  return ` <li class="social-icon"><a href=${item.href}>${item.icon}</a></li>`
})

socialContainer.innerHTML = socialArr.join('')