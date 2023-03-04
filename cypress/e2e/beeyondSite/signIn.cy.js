/// <reference types="Cypress"/>

const FormSignInScreen = require("../screenObjects/formSignIn.screen")

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
        .subSuite('Sign In');
        const data = {Environment: Cypress.env('environment'),Browser: Cypress.env('browser')};
        cy.allure()
        .startStep('Environment')
        .endStep(cy.allure().writeEnvironmentInfo(data).parameter('initial environment info',JSON.stringify(data, null, 2)));
})

after(() => {
    cy.log('test cases finished')
})

// Suite test cases
describe('Test Cases SignIn', function () {
  
    it('SignIn - Submit (incorrect information)', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignIn');
       
        cy.allure()
        .startStep('Complete Email')
        .endStep(cy.get(FormSignInScreen.inputEmail).type(this.dataForm.email_address));

        cy.allure()
        .startStep('Complete Password')
        .endStep(cy.get(FormSignInScreen.inputPassword).type(this.dataForm.password));
  
        cy.allure()
        .startStep('Click SignIn')
        .endStep(cy.get(FormSignInScreen.loginBtn).click());
        
        cy.wait(4000)

        cy.allure()
        .step('Validate incorrect user')
        .endStep(cy.contains(this.dataForm.messageIncorrectUser)       
           .should('contain.text', this.dataForm.messageIncorrectUser)
            .should('be.visible'));
       
    })
   
    it('SignIn - Submit (required user)', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignIn');
       
        cy.allure()
        .startStep('Complete Password')
        .endStep(cy.get(FormSignInScreen.inputPassword).type(this.dataForm.password));
  
        cy.allure()
        .startStep('Click SignIn')
        .endStep(cy.get(FormSignInScreen.loginBtn).click());
        
        cy.wait(1000)

        cy.allure()
        .step('Validate required user')
        .endStep(cy.contains(this.dataForm.messageRequiredField)       
           .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));
       
    })

    it('SignIn - Submit (invalid user)', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignIn');
       
        cy.allure()
        .startStep('Complete Email')
        .endStep(cy.get(FormSignInScreen.inputEmail).type(this.dataForm.invalid_email));

        cy.allure()
        .startStep('Complete Password')
        .endStep(cy.get(FormSignInScreen.inputPassword).type(this.dataForm.password));
  
        cy.allure()
        .startStep('Click SignIn')
        .endStep(cy.get(FormSignInScreen.loginBtn).click());
        
        cy.wait(1000)

        cy.allure()
        .step('Validate invalid user')
        .endStep(cy.contains(this.dataForm.messageInvalidUser)       
           .should('contain.text', this.dataForm.messageInvalidUser)
            .should('be.visible'));
    })

    it('SignIn - Submit (required password)', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignIn');
       
        cy.allure()
        .startStep('Complete Email')
        .endStep(cy.get(FormSignInScreen.inputEmail).type(this.dataForm.email_address));
  
        cy.allure()
        .startStep('Click SignIn')
        .endStep(cy.get(FormSignInScreen.loginBtn).click());
        
        cy.wait(1000)

        cy.allure()
        .step('Validate required password')
        .endStep(cy.contains(this.dataForm.messageRequiredField)       
           .should('contain.text', this.dataForm.messageRequiredField)
            .should('be.visible'));
    })
})
