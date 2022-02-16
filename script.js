const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')