// این متغییر ها رو برای صحت اطلاعات کاربر درست کردم و گفتم پیش فرض اشتباه باشه مگه خلافش ثابت بشه 
// debugger
var v1 = false ;
var v2 = false ;
var v3 = false ; 

//! ------------------ add controler filde mobile ------------------------------------
    function validatPhone(event) { 
        // این تابع رو برای بررسی صحت شماره تلفن های صفحه لاگین و ریجستری نوشتم     
        //   اینجا ایونت رو گرفتم و مقدار تارگتش ک المنتی ک روشه رو گرفتم  
        let phone = event.target.value;
        //debugger
        // اینجا میام سه حالت اینکه فقط عدد باشه و با صفر و نه شرووع بشه رو بررسی میکنم بعد وارد فاز بعدی میشم ک همه کارکتر ها عدد باشن 
            if ( Number(phone) && phone[0] == 0 && phone[1] == 9 && phone.length == 11 )
            { 
                // اینجا ی حلقه زدم روی تک تک رقم های شمارم برای چک کردن  
                        for (let i = 0; i < 11 ; i++) {   
                            if( phone[i] >= 0 && phone[i] <= 9)
                            {
//  اینجا اولین اسپن رو با کوئری سلکتور گرفتم و دیسپلی ازش گرفتم چون میخواستم الرتم فعال نباشه وقتی شرط درسته 
                                document.querySelectorAll('span')[0].style.display = 'none';
                                // اینجا گفتم بوردر اولین اینپوت صفرمو اگه درست بود به حالت دیفالت برگردون 
                                document.querySelectorAll('form input')[0].style.border = '';
                                // اینجا برای ولیدیت مقدار ترو دادم بهش ک اخر بتونم چک کنم برای دکمه باتن فرمم
                                v1 = true
                            }
                            else
                            {
                        // گفتم اگه یکی اشتباه بود و اومد تو الس بیاد متن ارور رو نشون بده 
                                document.querySelectorAll('span')[0].style.display = '';
                        // اینجا هم ی بوردر قرمز برای اینپوتش گذاشتم 
                                document.querySelectorAll('form input')[0].style.border = '2px red solid';
                                v1=false;
            //    اینجا بریک پوینت گذاشتم ک اگه اشتباه بود ادامه نده حلقه تکرار نشه بیاد بیرون از حلقه 
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
        // ی تابع نوشتم برای اعتبار سنجی پسورد ک چک کنه ببینه بیشتر از هشت  رقم وارد شده باشه 
            let pass = event.target.value ;
            if (pass.length >= 8){
                document.querySelectorAll('span')[1].style.display = 'none' ;
                document.querySelectorAll('form input')[1].style.border = '';
                v2 = true ;
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
                document.querySelectorAll('form input')[2].style.border = '';
                v3 = true ;
            }
            else
            {
                document.querySelectorAll('span')[2].style.display = '';
                document.querySelectorAll('form input')[2].style.border = '2px red solid';
            }
        }
//! ------------------- End controler filde Repeat Pass2 -------------------------------

//? ------------Start-------- Add function Validation User Btn -----------------------------------------------

function validationBtnRegestery() {
    // debugger
    document.querySelector('form button').disabled = true;
    if (v1 && v2 && v3)
    {
        document.querySelector('form button').disabled = false;
        
        debugger
        farawin.testRegister(
            (username = document.getElementById('phone_input').value ) ,
            (password = document.getElementById('pass_input2').value ) ,
            (name = "hamedAbdollahzade"),
            (response) => {
              //response is object like {code: string, message: string}
              //if code is '200' mean success
              //else mean error!
              //Goodluck:)
      
              const success = response.code == "200";
      
              if (success) console.log("result from api -> ", response);
              else console.error("error from api -> ", response);
      
              //you response to get message
              //like
              alert(response.message);
      
              //redirect if you want
              // if(success)
              //   window.location.assign('url...')
            }
          );
        
          
          
    }
}






function validationBtnLogin()
    {
        // debugger
        document.querySelector('form button').disabled = true;
    if (v1 && v2)
    {
        document.querySelector('form button').disabled = false;
        // debugger
        farawin.testLogin(
            (username = document.getElementById('phone_input').value ) ,
            (password = document.getElementById('pass_input').value ) ,
            (response) => {
              //response is object like {code: string, message: string}
              //if code is '200' mean success
              //else mean error!
              //Goodluck:)
      
              const success = response.code == "200";
      
              if (success) console.log("result from api -> ", response);
              else console.error("error from api -> ", response);
      
              //you response to get message
              //like
              alert(response.message);
      
              //redirect if you want
              // if(success)
              //   window.location.assign('url...')
            }
          );

    }

    }
//? -----------End--------- Validation User -----------------------------------------------