



function getsignInRoot() {
    // language=HTML
    return `
      
        <style>
            html, body * { box-sizing: border-box; font-family: 'Open Sans', sans-serif; }

            body {
                
                
            }
            .container {
                width: 100%;
               
                padding-top: 15%;
                padding-left: 25%;
            }

            

            .frame-long {
                height: 615px;
            }

            .frame-short {
                height: 400px;
                margin-top: 50px;
                box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
            }

            .nav {
                width: 100%;
                height: 100px;
                padding-top: 40px;
                opacity: 1;
                -webkit-transition: all .5s ease;
                transition: all .5s ease;
            }

         

            li {
                padding-left: 10px;
                font-size: 18px;
                display: inline;
                text-align: left;
                text-transform: uppercase;
                padding-right: 10px;
                color: #ffffff;
            }

            
            input::placeholder{
                color: white;
            }
          

           

            .form-signin {
                width: 430px;
                height: 375px;
                font-size: 16px;
                font-weight: 300;
                padding-left: 37px;
                padding-right: 37px;
                -webkit-transition: opacity .5s ease, -webkit-transform .5s ease;
                transition: opacity .5s ease, -webkit-transform .5s ease;
                transition: opacity .5s ease, transform .5s ease;
                transition: opacity .5s ease, transform .5s ease, -webkit-transform .5s ease;
            }

            .form-signin-left {
                -webkit-transform: translateX(-400px);
                transform: translateX(-400px);
                opacity: .0;
            }

            .form-signin input, .form-signup input {
                color: #ffffff;
                font-size: 13px;
            }

  
            label {
                font-weight: 400;
                text-transform: uppercase;
                font-size: 13px;
                padding-left: 15px;
                padding-bottom: 10px;
                color: rgba(255, 255, 255, .7);
                display: block;
            }

            :focus {
                outline: none;
            }

          

            [type="checkbox"]:not(:checked),
            [type="checkbox"]:checked {
                position: absolute;
                display: none;
            }

            [type="checkbox"]:not(:checked) + label,
            [type="checkbox"]:checked + label {
                position: relative;
                padding-left: 85px;
                padding-top: 2px;
                cursor: pointer;
                margin-top: 8px;
            }

            [type="checkbox"]:not(:checked) + label:before,
            [type="checkbox"]:checked + label:before,
            [type="checkbox"]:not(:checked) + label:after,
            [type="checkbox"]:checked + label:after {
                content: '';
                position: absolute;
            }

            [type="checkbox"]:not(:checked) + label:before,
           

            [type="checkbox"]:not(:checked) + label:after,
            [type="checkbox"]:checked + label:after {
                width: 10px;
                height: 10px;
                background: rgba(255, 255, 255, .7);
                border-radius: 50%;
                top: 7px;
                left: 10px;
                -webkit-transition: all .2s ease;
                transition: all .2s ease;
            }

           

            [type="checkbox"]:checked + label:after {
                background: #ffffff;
                top: 7px;
                left: 45px;
            }

            [type="checkbox"]:checked + label .ui,
            [type="checkbox"]:not(:checked) + label .ui:before,
            [type="checkbox"]:checked + label .ui:after {
                position: absolute;
                left: 6px;
                width: 65px;
                border-radius: 15px;
                font-size: 14px;
                font-weight: bold;
                line-height: 22px;
                -webkit-transition: all .2s ease;
                transition: all .2s ease;
            }

            [type="checkbox"]:not(:checked) + label .ui:before {
                content: "no";
                left: 32px;
                color: rgba(255, 255, 255, .7);
            }

            [type="checkbox"]:checked + label .ui:after {
                content: "yes";
                color: #ffffff;
            }

            [type="checkbox"]:focus + label:before {
                box-sizing: border-box;
                margin-top: -1px;
            }

           

           
a{
    text-decoration: none;
}
          
            .btn-animate-grow {
                width: 130%;
                height: 625px;
                position: relative;
                left: -55px;
                top: -420px;
                color: rgba(255, 255, 255, 0);
                background-color: rgba(255, 255, 255, 1);
            }

           button.btn-signin:hover {
              color: rgba(16, 89, 255, 1);
                cursor: pointer;
                background-color: white;
                -webkit-transition: background-color .5s;
                transition: background-color .5s;
            }

   
         
        </style>
       <div class="container">
  <div class="frame">
    <div class="nav">
      <ul class="links">
        <li class="signin-active"><a class="btn" id="sin" style="border-width: 2px; border-color: black">Sign in</a></li>
        <li class="signup-inactive"><a class="btn" style="border-width: 2px; border-color: black" id="sup">Sign up </a></li>
      </ul>
    </div>
				        <form class="form-signin" action="" method="post" name="signIn">
          <label for="username" style="color:black">Username</label>
          <input class="form-styling" type="text" name="login" placeholder="" required minlength="5"/>
                            <div class="password">
                                <label for="password" style="color:black">Password</label>
                                <input type="password" id="password-input" class="form-styling" placeholder="" name="password" required minlength="6">
                                <a href="#" class="password-control" onclick="return show_hide_password(this);"></a>
                            </div>
          <div class="btn-animate">
            <button class="btn-signin" type="submit" >Sign in</button>
          </div>
				        </form>
    </div>
  </div>`
}





