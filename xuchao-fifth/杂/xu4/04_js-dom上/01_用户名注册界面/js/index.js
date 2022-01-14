window.onload = function(){
    var reg1 = /^[0-9a-zA-Z]{4,8}$/;
    var reg2 = /^\d{6}$/;
    var usertext = document.getElementById("usertext")
    var usertxt = document.getElementById("usertxt")
    var pwdtext = document.getElementById("pwdtext")
    var pwdtxt = document.getElementById("pwdtxt")
    var repwdtext = document.getElementById("repwdtext")
    var repwdtxt = document.getElementById("repwdtxt")
    var open = document.getElementById("open")
    var close = document.getElementById("close")
    var register = document.getElementById("register")

    usertext.onblur = function(){
            if(reg1.test(usertext.value)){
                    usertxt.style.display = "none"
            }else{
                    usertxt.style.display = "block"
            }
    }

    pwdtext.onblur = function(){
            if(reg2.test(pwdtext.value)){
                    pwdtxt.style.display = "none"
            }else{
                    pwdtxt.style.display = "block"
            }
    }

    repwdtext.onblur = function(){
            if(repwdtext.value == pwdtext.value){
                    repwdtxt.style.display = "none"
            }else{
                    repwdtxt.style.display = "block"
            }
    }

    close.onclick = function(){
            open.style.display = "block"
            close.style.display = "none"
            pwdtext.type = "text"
    }

    open.onclick = function(){
            open.style.display = "none"
            close.style.display = "block"
            pwdtext.type = "password"
    }

    register.onclick = function(){
            // if((usertext.value==""&&pswtext.value=="")&&repwdtext.value==""){
            //         alert("请输入信息");
            // }else if(usertext.value==""&&pswtext.value!=""){
            //         alert("请输入用户名");
            // }else if((usertext.value!=""&&pswtext.value=="")||(usertext.value==""&&pswtext.value=="")){
            //         alert("请输入密码");
            // }else if((usertext.value!=""&&pswtext.value!="")&&repwdtext.value==pswtext.value){
            //         alert("请输入确认密码");
            // }else{
            //         alert("注册成功");
            // }
            
            // if((regPwd.test(pwd.value)&&regUser.test(user.value))&&regPwd.test(confirmPwd.value)){
            //         if(user.value==""&&(pwd.value!=""&&confirmPwd.value!="")){
            //                 alert("用户名不能为空");
            //         }else if(pwd.value==""&&(user.value!=""&&confirmPwd.value!="")){
            //                 alert("密码不能为空");
            //         }else if(confirmPwd.value==""&&(user.value!=""&&pwd.value!="")){
            //                 alert("请确认密码");
            //         }else if((user.value==""&&pwd.value=="")||((user.vlue==""&&confirmPwd.value=="")||(pwd.value==""&&confirmPwd.value==""))){
            //                 alert("请确认信息");
            //         }else{
            //                 alert("注册成功");
            //         }
            // }else{
            //         alert("请确认信息");
            // }}

            // if(usertext.value!=""){
            //         alert("请输入用户名")
            // }else{
            //         alert("注册成功")
            // }

            if(usertext.value ==""||usertxt.style.display == "block"){
                    alert("您的用户名输入有误")
            }else if(pwdtext.value ==""||pwdtxt.style.display == "block"){
                    alert("您的密码输入有误")
            }else if(repwdtext.value ==""||repwdtxt.style.display == "block"){
                    alert("您确认的密码有误")
            }else{
                    alert("注册成功")
            }

            // if((usertxt.style.display == "none"&&pwdtxt.style.display == "none")&&repwdtxt.style.display == "none"){
            //         alert("您的信息有误")
            // }else{
            //         alert("注册成功")
            // }
            // pwdtxt.style.display == "block"

            // alert("注册成功")
    }


    
    }
