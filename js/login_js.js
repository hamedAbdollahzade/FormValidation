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