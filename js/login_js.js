//! ------------------ add controler filde mobile ------------------------------------
function validatPhone(event) {
    // گفتم حالت پیش فرض این باشه ک اشتباهه و المنت رو نمایش بده مگه خلافش ثابت بشه 
    document.querySelectorAll('span')[0].style.display = '';
    // اینجا بهش گفتم اولین تگ فرم اولین اینپوتش رو بگیر و بوردر قرمز دو پیکسل سالید رو بهش بده
    document.querySelector('form input').style.border = '2px red solid'
    // اینجا ایونتی ک از اونطرف پاس دادم گرفتم و تارگتش ک المنت اینپوت هست رو مقدارشو ریختم داخل متغییر فون ک بتونم روش عملیات انجام بدم
    let phone = event.target.value;
    // اینجا بین شرطام از عملگر منطقی و استفاده کردم ک باید همه شرط ها برقرار باشه تا وارد مرحله بعدی بررسی بشه 
    if( Number(phone) && phone[0]== 0 && phone[1]== 9 && phone.length == 11)
    {
        // اینجا یازده کارکتر رو بررسی میکنه ک عدد باشن و اگه درست بود پیغام خطا رو با سلکتور سی اس اسی حذف میکنه 
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