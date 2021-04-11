function newItem(){

//adding a new item to the list
  let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
    }

//crossing an item out
  function crossOut(){
    li.toggleClass('strike');
  }
  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

//adding the delete button "x"
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('x'));
  li.append(crossOutButton);

  function deleteListItem(){
    li.addClass("delete")
  }
  crossOutButton.on("click", deleteListItem);

//reordering the items
  $('#list').sortable();
}
