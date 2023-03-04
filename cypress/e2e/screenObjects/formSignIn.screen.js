class FormSignInScreen {
 
  get inputEmail(){
    return ('input[name="user"]');//'[class="kt-login__signin"]>[class="kt-form"]>[class="input-group"]>[placeholder="Email"]');
  }

  get inputPassword(){
    return ('input[name="pass"]');//[class="kt-login__signin"]>[class="kt-form"]>[class="input-group"]>[placeholder="Password"]');
  }

  get loginBtn(){
    return('#kt_login_signin_submit')
  }

  get signUpBtn(){
    return('#kt_login_signup')
  }
}

module.exports = new FormSignInScreen();