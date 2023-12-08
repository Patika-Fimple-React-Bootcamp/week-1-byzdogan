// fetching data from API
const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    const res = await fetch(url)
    console.log(res)
    const data = await res.json()
    console.log(data)
    return data
}

const taskList = document.querySelector('.list')

// displaying fetched data
const printData = (data) => {    
    data.forEach(item => {
        const listItem = document.createElement('li')
        const task = document.createElement('span')
        var isDone = document.createElement('input')
        isDone.type = 'checkbox'
        if(item.completed === true) {
            isDone.checked = true
        }else{
            isDone.checked = false
        }
        task.innerText = item.title
        listItem.appendChild(isDone)
        listItem.appendChild(task)
        taskList.appendChild(listItem)               
    });  
}

const init = async () => {
    const todo = await fetchData()
    console.log(todo)
    printData(todo)
}

init()

// a function for adding a new task to the taskList
const btn = document.querySelector('#addTask')
btn.addEventListener('click', () => {
    const taskSpan = document.createElement('span')
    const taskForm = document.querySelector('#taskForm')
    const taskInput = document.querySelector('#taskText')
    const task = taskInput.value
    const checkbox = document.querySelector('#isDone')
    var isDone = document.createElement('input')
    isDone.type = 'checkbox'
    console.log(isDone)
    console.log(isDone.value)
    if(checkbox.checked) {
        isDone.checked = true
    }else{
        isDone.checked = false
    }
    if(task === ''){
       alert('Please enter a task')
       return  
    } 
    const listItem = document.createElement('li')
    taskSpan.innerText = task
    listItem.appendChild(isDone)
    listItem.appendChild(taskSpan)    
    taskList.appendChild(listItem)
    taskForm.reset();
})