function getsignUpRoot() {
    return `<style>

html, body * { box-sizing: border-box; font-family: 'Open Sans', sans-serif; }

body {
  background:
    -webkit-linear-gradient(
    rgba(246,247,249,0.8),
    rgba(246,247,249,0.8)),
    url(https://dl.dropboxusercontent.com/u/22006283/preview/codepen/sky-clouds-cloudy-mountain.jpg) no-repeat center center fixed;
  background:
    linear-gradient(
    rgba(246,247,249,0.8),
    rgba(246,247,249,0.8)),
    url(https://dl.dropboxusercontent.com/u/22006283/preview/codepen/sky-clouds-cloudy-mountain.jpg) no-repeat center center fixed;
  background-size: cover;
}

.container {
   padding-top: 15%;
                padding-left: 25%;
}


.frame-long {
  height: 615px;
}

.frame-short {
  height: 400px;
  margin-top: 50px;
  box-shadow: 0px 2px 7px rgba(0,0,0,0.1);
}

.nav {
  width: 100%;
  height: 100px;
  padding-top: 40px;
  opacity: 1;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
}



li {
  padding-left: 10px;
  font-size: 18px;
  display: inline;
  text-align: left;
  text-transform: uppercase;
  padding-right: 10px;
  color: #ffffff;
}


.form-signup {
  width: 430px;
  height: 375px;
\tfont-size: 16px;
\tfont-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  position: relative;
 
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
}

.form-signup-left {
  -webkit-transform: translateX(-399px);
          transform: translateX(-399px);
  opacity: 1;
}

.form-signup-down {
  top: 0px;
  opacity: 0;
}




label {
  font-weight: 400;
  text-transform: uppercase;
  font-size: 13px;
  padding-left: 15px;
  padding-bottom: 10px;
  color: rgba(255,255,255,.7);
  display: block;
}

:focus {outline: none;
}



[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  display: none;
}

[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 85px;
  padding-top: 2px;
  cursor: pointer;
  margin-top: 8px;
}

[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before,
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: '';
  position: absolute;
}

[type="checkbox"]:not(:checked) + label:before,


[type="checkbox"]:not(:checked) + label:after,


/* on checked */
[type="checkbox"]:checked + label:before {
  background: #0F4FE6; 
}

[type="checkbox"]:checked + label:after {
  background: #ffffff;
  top: 7px; 
  left: 45px;
}

[type="checkbox"]:checked + label .ui,
[type="checkbox"]:not(:checked) + label .ui:before,
[type="checkbox"]:checked + label .ui:after {
  position: absolute;
  left: 6px;
  width: 65px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
}

[type="checkbox"]:not(:checked) + label .ui:before {
  content: "no";
  left: 32px;
  color: rgba(255,255,255,.7);
}

[type="checkbox"]:checked + label .ui:after {
  content: "yes";
  color: #ffffff;
}

[type="checkbox"]:focus + label:before {
  box-sizing: border-box;
  margin-top: -1px;
}


[title="err"]{
border: solid 2px red;
}

.btn-animate {
  float: left;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: rgba(255,255,255, 1);
  padding-top: 8px;
  width: 100%;
  height: 35px;
\tborder: none;
\tborder-radius: 20px;
  margin-top: 23px;
  background-color: rgba(16,89,255, 1);
  left: 0px;
  top: 0px;
  -webkit-transition: all .5s ease, top .5s ease .5s, height .5s ease .5s, background-color .5s ease .75s;
  transition: all .5s ease, top .5s ease .5s, height .5s ease .5s, background-color .5s ease .75s; 
}

.btn-animate-grow {
  width: 130%;
  height: 625px;
  position: relative;
  left: -55px;
  top: -420px;
  color: rgba(255,255,255,0);
  background-color: rgba(255,255,255,1);
}
a{
text-decoration: none;
}
button.btn-signup:hover {
color: rgba(16,89,255, 1);
    cursor: pointer; 
    background-color: white;
    -webkit-transition: background-color .5s;
    transition: background-color .5s; 
}


</style>
 <div class="container">
  <div class="frame">
    <div class="nav">
      <ul >
        <li class="signup-inactive"><a class="btn" id="sin" style="border-width: 2px; border-color: black">Sign in</a></li>
        <li class="signup-active"><a class="btn" id="sup" style="border-width: 2px; border-color: black">Sign up </a></li>
      </ul>
    </div>
<form class="form-signup" action="" method="post" name="signUp" id="pwreset" >
          <label for="fullname" style="color:black">USERNAME</label>
          <input class="form-styling" type="text" name="login" placeholder="введите логин" required minlength="5"/>
           <label for="email" style="color:black">Email</label>
          <input class="form-styling" type="email" name="email" placeholder="Введите почту" id="email"/>
         
         <div class="password">
          <label for="password" style="color:black">Password</label>
            <input type="password" id="password-input" class="form-styling" placeholder="Введите пароль" name="password" required minlength="6">
            <a href="#" class="password-control" onclick="return show_hide_password(this);"></a>
</div>
          <button class="btn-signup" type="submit">Sign Up</button></form>
</div>
</div>`
}
function show_hide_password(target){
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}

