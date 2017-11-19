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
const lis = listUl.children;
const firstchilditem = listUl.firstElementChild;
const lastchilditem = listUl.lastElementChild;

firstchilditem.style.backgroundColor = 'lightgreen';
lastchilditem.style.backgroundColor = 'lightskyblue';

let attachListItemButtons = (li) => {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1){

  attachListItemButtons(lis[i]);

}

       listUl.addEventListener('click', (event) => {   
          if (event.target.tagName == 'BUTTON'){
            
            if(event.target.className == 'remove'){
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
          }

            if(event.target.className == 'up'){
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if(prevLi){
            ul.insertBefore(li, prevLi);
                      }
          }
            if(event.target.className == 'down'){
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if(nextLi){
            ul.insertBefore(nextLi, li);

              }
          } 
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
                               attachListItemButtons(li);
                               ul.appendChild(li);
                               addItemInput.value = '';
}else {
    addItemButtonWarning.style.color = 'Red';
    addItemButtonWarning.style.display = 'block';
      }
                               });




