/// <reference types="Cypress"/>

const FormSignUpScreen = require("../screenObjects/formSignUp.screen")

before(function () {
    //load the values from the file dataForm.json into the dataForm object
    cy.fixture('dataForm').then(function (dataForm) {
        //available for the all file
        this.dataForm = dataForm
        
    })
})

beforeEach(function () {
    //Enter to main page
    cy.allure()
        .startStep('Login into beeyondmedia site')
        .endStep(cy.visit(this.dataForm.URL_Prod));
        cy.allure()
        .parentSuite('Beeyondmedia Site')
        .suite('Automated Test')
        .subSuite('Sign Up');
        const data = {Environment: Cypress.env('environment'),Browser: Cypress.env('browser')};
        cy.allure()
        .startStep('Environment')
        .endStep(cy.allure().writeEnvironmentInfo(data).parameter('initial environment info',JSON.stringify(data, null, 2)));
})

after(() => {
    cy.log('test cases finished')
})

// Suite test cases
describe('Test Cases SignUp', function () {
  
    it('SignUp - Go to page', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignUp');
       
        cy.allure()
        .startStep('Click SignUp')
        .endStep(cy.get(FormSignUpScreen.signUpBtn).click());
        
        cy.allure()
        .step('Validate redirect to Sign Up')
        .endStep(cy.contains(this.dataForm.meesageSignUp)       
           .should('contain.text', this.dataForm.meesageSignUp)
            .should('be.visible'));
    })

    it('SignUp - Submit (empty required all fields)', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignUp');
       
        cy.allure()
        .startStep('Click SignUp')
        .endStep(cy.get(FormSignUpScreen.signUpBtn).click());

        cy.allure()
        .startStep('Click SignUpSubmit')
        .endStep(cy.get(FormSignUpScreen.signUpSubmitBtn).click());

        cy.allure()
        .step('Validate required Firs Name')
        .endStep(cy.get(FormSignUpScreen.firstNameRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

        cy.allure()
        .step('Validate required Last Name')
        .endStep(cy.get(FormSignUpScreen.lastNameRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

        cy.allure()
        .step('Validate required email')
        .endStep(cy.get(FormSignUpScreen.mailRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

        cy.allure()
        .step('Validate required Mobile')
        .endStep(cy.get(FormSignUpScreen.mobileRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

        cy.allure()
        .step('Validate required Business')
        .endStep(cy.get(FormSignUpScreen.businessRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

        cy.allure()
        .step('Validate required Title')
        .endStep(cy.get(FormSignUpScreen.titleRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))   ;

        cy.allure()
        .step('Validate required Tax Id')
        .endStep(cy.get(FormSignUpScreen.taxidRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

        cy.allure()
        .step('Validate required Address')
        .endStep(cy.get(FormSignUpScreen.addressRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

        cy.allure()
        .step('Validate required City')
        .endStep(cy.get(FormSignUpScreen.cityRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

        cy.allure()
        .step('Validate required State')
        .endStep(cy.get(FormSignUpScreen.stateRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

        cy.allure()
        .step('Validate required Country')
        .endStep(cy.get(FormSignUpScreen.countryRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))  ;

        cy.allure()
        .step('Validate required Zip Code')
        .endStep(cy.get(FormSignUpScreen.zipcodeRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

        cy.allure()
        .step('Validate required Password')
        .endStep(cy.get(FormSignUpScreen.passwordRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

        cy.allure()
        .step('Validate required Repeat Password')
        .endStep(cy.get(FormSignUpScreen.rpasswordRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))   

        cy.allure()
        .step('Validate required email')
        .endStep(cy.get(FormSignUpScreen.agreeRequired)       
           .should('contain.text', this.dataForm.messageRequiredField)
           .should('be.visible'));

    })

    it('SignUp - Submit (invalid email)', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignUp');
       
        cy.allure()
        .startStep('Click SignUp')
        .endStep(cy.get(FormSignUpScreen.signUpBtn).click());

        cy.allure()
        .startStep('Complete Email')
        .endStep(cy.get(FormSignUpScreen.inputMail).type(this.dataForm.invalid_email));
  
        cy.allure()
        .startStep('Click SignUpSubmit')
        .endStep(cy.get(FormSignUpScreen.signUpSubmitBtn).click());
        
        cy.allure()
        .step('Validate invalid email')
        .endStep(cy.get(FormSignUpScreen.mailRequired)
            .should('contain.text', this.dataForm.messageInvalidUser)
            .should('be.visible'))
       
    })

    it('SignUp - Submit (invalid password)', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignUp');
       
        cy.allure()
        .startStep('Click SignUp')
        .endStep(cy.get(FormSignUpScreen.signUpBtn).click());

        cy.allure()
        .startStep('Complete Password')
        .endStep(cy.get(FormSignUpScreen.inputPassword).type(this.dataForm.invalidPassword));
  
        cy.allure()
        .startStep('Click SignUpSubmit')
        .endStep(cy.get(FormSignUpScreen.signUpSubmitBtn).click());
        
        cy.allure()
        .step('Validate invalid Password')
        .endStep(cy.get(FormSignUpScreen.passwordRequired)
            .should('contain.text', this.dataForm.messageInvalidPassword)
            .should('be.visible'))
       
    })

    it('SignUp - Submit (invalid confirm password)', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignUp');
       
        cy.allure()
        .startStep('Click SignUp')
        .endStep(cy.get(FormSignUpScreen.signUpBtn).click());

        cy.allure()
        .startStep('Complete Confirm Password')
        .endStep(cy.get(FormSignUpScreen.inputRpassword).type(this.dataForm.invalidPassword));
  
        cy.allure()
        .startStep('Click SignUpSubmit')
        .endStep(cy.get(FormSignUpScreen.signUpSubmitBtn).click());
        
        cy.allure()
        .step('Validate required user')
        .endStep(cy.get(FormSignUpScreen.rpasswordRequired)
            .should('contain.text', this.dataForm.messageInvalidPassword)
            .should('be.visible'))
       
    })

    it('SignUp - Submit (diferent confirm password)', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignUp');
       
        cy.allure()
        .startStep('Click SignUp')
        .endStep(cy.get(FormSignUpScreen.signUpBtn).click());

        cy.allure()
        .startStep('Complete Password')
        .endStep(cy.get(FormSignUpScreen.inputPassword).type(this.dataForm.password));

        cy.allure()
        .startStep('Complete Confirm Password')
        .endStep(cy.get(FormSignUpScreen.inputRpassword).type(this.dataForm.difpassword));

        cy.allure()
        .startStep('Click SignUpSubmit')
        .endStep(cy.get(FormSignUpScreen.signUpSubmitBtn).click());
        
        cy.allure()
        .step('Validate required user')
        .endStep(cy.get(FormSignUpScreen.rpasswordRequired)
            .should('contain.text', this.dataForm.messageConfirmPassword)
            .should('be.visible'))
    })

    it('SignUp - Submit (required all fields)', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignUp');
       
        cy.allure()
        .startStep('Click SignUp')
        .endStep(cy.get(FormSignUpScreen.signUpBtn).click());

        cy.allure()
        .startStep('Complete First Name')
        .endStep(cy.get(FormSignUpScreen.inputFirstName).type(this.dataForm.first_name));

        cy.allure()
        .startStep('Complete Last name')
        .endStep(cy.get(FormSignUpScreen.inputLastName).type(this.dataForm.last_name));

        cy.allure()
        .startStep('Complete Email')
        .endStep(cy.get(FormSignUpScreen.inputMail).type(this.dataForm.email_address));

        cy.allure()
        .startStep('Complete Mobile Phone')
        .endStep(cy.get(FormSignUpScreen.inputMobile).type(this.dataForm.mobile_phone));

        cy.allure()
        .startStep('Complete Business Name')
        .endStep(cy.get(FormSignUpScreen.inputBusiness).type(this.dataForm.business_name));

        cy.allure()
        .startStep('Complete Job Title')
        .endStep(cy.get(FormSignUpScreen.inputTitle).type(this.dataForm.job_title));

        cy.allure()
        .startStep('Complete Tax Id')
        .endStep(cy.get(FormSignUpScreen.inputTaxid).type(this.dataForm.tax_id));

        cy.allure()
        .startStep('Complete Address')
        .endStep(cy.get(FormSignUpScreen.inputAddress).type(this.dataForm.address));

        cy.allure()
        .startStep('Complete City')
        .endStep(cy.get(FormSignUpScreen.inputCity).type(this.dataForm.city));

        cy.allure()
        .startStep('Complete State')
        .endStep(cy.get(FormSignUpScreen.inputState).type(this.dataForm.state));

        cy.allure()
        .startStep('Complete Country')
        .endStep(cy.get(FormSignUpScreen.inputCountry).type(this.dataForm.country));

        cy.allure()
        .startStep('Complete Zip Code')
        .endStep(cy.get(FormSignUpScreen.inputZipcode).type(this.dataForm.zip_code));
        
        cy.allure()
        .startStep('Complete Password')
        .endStep(cy.get(FormSignUpScreen.inputPassword).type(this.dataForm.password));

        cy.allure()
        .startStep('Complete Confirm Password')
        .endStep(cy.get(FormSignUpScreen.inputRpassword).type(this.dataForm.password));

        cy.allure()
        .startStep('Click Agree')
        .endStep(cy.get(FormSignUpScreen.inputAgree).click());

        cy.allure()
        .startStep('Click SignUpSubmit')
        .endStep(cy.get(FormSignUpScreen.signUpSubmitBtn).click());
        
        cy.allure()
        .step('Validate new user')
        .endStep(cy.contains('New user!')       
            .should('contain.text', 'New user!')
            .should('be.visible'))
    })
 

})
