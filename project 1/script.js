const form=document.getElementById("myform");
        const username=document.getElementById("username"); 
        const userage=document.getElementById("age");
        const nameError=document.getElementById("nameError");
        const ageError=document.getElementById("ageError");
        const successMessage=document.getElementById("successMessage");

        form.addEventListener("submit",function(e){
            e.preventDefault();

            let valid=true;
            nameError.textContent = "";
            ageError.textContent = "";
            successMessage.textContent = "";

            if(username.value.trim().length < 3){
                nameError.textContent = "Name must be at least 3 characters long";
                valid = false;
            }
            if(userage.value < 18){
                ageError.textContent = "You must be at least 18 years old";
                valid = false;
            }
            if(valid){
                successMessage.textContent="Form Submitted successfully!";
                form.reset();
            }



        });