            const form = document.getElementById('form');
            const email = document.getElementById('email');
            const password1 = document.getElementById('password1');
            
            form.addEventListener('submit',function(e){
                e.preventDefault();
                checkInputs();
            });
            
            function checkInputs(){
                const emailValue =  email.value.trim();
                const password1Value =  password1.value.trim();
            
                
                if( emailValue ==='')
                {
                    showError(email,"Email Id can not be blank");
                }
                else if(!isEmailValid(emailValue))
                {
                    showError(email,"Email is not Valid");
                }
            
                else if( password1Value ==='')
                {
                    showError(password1,"Password can not be blank");
                }
                else
                {
                    showSuccess(password1);
                }
            
                 
            
            }
            
            function showError(input,msg)
            {
                const formControl = input.parentNode;
                formControl.className = 'form-control error';
                const small = formControl.querySelector('small');
                small.innerHTML = msg;
            }
            function showSuccess(input)
            {
                const formControl = input.parentNode;
                formControl.className = 'form-control success';
                location.href="detail-form.html";
            }
            
            function isEmailValid(email1){
                return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email1);
            }
