/// <reference types="Cypress"/>

const FormContactUsScreen = require("../e2e/formSignIn.screen")

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
        .subSuite('Contact Us');
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
  
    //testcase1
    it.only('SignIn - Submit (incorrect information)"', function () {
        cy.allure().severity('critical');
        cy.allure().tag('SignIn');
       
        cy.allure()
        .startStep('Complete Email')
        .endStep(cy.get(FormContactUsScreen.inputEmail).type(this.dataForm.email_address));

        cy.allure()
        .startStep('Complete Password')
        .endStep(cy.get(FormContactUsScreen.inputPassword).type(this.dataForm.password));
  
        cy.allure()
        .startStep('Click SignIn')
        .endStep(cy.get(FormContactUsScreen.loginBtn).click());
        
        cy.wait(4000)

        cy.allure()
        .step('Validate incorrect user')
        .endStep(cy.contains(this.dataForm.messageIncorrectUser)       
           .should('contain.text', this.dataForm.messageIncorrectUser)
            .should('be.visible'));
       
    })
   
})
