import homepage from "./homepage"

function createMenu(){
    const menu = document.createElement('div')
    menu.setAttribute('id', 'menu')

    const homebtn = document.createElement('btn')
    homebtn.textContent = 'Home <--- the button does not look like one, but it is'
    homebtn.setAttribute('id', 'homebtn')
    homebtn.addEventListener('click', () => {
        homepage()
    })
    menu.appendChild(homebtn)

    const header = document.createElement('h1')
    header.textContent = 'If you were curious, here are some of the top choices in our menu'
    menu.appendChild(header)

    
    return menu
}

function displayMenu(){
    const content = document.getElementById('content')
    const menu = document.getElementById('menu')
    const menuss = createMenu()

    content.innerHTML = ``
    content.appendChild(menuss)
    const menus = [
        selection(
            'download.jpg',
            'This is by far the plainest tacos you have ever seen'
        ),

        selection(
            'menu/download2.jpg',
            'This is just another taco'
        ),

        selection(
            'menu/download3.jpg',
            'God has blessed you with this taco, should you choose'
        ),

        selection(
            'menu/images4.jpg',
            'Bla bla taco bla bla bla taco'
        ), 
        
        selection(
            'menu/images5.jpg',
            'TACO TACO TACO TACO TACO'
        )
    ]


    menus.forEach((stuff) => {
        content.appendChild(stuff)
    })
}


function selection(src, desc){
    const menu = document.getElementById('menu')

    const img = document.createElement('img')
    img.setAttribute('src', src)

    const description = document.createElement('div')
    description.textContent = desc

   menu.append(img) 
   menu.append(description)



}

export default displayMenu