function getTableRoot(rows) {
    return ` <div class="mdc-data-table__table-container" ;max-height:670px">
    <table class="table table-striped table-bordered" aria-label="Tasks">
                    <tbody class="mdc-data-table__content">
                    <tr class="mdc-data-table__row" style="border-bottom:solid">
                <th class="mdc-data-table__cell" scope="row" style="font-weight:bold;color:black">Заголовок</th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric" style="text-align:left;font-weight:bold;color:black">Описание</td>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric" style="text-align:left;font-weight:bold;color:black;margin-left:10px">Завершена</td>
                <td class="mdc-data-table__cell" style="font-weight:bold;color:black">Дата создания</td>
                <td class="mdc-data-table__cell" style="font-weight:bold;color:black">Файл</td>
                <td class="mdc-data-table__cell" style="font-weight:bold;color:black">Завершить</td>
                <td class="mdc-data-table__cell" style="font-weight:bold;color:black">Удалить</td>
            </tr>
                    ${rows}
                    </tbody>
                </table>
            </div>`
}


function getNewTaskRoot() {
    return `<div class="mdc-data-table__table-container" >
                <form action="/"  method="post" enctype="multipart/form-data" id="add-task" name="add-task">
                    <table class="mdc-data-table__table" aria-label="Add task">
                        <tbody class="mdc-data-table__content">
                            <tr class="mdc-data-table__row">
                            
                            <th class="mdc-data-table__cell" scope="row">
                                <label class="mdc-text-field mdc-text-field--filled" style="height:50px">
                                    <span class="mdc-text-field__ripple"></span>
                                    <span class="mdc-floating-label" id="my-label-id" style="bottom:-25px;font-size:small;font-weight:bolder;">Заголовок</span>
                                    <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id" placeholder="Заголовок" name="task-name">
                                </label>
                                   <label class="mdc-text-field mdc-text-field--filled" style="height:50px">
                                    <span class="mdc-text-field__ripple"></span>
                                    <span class="mdc-floating-label" id="my-label-id" style="bottom:-25px;font-size:small;font-weight:bolder;">Описание</span>
                                    <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id" placeholder="Описание" name="task-description">
                                </label>
                                <label class="mdc-text-field mdc-text-field--filled" style="height:50px">
                                    <span class="mdc-text-field__ripple"></span>
                                    <span class="mdc-floating-label" id="my-label-id" style="bottom:-25px;font-size:small;font-weight:bolder;">Дата создания</span>
                                    <input class="mdc-text-field__input" aria-labelledby="my-label-id" type="datetime-local" placeholder="Task expires" name="task-expires" value="${moment().format('YYYY-MM-DDTHH:mm')}">
                                </label>
                                  <label class="mdc-text-field mdc-text-field--filled" style="height:50px">
                                    <span class="mdc-text-field__ripple"></span>
                                    <span class="mdc-floating-label" id="my-label-id" style="bottom:-25px;font-size:small;font-weight:bolder;">Файл</span>
                                    <input class="mdc-text-field__input" type="file" name="task-files"  accept=".png, .jpg, .jpeg, .ico, .svg, .gif, .bmp">
                                </label>
                            </th>          
                                     
                            <th class="mdc-data-table__cell" scope="row">
                                <div class="mdc-touch-target-wrapper">
                                
                                    <button class="mdc-button mdc-button--touch" name="add-task" style="background:#ffffff;color:#000000;float: left ">
                                        <span class="mdc-button__ripple"></span>
                                        <span class="mdc-button__touch"></span>
                                        <span class="mdc-button__label">Добавить</span>                                        
                                    </button>
                                </div>
                            </th>
                            <th>
                             <div class="mdc-touch-target-wrapper">
                                    <button class="mdc-button mdc-button--touch" style="background:#ffffff;color:#000000;" type="button" name="exit" onclick="exitPress()" style="background:antiquewhite;color:darkred;float: left">
                                        <span class="mdc-button__ripple"></span>
                                        <span class="mdc-button__touch"></span>
                                        <span class="mdc-button__label">Выйти</span>                                        
                                    </button>
                                </div>
                            
                            </th>
</th>
                            </tr>
                        </tbody>
                    </table>
                </form>
               
            </div>`
}

