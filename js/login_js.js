//! ------------------ add controler filde mobile ------------------------------------
function validatPhone(event) {
    // گفتم حالت پیش فرض این باشه ک اشتباهه مگه خلافش ثابت بشه 
    document.querySelectorAll('span')[0].style.display = '';
    document.querySelector('form input').style.border = '2px red solid'
    let phone = event.target.value;
    if( Number(phone) && phone[0]== 0 && phone[1]== 9 && phone.length == 11)
    {
            for (let i = 0; i < 11 ; i++) {   
                if( phone[i] >= 0 && phone[i] <= 9)
                {
                    document.querySelectorAll('span')[0].style.display = 'none';
                    document.querySelector('form input').style.border = ''
                }
            }   
    }
}
//! ------------------- end of controler filde mobile -------------------------------