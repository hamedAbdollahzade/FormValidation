//! ------------------ add controler filde mobile ------------------------------------
    function validatPhone(event) {
        // گفتم حالت پیش فرض این باشه ک اشتباهه مگه خلافش ثابت بشه 
        document.querySelectorAll('span')[0].style.display = '';
        document.querySelectorAll('form input')[0].style.border = '2px red solid';
            let phone = event.target.value;
            // debugger
        // اینجا میام سه حالت اینکه فقط عدد باشه و با صفر و نه شرووع بشه رو بررسی میکنم بعد وارد فاز بعدی میشم ک همه کارکتر ها عدد باشن 
            if ( Number(phone) && phone[0] == 0 && phone[1] == 9 )
            {
                        for (let i = 0; i < 11 ; i++) {   
                            if( phone[i] >= 0 && phone[i] <= 9)
                            {
                                document.querySelectorAll('span')[0].style.display = 'none';
                                document.querySelectorAll('form input')[0].style.border = '';
                            }
                        }      
            }
        }
//! ------------------- end of controler filde mobile -------------------------------

//? ------------------- start controler filde pass 1 --------------------------------
    function validatPass(event) {
        document.querySelectorAll('span')[1].style.display = '';
        document.querySelectorAll('form input')[1].style.border = '2px red solid';
            let pass = event.target.value ;
            if (pass.length == 8){
                document.querySelectorAll('span')[1].style.display = 'none' ;
                document.querySelectorAll('form input')[1].style.border = '';
            }
        }
//? ------------------- end controler filde pass 1 --------------------------------

//! ------------------- start controler filde Repeat Pass2 -------------------------------
    function validatRepeatPass() {
        document.querySelectorAll('span')[2].style.display = '';
        document.querySelectorAll('form input')[2].style.border = '2px red solid'; 
            let p1 = document.getElementById('pass_input1').value ;
            let p2 = document.getElementById('pass_input2').value ;
            if (p1 == p2) {
                document.querySelectorAll('span')[2].style.display = 'none';
                document.querySelectorAll('form input')[1].style.border = '';
            }
        }
//! ------------------- End controler filde Repeat Pass2 -------------------------------