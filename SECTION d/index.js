
let bucketList = [];

function displayList() {
  const listElement = document.getElementById('list');
  listElement.innerHTML = ''; 

  bucketList.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function () {
      deleteItem(index);
    };
    
    listItem.appendChild(deleteButton);
    
    listElement.appendChild(listItem);
  });
}

function addItem() {
  const bucketItemInput = document.getElementById('bucketItem');
  const newItem = bucketItemInput.value.trim();  

  if (newItem) {
    bucketList.push(newItem);  
    bucketItemInput.value = ''; 
    displayList();  
  } else {
    alert("Please enter a valid item.");
  }
}

function deleteItem(index) {
  bucketList.splice(index, 1);  
  displayList();  
}
