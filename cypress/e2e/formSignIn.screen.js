class FormContactUsScreen {
 
  get inputEmail(){
    return ('input[name="user"]');//'[class="kt-login__signin"]>[class="kt-form"]>[class="input-group"]>[placeholder="Email"]');
  }

  get inputPassword(){
    return ('input[name="pass"]');//[class="kt-login__signin"]>[class="kt-form"]>[class="input-group"]>[placeholder="Password"]');
  }

  get loginBtn(){
    return('#kt_login_signin_submit')
  }

   get fieldMandatoryEmailMessageText() {
    return (
      '.grid > :nth-child(1) > p' 
    );
  }


  get fieldMandatoryNameMessageText() {
    return (
      '.grid > :nth-child(1) > p'
    );
  }
  get fieldMandatoryNameMessageTextcu() {
    return (
      'p[class="mt-0.5 right-0 text-xs text-firehydrant-50"]'
    );
  }

  get fieldMandatoryCompanyMessageText() {
    return (
      '.grid > :nth-child(2) > p'
    );
  }
  get fieldMandatoryCompanyMessageTextcu() {
    return (
      'p[class="mt-0.5 right-0 text-xs text-firehydrant-50"]'
    );
  }

  async goToContactUs() {
    /*cy.visit('contact')
      /*'button[class="relative h-12 leading-none uppercase rounded-[4rem] font-medium flex items-center justify-center w-full bg-[length:200%_100%] overflow-hidden whitespace-nowrap bg-gradient-btn-white hover:text-white text-carnation tracking-[0.1875rem] bg-[right_bottom] transition-all duration-500 ease-in-out hover:bg-left-bottom max-w-[10.375rem] md:max-w-[12.25rem]"]').click();*/
  }

  async sendMail() {
    cy.get(this.btnSend).click();
  }
 

}

module.exports = new FormContactUsScreen();