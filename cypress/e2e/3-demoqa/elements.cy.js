import TextBoxPage from "../../pageObjects/textBoxPage.page";

describe("Elements", () => {
    context("Text Box Scenarios", () => {
        beforeEach(() => {
            TextBoxPage.visit();
        });
  
        it("Text Box Positive", () => {
            //todo: implement scenarios
            TextBoxPage.usernameField.type("Donald Duck");
            TextBoxPage.emailField.type("donald@disney.com");
            TextBoxPage.currentAddressField.type("This is a placeholder for current address");
            TextBoxPage.permanentAddressField.type("This is a placeholder for permanent address");
            TextBoxPage.submitButton.click();


           // cy.get("#userName").type("Donald Duck");

           // cy.get("#userEmail").type("donald@disney.com");
           // cy.get("textarea#currentAddress").type("This is a placeholder for current address");
           // cy.get("textarea#permanentAddress").type("This is a placeholder for permanent address");
           // cy.get("button#submit").click();

            //validation - noskaidrot katras sadaļas selektoru un .should()
            TextBoxPage.nameSection.should("have.text", "Name:Donald Duck");
            TextBoxPage.emailSection.should("have.text", "Email:donald@disney.com");
            TextBoxPage.currentAddressSection.should("contain.text", "Current Address :This is a placeholder for current address");
            TextBoxPage.permanentAddressSection.should("contain.text", "Permananet Address :This is a placeholder for permanent address");
 
        });

        //it.only - izpilda tikai to scenāriju it.skip - izlaiž scenāriju
        it("Text Box Negative", () => {
            //ievada nepareizu epasti
            TextBoxPage.emailField.type("donald@disney@park.com");
            TextBoxPage.submitButton.click();
            TextBoxPage.emailField.should("have.class", "field-error");
        });
    });
});
