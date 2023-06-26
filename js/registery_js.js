//! ------------------ add control filde mobile ------------------------------------
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
//! ------------------- end of control filde mobile -------------------------------
//? ------------------- start control filde pass 1 --------------------------------

    function validatPass(event)
    {
        document.querySelectorAll('span')[1].style.display = '' ;
        let pass = event.target.value ;
        if (pass.length == 8){
            document.querySelectorAll('span')[1].style.display = 'none' ;
        }
        
    }



//? ------------------- end control filde pass 1 --------------------------------