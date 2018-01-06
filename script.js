const add = document.querySelector('.add')
const del = document.querySelector('.delete')
const todo = document.querySelector('.todo ul')
const done = document.querySelector('.done ul')
const todone = document.querySelectorAll('.it button')

function addTodo(e){
    const stuff = window.prompt("Add another to do item")
    todo.innerHTML += `
    <li class="it"> ${stuff}<button> > </button> </li>
    `
    const todone = document.querySelectorAll('.it button')
    todone.forEach(function(change){
        change.addEventListener('click', function(e){
            console.log('fghgghhghghg')
            moveTodo(e)
        })
    })
}

function moveTodo(e){
    done.appendChild(e.target.parentNode)
    e.target.parentNode.removeChild(e.target)
}

add.addEventListener('click', function(e){
    addTodo(e)
})

todone.forEach(function(change){
    change.addEventListener('click', function(e){
        moveTodo(e)
    })
})

del.addEventListener('click', function(e){
    const doneItems = done.querySelectorAll('li')
    done.removeChild(doneItems[0])
})
