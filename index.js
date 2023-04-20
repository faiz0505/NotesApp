// variable declaration
const addBtn = document.getElementById('add-notes-btn');
const backBtn = document.getElementById('back-btn');
const saveBtn = document.getElementById('save-btn');
const inputPage = document.getElementById('input-page');
const inputedTitle = document.getElementById('input-title');
const inputedContent = document.getElementById('input-content');
const noteContainer = document.querySelector(".saved-notes");

saveBtn.addEventListener("click", () => {
  if(inputedTitle.value === ''){
    alert('please enter something')
  }else{
  createNoteElement(inputedTitle.value,inputedContent.value);
  saveData();
  inputedTitle.value = ''
  inputedContent.value = ''
  }
  inputPage.style.transform = 'translateY(0)';
});


function createNoteElement(title, content) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const img = document.createElement('img');

  li.classList.add('note');
  h1.classList.add('note-title');
  p.classList.add('note-content');
  img.classList.add('delete');

  h1.textContent = title;
  p.textContent = content;
  img.setAttribute('src', 'delete.png');

  div.appendChild(h1);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(img);
  noteContainer.appendChild(li);
}


addBtn.addEventListener("click",()=>{
  inputPage.style.transform = 'translateY(-100vh)';
});

backBtn.addEventListener('click',()=>{
  inputPage.style.transform = 'translateY(0)';
});

noteContainer.addEventListener("click", (e)=>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData(){
    localStorage.setItem('data',noteContainer.innerHTML);
  }
  function getData(){
    noteContainer.innerHTML = localStorage.getItem('data');
  }
 getData();