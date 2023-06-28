//! ------------------ add controler filde mobile ------------------------------------
    function validatPhone(event) { 
        // این تابع رو برای بررسی صحت شماره تلفن های صفحه لاگین و ریجستری نوشتم     
        let phone = event.target.value;
        //debugger
        // اینجا میام سه حالت اینکه فقط عدد باشه و با صفر و نه شرووع بشه رو بررسی میکنم بعد وارد فاز بعدی میشم ک همه کارکتر ها عدد باشن 
            if ( Number(phone) && phone[0] == 0 && phone[1] == 9 && phone.length == 11 )
            { 
                // دستور فور تا کوچکتر مساوی یازده رقم وارد میکنم چون از صفر شروع میشه
                        for (let i = 0; i < 11 ; i++) {   
                            if( phone[i] >= 0 && phone[i] <= 9)
                            {
                                document.querySelectorAll('span')[0].style.display = 'none';
                                document.querySelectorAll('form input')[0].style.border = '';
                            }
                            else
                            {
                                document.querySelectorAll('span')[0].style.display = '';
                                document.querySelectorAll('form input')[0].style.border = '2px red solid';
                                // اینجا بریک پوینت گذاشتم چون تو دیباگ کردن فهمیدم یازده بار شرط رو چک میکنه حتی اگه اشتباه باشه 
                                break;
                            }
                        }      
            }
            // این الس رو گذاشتم چون اگه کاربر حتی با رقم صفر و نه وارد کنه ولی طولش کمتر از یازده رقم باشه بازم پیغام خطا نشون نمیده چون وارد حلقه بعدی نمیشه 
            else
                {
                    document.querySelectorAll('span')[0].style.display = '';
                    document.querySelectorAll('form input')[0].style.border = '2px red solid';
                }
        }
//! ------------------- end of controler filde mobile -------------------------------

//? ------------------- start controler filde pass 1 -------------------registery-------------
    function validatPassReg1(event) {
        // ی تابع نوشتم برای اعتبار سنجی پسورد ک چک کنه ببینه هشت  رقم وارد شده باشه 
            let pass = event.target.value ;
            if (pass.length >= 8){
                document.querySelectorAll('span')[1].style.display = 'none' ;
                document.querySelectorAll('form input')[1].style.border = '';
            }
            else
            {
                document.querySelectorAll('span')[1].style.display = '';
                document.querySelectorAll('form input')[1].style.border = '2px red solid';
            }
        }
//? ------------------- end controler filde pass 1 --------------------------------

//! ------------------- start controler filde Repeat Pass2 ----------------------registery---------
    function validatRepeatPassReg2() {
         
            let p1 = document.getElementById('pass_input1').value ;
            let p2 = document.getElementById('pass_input2').value ;
            if (p1 == p2) {
                document.querySelectorAll('span')[2].style.display = 'none';
                document.querySelectorAll('form input')[1].style.border = '';
            }
            else
            {
                document.querySelectorAll('span')[2].style.display = '';
                document.querySelectorAll('form input')[2].style.border = '2px red solid';
            }
        }
//! ------------------- End controler filde Repeat Pass2 -------------------------------