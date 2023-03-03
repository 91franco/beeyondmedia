/// <reference types="Cypress"/>

const FormContactUsScreen = require("../e2e/formSignIn.screen")

const sendMail = true

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
describe('Test Cases Login', function () {
  
    //testcase1
    it.only('Login - Submit (correct information)"', function () {
        cy.allure().severity('critical');
        cy.allure().tag('Login');
       
        cy.allure()
        .startStep('Complete Email')
        .endStep(cy.get(FormContactUsScreen.inputEmail).type(this.dataForm.email_address));

        cy.allure()
        .startStep('Complete Password')
        .endStep(cy.get(FormContactUsScreen.inputPassword).type(this.dataForm.password));
  
        cy.allure()
        .startStep('Click Login')
        .endStep(cy.get(FormContactUsScreen.loginBtn).click());
        
        cy.wait(4000)

        cy.allure()
        .step('Validate incorrect user')
        .endStep(cy.contains(this.dataForm.messageIncorrectUser)       
           .should('contain.text', this.dataForm.messageIncorrectUser)
            .should('be.visible'));
      
        /*
        cy.allure()
        .startStep('Complete Company Name')
        .endStep(cy.get(FormContactUsScreen.inputCompany).type(this.dataForm.company));
        
        cy.allure()
        .startStep('Complete Phone Number')
        .endStep(cy.get(FormContactUsScreen.inputPhone).type(this.dataForm.phone));
       
        
        cy.allure()
        .startStep('Complete What service do you need?')
        .endStep(cy.get(FormContactUsScreen.inputServicedev).select(this.dataForm.services.dev));
           
        cy.allure()
        .startStep('Complete Note')
        .endStep(cy.get(FormContactUsScreen.inputNotedev).type('Test form Contact us - Submit (correct information) - Service "' + this.dataForm.services.dev + '"'));
       
        if (sendMail === true) {
            cy.allure()
            .step('Validate Send')
            .endStep(FormContactUsScreen.sendMail());
            cy.wait(1000) //Ver como eliminar este paso
            cy.allure()
            .startStep('Validate Url Thanks')
            .endStep(cy.url().should('be.equal', this.dataForm.urlthanks_dev));
        }; */
    })
   
    //testcase2
    it('Contact us - Submit (Email address not completed)', function () {

        cy.allure().severity('normal'); //'blocker' | 'critical' | 'normal' | 'minor' | 'trivial';
        cy.allure().tag('ContactUs');
        cy.allure()
        .startStep('Contact-us')
        .endStep(FormContactUsScreen.goToContactUs());

        cy.allure()
        .startStep('Complete Full Name')
        .endStep(cy.get(FormContactUsScreen.inputFullName).type(this.dataForm.full_name_dev));

        cy.allure()
        .startStep('Complete Company Name')
        .endStep(cy.get(FormContactUsScreen.inputCompany).type(this.dataForm.company));

        cy.allure()
        .startStep('Complete Phone Number')
        .endStep(cy.get(FormContactUsScreen.inputPhone).type(this.dataForm.phone));

        cy.allure()
        .startStep('Complete What service do you need?')
        .endStep(cy.get(FormContactUsScreen.inputServicedev).select(this.dataForm.services.dev));

        cy.allure()
        .startStep('Complete Note')
        .endStep(cy.get(FormContactUsScreen.inputNotedev).type('Test form Contact us - Submit (correct information) - Service "' + this.dataForm.services.dev + '"'));
        
        cy.allure()
        .step('Validate Send')
        .endStep(FormContactUsScreen.sendMail());

        cy.allure()
        .step('Validate mandatory field Email')
        .endStep(cy.get(FormContactUsScreen.fieldMandatoryEmailMessageTextcu)       
           .should('contain.text', this.dataForm.messageFieldMandatory)
            .should('be.visible'));

    })
    
    //testcase3
    it('Contact us - Submit (Full name not completed)', function () {

        cy.allure().severity('normal'); //'blocker' | 'critical' | 'normal' | 'minor' | 'trivial';
        cy.allure().tag('ContactUs');
        cy.allure()
        .startStep('Contact-us')
        .endStep(FormContactUsScreen.goToContactUs());
       
        cy.allure()
        .startStep('Complete Email Address')
        .endStep(cy.get(FormContactUsScreen.inputEmail).type(this.dataForm.email_address));
        
        cy.allure()
        .startStep('Complete Company Name')
        .endStep(cy.get(FormContactUsScreen.inputCompany).type(this.dataForm.company));

        cy.allure()
        .startStep('Complete Phone Number')
        .endStep(cy.get(FormContactUsScreen.inputPhone).type(this.dataForm.phone));

        cy.allure()
        .startStep('Complete What service do you need?')
        .endStep(cy.get(FormContactUsScreen.inputServicedev).select(this.dataForm.services.dev));

        cy.allure()
        .startStep('Complete Note')
        .endStep(cy.get(FormContactUsScreen.inputNotedev).type('Test form Contact us - Submit (correct information) - Service "' + this.dataForm.services.dev + '"'));
 
        cy.allure()
        .step('Validate Send')
        .endStep(FormContactUsScreen.sendMail());

        cy.allure()
        .step('Validate mandatory field Full name')
        .endStep(cy.get(FormContactUsScreen.fieldMandatoryNameMessageTextcu)
            .should('contain.text', this.dataForm.messageFieldMandatory)
            .should('be.visible'));

    })

    //testcase4
    it('Contact us - Submit (Company not completed)', function () {

        cy.allure().severity('normal'); //'blocker' | 'critical' | 'normal' | 'minor' | 'trivial';
        cy.allure().tag('ContactUs');
        cy.allure()
        .startStep('Contact-us')
        .endStep(FormContactUsScreen.goToContactUs());

        cy.allure()
        .startStep('Complete Full Name')
        .endStep(cy.get(FormContactUsScreen.inputFullName).type(this.dataForm.full_name_dev));

        cy.allure()
        .startStep('Complete Email Address')
        .endStep(cy.get(FormContactUsScreen.inputEmail).type(this.dataForm.email_address));

        cy.allure()
        .startStep('Complete Phone Number')
        .endStep(cy.get(FormContactUsScreen.inputPhone).type(this.dataForm.phone));

        cy.allure()
        .startStep('Complete What service do you need?')
        .endStep(cy.get(FormContactUsScreen.inputServicedev).select(this.dataForm.services.dev));

        cy.allure()
        .startStep('Complete Note')
        .endStep(cy.get(FormContactUsScreen.inputNotedev).type('Test form Contact us - Submit (correct information) - Service "' + this.dataForm.services.dev + '"'));
   
        cy.allure()
        .step('Validate Send')
        .endStep(FormContactUsScreen.sendMail());

        cy.allure()
        .step('Validate mandatory field Company')
        .endStep(cy.get(FormContactUsScreen.fieldMandatoryCompanyMessageTextcu)
            .should('contain.text', this.dataForm.messageFieldMandatory)
            .should('be.visible'));
    })

    //testcase5
    it('Contact us - Submit (correct information) - Complete only fields mandatory', function () {

        cy.allure().severity('normal'); //'blocker' | 'critical' | 'normal' | 'minor' | 'trivial';
        cy.allure().tag('ContactUs');
        cy.allure()
        .startStep('Contact-us')
        .endStep(FormContactUsScreen.goToContactUs());

        cy.allure()
        .startStep('Complete Full Name')
        .endStep(cy.get(FormContactUsScreen.inputFullName).type(this.dataForm.full_name_dev));

        cy.allure()
        .startStep('Complete Email Address')
        .endStep(cy.get(FormContactUsScreen.inputEmail).type(this.dataForm.email_address));

        cy.allure()
        .startStep('Complete Company Name')
        .endStep(cy.get(FormContactUsScreen.inputCompany).type(this.dataForm.company));

        cy.allure()
        .startStep('Complete Phone Number')
        .endStep(cy.get(FormContactUsScreen.inputPhone).type(this.dataForm.phone));

        cy.allure()
        .startStep('Complete What service do you need?')
        .endStep(cy.get(FormContactUsScreen.inputServicedev).select(this.dataForm.services.dev));
       
        if (sendMail === true) {
            cy.allure()
            .step('Validate Send')
            .endStep(FormContactUsScreen.sendMail());
            cy.wait(1000) //Ver como eliminar este paso
            cy.allure()
            .startStep('Validate Url Thanks')
            .endStep(cy.url().should('be.equal', this.dataForm.urlthanks_dev));
        }
    })

})
