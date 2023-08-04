import homepage from "./homepage"

function createAbout(){
    const aboutPage = document.createElement('div')

    const button = document.createElement('button')
    button.textContent = 'Home'
    button.addEventListener('click', () => {
        homepage()
    })
 

    const title = document.createElement('h1')
    title.textContent = 'This Taco webpage is nothing but a front to another illegitimate bussiness, which is making actual shitty tacos.'

    const secondHeader = document.createElement('h2')
    secondHeader.textContent = 'Being born in 1696, a very long family biz, TACO stands for Taking Accountabilty of Crappy Operations. Below is an easy to read map of where you can find some of our establishments.'

    const image = document.createElement('img')
    image.src = "maps.jpg"

    const thirdHeader = document.createElement('h3')
    thirdHeader.textContent = 'For more information, call this number'

    const fourthHeader = document.createElement('h4')
    fourthHeader.textContent = 'XOXOXOXOXOXXOXO'




    aboutPage.appendChild(button)
    aboutPage.appendChild(title)
    aboutPage.appendChild(secondHeader)
    aboutPage.appendChild(image)
    aboutPage.appendChild(thirdHeader)
    aboutPage.appendChild(fourthHeader)

    return aboutPage
}

function makeAbout(){

    const content = document.getElementById('content')

    
        content.innerHTML = ``
        const fullabout = createAbout()

        content.appendChild(fullabout)


    
}

export default makeAbout