async function exitPress() {
    const response = await fetch(`/logout`, {
        method: "POST",
        headers: { "Accept": "application/json" }
    });
    reset();
    drawsignInRoot()
    localStorage.setItem('firstpage',true);
}
function getTask(task) {
    let dayDiff = (new Date(task.expires).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24);
    let spanTag = "";
    if (task.isComplete) {
        spanTag = '<h5 style="margin-left:-10px"><span class="badge badge-success" style="color:darkgreen;">Завершена</span></h5>'
    } else if (dayDiff > 0) {
        spanTag = '<h5 style="margin-left:-10px"><span class="badge badge-warning" style="color:Orange;">Завершена</span></h5>'
    } else if (dayDiff <= 0) {
        spanTag = '<h5 style="margin-left:-10px"><span class="badge badge-danger" style="color:Red;">В процессе</span></h5>'
    }

    const date = moment(task.expires).format("DD.MM.YYYY HH:mm")
    expiredTag = `<td class="mdc-data-table__cell">${date}</td>`

    let fileTag = "";
    if (task.file !== undefined && task.file !== null) {
        fileTag = `<td class="mdc-data-table__cell">File: <a href="download/${task.id}/${task.file.filename}">${task.file.originalname}</a></td>`;
    }
    else {
        fileTag = `<td class="mdc-data-table__cell" />`
    }

    let options = "";
    if (!task.isComplete) {
        options = `<td class="mdc-data-table__cell">        
            <div class="mdc-touch-target-wrapper" name="completeTask">
                <button class="mdc-button mdc-button--touch"  style="background:#ffffff;color:#000000;" name="complete-task" id="complete-${task.id}" value="${task.id}" style="background:antiquewhite;color:darkred">
                    <span class="mdc-button__ripple"></span>
                    <span class="mdc-button__touch"></span>
                    <span class="mdc-button__label">Завершить</span>
                </button>
            </div>        
    </td>`
    }
    else {
        options = `<td class="mdc-data-table__cell">
        <form action="/" method="post">
            <div class="mdc-touch-target-wrapper">
                <button class="mdc-button mdc-button--touch" name="complete-task" id="complete-${task.id}" value="${task.id}" style="color:darkslategrey" disabled>                                            
                    <span class="mdc-button__label">Завершена</span>
                </button>
            </div>
        </form>
    </td>`
    }

    return `<tr class="mdc-data-table__row">
    <th class="mdc-data-table__cell" scope="row">${task.name}</th>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric" style="text-align:left">${task.description}</td>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric" style="text-align:left">
    ${spanTag}
                ${expiredTag}
                ${fileTag}
                ${options}
                <td class="mdc-data-table__cell">                            
                                <div class="mdc-touch-target-wrapper">
                                    <button class="mdc-button mdc-button--touch"  style="background:#ffffff;color:#000000;" name="delete-task" id="delete-${task.id}" value="${task.id}" style="background:antiquewhite;color:darkred">
                                        <span class="mdc-button__ripple"></span>
                                        <span class="mdc-button__touch"></span>
                                        <span class="mdc-button__label">Удалить</span>
                                    </button>
                                </div>                            
                        </td>
            </tr>`;
}