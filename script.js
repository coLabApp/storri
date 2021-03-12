const cardBoard = document.querySelector('.indexCardBoard');
        const btns = document.querySelectorAll('button');
        const menu = document.querySelector('ul');

        btns.forEach(btn =>{
            btn.addEventListener('click', (e) => {
                const target = e.target.classList
                if(target.contains('Who')){
                    createPrompt("Who")
                }else if(target.contains('What')){
                    createPrompt("What")
                }else if(target.contains('When')){
                    createPrompt("When")
                }else if(target.contains('Why')){
                    createPrompt("Why")
                }else if(target.contains('How')){
                    createPrompt("How")
                }else if(target.contains('Where')){
                    createPrompt('Where')
                }else{
                    showMenu();
                    
                }
                
            })
        });
        
 

        function createPrompt (section){
            const card = document.createElement('div');
            card.innerHTML = 
            `<div class="cardContainer">
                <div class="tools">
                    <button class="edit"><i class="fas fa-edit"></i></button>
                    <button class="delete"><i class="fas fa-trash-alt"></i></button>
                </div>
                <h1>${section}</h1>
                <textarea class="card" placeholder="write here"></textarea>
            <div>`
            const editBtn = card.querySelector('.edit');
            const deleteBtn = card.querySelector('.delete');
            cardBoard.appendChild(card)

            deleteBtn.addEventListener('click', function () {
                card.remove()
            })
        } 

        function showMenu(){
            menu.classList.toggle('active');
            
        }