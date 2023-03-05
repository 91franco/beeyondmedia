class FormSignUpScreen {
 
  get signUpBtn(){
    return('#kt_login_signup')
  }

  get inputFirstName(){
    return ('input[name="name"]');
  }

  get firstNameRequired(){
    return ('#name-error');
  }
  
  get inputLastName(){
    return ('input[name="lastname"]');
  }

  get lastNameRequired(){
    return ('#lastname-error');
  }

  get inputMail(){
    return ('[id="sign-up-form"]>[class="input-group"]>[name="mail"]');
  }

  get mailRequired(){
    return ('#mail-error');
  }
  
  get inputMobile(){
    return ('input[name="mobile"]');
  }

  get mobileRequired(){
    return ('#mobile-error');
  }

  get inputPhone(){
    return ('input[name="phone"]');
  }

  get inputBusiness(){
    return ('input[name="business"]');
  }

  get businessRequired(){
    return ('#business-error');
  }

  get inputTitle(){
    return ('input[name="title"]');
  }

  get titleRequired(){
    return ('#title-error');
  }
  
  get inputTaxid(){
    return ('input[name="taxid"]');
  }

  get taxidRequired(){
    return ('#taxid-error');
  }

  get inputAddress(){
    return ('input[name="address"]');
  }

  get addressRequired(){
    return ('#address-error');
  }

  get inputCity(){
    return ('input[name="city"]');
  }

  get cityRequired(){
    return ('#city-error');
  }

  get inputState(){
    return ('input[name="state"]');
  }

  get stateRequired(){
    return ('#state-error');
  }

  get inputCountry(){
    return ('input[name="country"]');
  }

  get countryRequired(){
    return ('#country-error');
  }

  get inputZipcode(){
    return ('input[name="zipcode"]');
  }

  get zipcodeRequired(){
    return ('#zipcode-error');
  }

  get inputPassword(){
    return ('input[name="password"]');
  }

  get passwordRequired(){
    return ('#password-error');
  }

  get inputRpassword(){
    return ('input[name="rpassword"]');
  }

  get rpasswordRequired(){
    return ('#rpassword-error');
  }

  get inputAgree(){
    return ('#sign-up-form > .row > .col > .kt-checkbox > span');
  }

  get agreeRequired(){
    return ('#agree-error');
  }

  get signUpSubmitBtn(){
    return('#kt_login_signup_submit')
  }

  get signUpCancelBtn(){
    return('#kt_login_signup_cancel')
  }
}

module.exports = new FormSignUpScreen();