let addbtn = document.getElementById('btn')
        addbtn.addEventListener('click', Additems)
        let ParentUi = document.getElementById('Parent');
        ParentUi.addEventListener('click', function (event) {
            let target = event.target;

            if (target.classList.contains('btn-danger')) {
                RemoveItem(target);
            } else if (target.classList.contains('btn-success') || target.textContent === "Done") {
                EditItem(target);
            }
        });

        function Additems(e) {
            let currentbtn = e.currentTarget;
            let currentIP = currentbtn.previousElementSibling
            let CurrentItemName = currentIP.value.trim()

            if(CurrentItemName===""){
                alert("Please Add item First there is nothing in itembox");
                return ;
            }
            currentIP.value = "";
        
            if (ParentUi.children[0].className == "DefaultMtMsg") {
                ParentUi.children[0].remove();
            }

            // console.log(e)
            let newLi = document.createElement('li')
            // newLi.classList.add('list-group-item d-flex justify-content-between mt-2')
            newLi.className = 'list-group-item d-flex justify-content-between mt-2'
            newLi.innerHTML = `<h5 class="flex-grow-1">${CurrentItemName}</h5>
            <button class="btn btn-danger mr-2" onclick="RemoveItem(this)">Remove</button>
            <button class="btn btn-success">Edit</button>`
            
            ParentUi.appendChild(newLi)
             
        }

            
        
        function RemoveItem(CurrentElement) {
            CurrentElement.parentElement.remove()
            let ParentUi = document.getElementById('Parent');

            if (ParentUi.children.length <= 0) {
                let EmptyMsg = document.createElement("h4")
                EmptyMsg.textContent = "Nothing Is here. Please Add Items !!";
                EmptyMsg.classList.add("DefaultMtMsg")
                ParentUi.appendChild(EmptyMsg)
            }
        }
        

        function EditItem(CurrentElement) {
            if (CurrentElement.textContent === "Done") {
                let CurrItemName = CurrentElement.previousElementSibling.previousElementSibling.value
                let CurrHeading = document.createElement('h3')
                CurrHeading.className = "flex-grow-1"
                CurrHeading.placeholder = "Item Name"
                CurrHeading.textContent = CurrItemName
                CurrentElement.textContent = "Edit"
                CurrentElement.parentElement.replaceChild(CurrHeading, CurrentElement.previousElementSibling.previousElementSibling)
            }
            else {
                CurrentElement.textContent = "Done"
                const CurrItemName = CurrentElement.previousElementSibling.previousElementSibling.textContent
                const CurrInput = document.createElement("input")
                CurrInput.type = "text"
                CurrInput.placeholder = "Item Name"
                CurrInput.className = "form-control"
                CurrInput.value = CurrItemName

                CurrentElement.parentElement.replaceChild(CurrInput, CurrentElement.previousElementSibling.previousElementSibling)


            }




        }

