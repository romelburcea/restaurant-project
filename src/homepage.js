import makeAbout from "./about"
import displayMenu from "./menu"

function create(){
    
    const container = document.createElement('div')

    const title = document.createElement('h1')
    title.textContent = 'Best Tacos Restaurant in the World'
    container.appendChild(title)

    const button1 = document.createElement('button')
    button1.setAttribute('id', 'aboutButton')
    button1.textContent = 'About'
    container.appendChild(button1)

    const button2 = document.createElement('button')
    button2.setAttribute('id', 'menuButton')
    button2.textContent = 'Menu'
    container.appendChild(button2)



    const header = document.createElement('h2')
    header.textContent = 'Welcome to the bestest restaurant in the entire world. We serve tacos.'
    container.appendChild(header)

    const image = document.createElement('img')
    
    image.src = "pic.jpg"

    container.appendChild(image)

    const para = document.createElement('p')
    para.innerHTML = 'Please enjoy the Taco Rangoon and sit tight until I come back, says Pagan Taco'
    container.appendChild(para)

    return container
}

function homepage(){
    const content = document.getElementById('content')
    

    const home = create()

    content.innerHTML = ``
    content.appendChild(home)

    const btn = document.getElementById('aboutButton')
    btn.addEventListener('click', () => {
        content.innerHTML = ``
        const fullabout = makeAbout()
        content.appendChild(fullabout)
    })
    

    const btn2 = document.getElementById('menuButton')
    btn2.addEventListener('click', () => {
        content.innerHTML = ``
        const fullmenu = displayMenu()
        content.appendChild(fullmenu)
    })
    
}

export default homepage