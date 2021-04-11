function newItem(){

//adding a new item to the list
  let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#input').append(li);
    }

//crossing an item out
  function crossOut(){
    li.toggleClass('strike');
  }
  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //
}
