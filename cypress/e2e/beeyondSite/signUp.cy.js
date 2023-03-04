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

    it('SignUp - Submit (required all fields)', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignUp');
       
        cy.allure()
        .startStep('Click SignUp')
        .endStep(cy.get(FormSignUpScreen.signUpBtn).click());

        cy.allure()
        .startStep('Click SignUpSubmit')
        .endStep(cy.get(FormSignUpScreen.signUpSubmitBtn).click());

        cy.allure()
        .step('Validate required all fields')
        .step(cy.get(FormSignUpScreen.firstNameRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))
        .step(cy.get(FormSignUpScreen.lastNameRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))
        .step(cy.get(FormSignUpScreen.mailRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))
        .step(cy.get(FormSignUpScreen.mobileRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))
        .step(cy.get(FormSignUpScreen.businessRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))
        .step(cy.get(FormSignUpScreen.titleRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))    
        .step(cy.get(FormSignUpScreen.taxidRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))
        .step(cy.get(FormSignUpScreen.addressRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))
        .step(cy.get(FormSignUpScreen.cityRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))
        .step(cy.get(FormSignUpScreen.stateRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))
        .step(cy.get(FormSignUpScreen.countryRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))    
        .step(cy.get(FormSignUpScreen.zipcodeRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))
        .step(cy.get(FormSignUpScreen.passwordRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))
        .step(cy.get(FormSignUpScreen.rpasswordRequired)
            .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'))   
        .endStep(cy.get(FormSignUpScreen.agreeRequired)       
           .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));

    })


 
})
