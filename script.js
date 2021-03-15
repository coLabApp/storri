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
            const cards = document.createElement('div');
            cards.classList.add('openModal')
            cards.innerHTML = 
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

            cards.setAttribute('draggable' , true)
            const fullScreen = cards.querySelector('.fullScreen');
            const deleteBtn = cards.querySelector('.delete');
            const cardContainer = cards.querySelector('.cardContainer');
            const saveBtn = cards.querySelector('.saveBtn');
            const textArea = cards.querySelector('textarea')
            cardBoard.appendChild(cards)

            saveBtn.addEventListener('click', function () {
                textArea.classList.toggle('textScreen')
                cards.classList.toggle('openModal')
                cardContainer.classList.toggle('active')
                saveBtn.classList.add('hideDiv')
                
            })

            fullScreen.addEventListener('click', function () {
                textArea.classList.toggle('textScreen')
                cards.classList.toggle('openModal')
                cardContainer.classList.toggle('active')
                saveBtn.classList.remove('hideDiv');
                
            })

            deleteBtn.addEventListener('click', function () {
                cards.remove()
            })

            // const cardsSection = cards.querySelectorAll('.cards')
            
            // cardsSection.forEach(item =>{
            //     item.addEventListener('click', (e) =>{
            //         console.log(e.current.target)
            //     })
            // })

            // cards.querySelectorAll('.cards').forEach(card =>{
                cards.addEventListener('dragstart', dragStart)
                cards.addEventListener('dragend', dragEnd)

                for(const scene of scenes) {
                    scene.addEventListener('dragover', dragOver)
                    scene.addEventListener('dragenter', dragEnter)
                    scene.addEventListener('dragleave', dragLeave)
                    scene.addEventListener('drop', dragDrop)
                }
                
                function dragStart(e) {
                    e.currentTarget += ' hold' 
                }
                
                function dragEnd() {
                    this.className = 'fill'
                }
                
                function dragOver(e) {
                    e.preventDefault()
                }
                
                function dragEnter(e) {
                    e.preventDefault()
                    this.className += ' hovered'
                }
                
                function dragLeave() {
                    this.className = 'scene'
                }
                
                function dragDrop(e) {
                    this.className = 'scene'
                    this.append(cards)
                }
                  
            }
          
        function showMenu(){
            menu.classList.toggle('active');
            
        }

       