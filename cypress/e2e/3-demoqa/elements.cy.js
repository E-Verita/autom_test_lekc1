import TextBoxPage from "../../pageObjects/textBoxPage.page";
import CheckboxPage from "../../pageObjects/checkbox.page";
import RadioButtonsPage from "../../pageObjects/radiobutton.page";

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


    //Checkbox scenarios
    context("Check Box Scenarios", () => {
        beforeEach(() => {
            CheckboxPage.visit();
        });
    
        it("Checkbox select items", () => {
            // Click (+) Expand icon 
            CheckboxPage.expandButton.click();
            // Click Notes, Angular, Private, Excel File.doc
            CheckboxPage.checkboxTitles.contains("Notes").click();
            CheckboxPage.checkboxTitles.contains("Angular").click();
            CheckboxPage.checkboxTitles.contains("Private").click();
            CheckboxPage.checkboxTitles.contains("Excel File").click();

            // Validate that selected items are registered
            CheckboxPage.result.should("have.text", "You have selected :notesangularprivateexcelFile"
            );
        });

        it("Checkbox click Desktop", () => {
            // Click (+) Expand icon 
            CheckboxPage.expandButton.click();
            // Click Desktop

            CheckboxPage.checkboxTitles.contains("Desktop").click();
            // Validate success message - You have selected :desktopnotescommands
            CheckboxPage.result.should("have.text", 
            "You have selected :desktopnotescommands"
            );
        });
    });

    //Radio Buttons
    context("Radio Button Scenarios", () => {
        beforeEach(() => {
            //Create RadioButtonsPage            
            RadioButtonsPage.visit();
        });
    
        it.only("Click buttons and validate", () => {
            // Click yes button+
            RadioButtonsPage.yesButton.click();

            // Validate message - You have selected Yes
            RadioButtonsPage.successMessage.should("have.text", "Yes"
            );

            // Click Impressive button
            RadioButtonsPage.impressiveButton.click({force: true});

            // Validate message - You have selected impresive
            RadioButtonsPage.successMessage.should("have.text", "Impressive"
            );

            // Validate that no button is disabled
            RadioButtonsPage.noButton.should("have.class", "disabled");
        });
    });

    

    //Web tables

    //Buttons

    //Interactions - selectable
    
});
