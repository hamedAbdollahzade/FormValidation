//! ------------------ add controler filde mobile ------------------------------------
    function validatPhone(event) {
        // گفتم حالت پیش فرض این باشه ک اشتباهه مگه خلافش ثابت بشه 
        document.querySelectorAll('span')[0].style.display = '';
        let phone = event.target.value;
        if ( phone.length == 11 )
        {
            for (let i = 0; i < 11 ; i++) {   
                if( phone[i] >= 0 && phone[i] <= 9)
                {document.querySelectorAll('span')[0].style.display = 'none';}
            }
        }
    }
//! ------------------- end of controler filde mobile -------------------------------

//? ------------------- start controler filde pass 1 --------------------------------
    function validatPass(event) {
        document.querySelectorAll('span')[1].style.display = '' ;
        let pass = event.target.value ;
        if (pass.length == 8){document.querySelectorAll('span')[1].style.display = 'none' ;}
    }
//? ------------------- end controler filde pass 1 --------------------------------

//! ------------------- start controler filde Repeat Pass2 -------------------------------
    function validatRepeatPass(event) {

        document.querySelectorAll('span')[2].style.display = ''; 
        let p1 = document.getElementById('pass_input1').value ;
        let p2 = document.getElementById('pass_input2').value ;
        if (p1 == p2) {document.querySelectorAll('span')[2].style.display = 'none';}
    }
//! ------------------- End controler filde Repeat Pass2 -------------------------------