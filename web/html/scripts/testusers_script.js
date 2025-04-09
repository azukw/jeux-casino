let monke_usernames = ['Milo','Sami','Alexis','Adrien','Mohamed','Paul-Adrien'];
let monke_passwords = ['C@ss0ulet','Sami','Alexis','Adrien','Mohamed','Paul-Adrien'];


function go_login(){
    var login_form = document.getElementById('form_log')
    var register_form = document.getElementById('form_reg');
    register_form.style.opacity = '0';
    register_form.style.visibility = 'hidden';
    login_form.style.zIndex = '16'

    var login_button = document.getElementById('login');
    var register_button = document.getElementById('register');
    login_button.style.left = '0'
    login_button.style.zIndex = '13'
    register_button.style.left = '20px'

    var msg = document.getElementById('msg')
    msg.innerHTML = "<p></p>"
};

function go_register(){
    var login_form = document.getElementById('form_log')
    var register_form = document.getElementById('form_reg');
    register_form.style.opacity = '1';
    register_form.style.visibility = 'visible';
    login_form.style.zIndex = '14'

    var login_button = document.getElementById('login');
    var register_button = document.getElementById('register');
    login_button.style.left = '20px'
    login_button.style.zIndex = '11'
    register_button.style.left = '0'

    var msg = document.getElementById('msg2')
    msg.innerHTML = "<p></p>"
};

function register(){
    var msg = document.getElementById("msg2");
    var pw = document.getElementById("reg_pw").value;
    var pw2 = document.getElementById("reg_pw2").value;
    var user = document.getElementById("reg_user").value;
    if (user.length < 4) {
        msg.innerHTML = "<p style='color:red; font-size:0.9rem; margin-top:2em'>Your username must be between:<br> 4 and 20 caracters.</p>"
    } else {
        if (pw2.length >= 8 && pw.length <= 20){
            if (pw2.match( /[0-9]/g) && pw2.match( /[A-Z]/g) && pw2.match( /[a-z]/g) && pw2.match( /[^a-zA-Z\d]/g)) {
                if (pw.match( /[@]/g) && pw.match( /[.]/g)){
                    //msg.innerHTML = "<p style='color:green'>Strong password.</p>";
                    monke_usernames.push(user);
                    monke_passwords.push(pw2);
                    msg.innerHTML = "<p style='color:red; font-size:0.9rem; margin-top:2em'>Register system is currently not available lol</p>";
                } else {
                    msg.innerHTML = "<p style='color:red; font-size:0.9rem; margin-top:2em'>Invalid email</p>";
                }
            } else {
                msg.innerHTML = "<p style='color:red; font-size:0.9rem; margin-top:2em'>Your password must contain at least:<br> a lowercase,<br> an uppercase,<br> a number,<br> a special caracter.</p>";
            }
        } else {
            msg.innerHTML = "<p style='color:red; font-size:0.9rem; margin-top:2em'>Your password must be between:<br> 8 and 20 caracters.</p>"
        }
    }
};

function login(){
    var msg = document.getElementById("msg");
    var user = document.getElementById("log_user").value;
    var pw = document.getElementById("log_pw").value;
    for (let i = 0; i < monke_usernames.length; i++) { 
        if (user === monke_usernames[i]) {
            if (pw === monke_passwords[i]) {
                //msg.innerHTML = "<p>Nice !</p>"
                var user_link = "home.html#"+user;
                window.location.href=user_link;
                break
            } else {
                msg.innerHTML = "<p style='color:red'>Wrong password</p>"
                break
            }
        } else if (i === monke_usernames.length - 1){
            msg.innerHTML = "<p style='color:red'>User not existing</p>"
            break
        }
    }
}

function eyes(){
    var close_eye = document.getElementById("close_eye");
    var pw_input = document.getElementById("log_pw");
    if (close_eye.style.visibility==='hidden'){
        close_eye.style.visibility='visible';
        close_eye.style.opacity='1';
        pw_input.type='password';
    } else{
        close_eye.style.visibility='hidden';
        close_eye.style.opacity='0';
        pw_input.type='text';
    }
}
function eyes3(){
    var close_eye = document.getElementById("close_eye3");
    var pw_input = document.getElementById("reg_pw2");
    if (close_eye.style.visibility==='hidden'){
        close_eye.style.visibility='visible';
        close_eye.style.opacity='1';
        pw_input.type='password';
    } else{
        close_eye.style.visibility='hidden';
        close_eye.style.opacity='0';
        pw_input.type='text';
    }
}


function enter_user_login(x){
    var text = document.getElementById("usertext");
    var input = document.getElementById("log_user").value;
    if(input.length == 0){
        if(x==0){
            text.style.color = "transparent";
        } else{
            text.style.color = "";
        }
    }
}
function enter_password_login(x){
    var text = document.getElementById("passtext");
    var input = document.getElementById("log_pw").value;
    if(input.length == 0){
        if(x==0){
            text.style.color = "transparent";
        } else{
            text.style.color = "";
        }
    }
}
function enter_user_register(x){
    var text = document.getElementById("usertext2");
    var input = document.getElementById("reg_user").value;
    if(input.length == 0){
        if(x==0){
            text.style.color = "transparent";
        } else{
            text.style.color = "";
        }
    }
}
function enter_password_register(x){
    var text = document.getElementById("passtext2");
    var input = document.getElementById("reg_pw").value;
    if(input.length == 0){
        if(x==0){
            text.style.color = "transparent";
        } else{
            text.style.color = "";
        }
    }
}
function enter_password2_register(x){
    var text = document.getElementById("passtext3");
    var input = document.getElementById("reg_pw2").value;
    if(input.length == 0){
        if(x==0){
            text.style.color = "transparent";
        } else{
            text.style.color = "";
        }
    }
}