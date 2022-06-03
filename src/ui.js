// remove todo
const removeTodo = () => {
  const list = document.querySelector('#list-items');
  let LIST = JSON.parse(localStorage.getItem('TODO')) || [];
  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash')) {
      const tagId = e.target.closest('li').id;
      LIST = LIST.filter((todo) => todo.id !== parseInt(tagId, 10));
      LIST = LIST.map((todo, index) => {
        todo.id = index + 1;
        return todo;
      });
      //  LIST.splice(LIST.findIndex(a => a.id === parseInt(tagId)) , 1);
      localStorage.setItem('TODO', JSON.stringify(LIST));
      // document.getElementById(tagId).remove();
      window.location.reload();
    }
  });
};

export default removeTodo;