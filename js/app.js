const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const addItemButtonWarning = document.querySelector('p.addItemButtonWarning');
const descriptionButtonWarning = document.querySelector('p.descriptionButtonWarning');

       listUl.addEventListener('click', (event) => {   
          if (event.target.tagName == 'BUTTON'){
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
      });

      // listDiv.addEventListener('mouseover', (event) => {   
      //     if (event.target.tagName == 'LI'){
      //     event.target.textContent =  event.target.textContent.toUpperCase();
      //     event.target.style.color = "#768da3";
      //     event.target.style.textDecoration = "underline";
      //   }
      // });

      // listDiv.addEventListener('mouseout', (event) => {   
      //     if (event.target.tagName == 'LI'){
      //     event.target.textContent = event.target.textContent.toLowerCase();
      //     event.target.style.color = "#508abc";
      //     event.target.style.textDecoration = "none";
      //   }
      // });

//hide the add item warning button
addItemButtonWarning.style.display = 'none';
descriptionButtonWarning.style.display = 'none';

toggleList.addEventListener('click', () =>{
            if(listDiv.style.display == 'none') {
                toggleList.textContent = 'Hide list';
                listDiv.style.display = 'block';
}
               else { 
                      listDiv.style.display = 'none';
                      toggleList.textContent = 'Show list';
                    }
                            });
descriptionButton.addEventListener('click', () => {
                        if(!(descriptionInput.value == '' )){
                                  descriptionButtonWarning.style.display = 'none';
                                  descriptionP.innerHTML = descriptionInput.value + ':'
                                  descriptionInput.value = '';
                        }else{
                              descriptionButtonWarning.style.color = 'Red';
                              descriptionButtonWarning.style.display = 'block';

                        }          
                                   });

addItemButton.addEventListener('click', () => {
                               if(!(addItemInput.value == '' )){
                               
                               addItemButtonWarning.style.display = 'none';
                               let ul = document.getElementsByTagName('ul')[0];
                               let li = document.createElement('li');
                               li.textContent = addItemInput.value;
                               ul.appendChild(li);
                               addItemInput.value = '';
}else {
    addItemButtonWarning.style.color = 'Red';
    addItemButtonWarning.style.display = 'block';
      }
                               });




