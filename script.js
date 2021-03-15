const cardBoard = document.querySelector('.indexCardBoard');
        // const btns = document.querySelectorAll('button');
const menu = document.querySelector('ul');
const newBtn = document.querySelector('.new')
const scenes = document.querySelectorAll('.scene')

        // btns.forEach(btn =>{
        //     btn.addEventListener('click', (e) => {
        //         const target = e.target.classList
        //         if(target.contains('Who')){
        //             createPrompt("Who")
        //         }else if(target.contains('What')){
        //             createPrompt("What")
        //         }else if(target.contains('When')){
        //             createPrompt("When")
        //         }else if(target.contains('Why')){
        //             createPrompt("Why")
        //         }else if(target.contains('How')){
        //             createPrompt("How")
        //         }else if(target.contains('Where')){
        //             createPrompt('Where')
        //         }else{
        //             showMenu();
                    
        //         }
                
        //     })
        // });
        
    
        newBtn.addEventListener('click', createPrompt);

        function createPrompt (){
            const card = document.createElement('div');
            card.classList.add('openModal')
            card.innerHTML = 
            `<div class="cardContainer active">
                <div class="tools">
                    <button class="fullScreen"><i class="fas fa-expand-alt"></i></button>
                    <button class="delete"><i class="fas fa-trash-alt"></i></button>
                </div>
                <div>
                <textarea class="card textScreen" placeholder="write here"></textarea>
                </div>
                <button class="saveBtn">Save</button>
            <div>`

            card.setAttribute('draggable' , true)
            const fullScreen = card.querySelector('.fullScreen');
            const deleteBtn = card.querySelector('.delete');
            const cardContainer = card.querySelector('.cardContainer');
            const saveBtn = card.querySelector('.saveBtn');
            const textArea = card.querySelector('textarea')
            cardBoard.appendChild(card)

            saveBtn.addEventListener('click', function () {
                textArea.classList.toggle('textScreen')
                card.classList.toggle('openModal')
                cardContainer.classList.toggle('active')
                saveBtn.classList.add('hideDiv')
                
            })

            fullScreen.addEventListener('click', function () {
                textArea.classList.toggle('textScreen')
                card.classList.toggle('openModal')
                cardContainer.classList.toggle('active')
                saveBtn.classList.remove('hideDiv');
                
            })

            deleteBtn.addEventListener('click', function () {
                card.remove()
            })
        } 

        function showMenu(){
            menu.classList.toggle('active');
            
        }

        function dragStart(){

        }