import BasePage from "./base.page";

class RadioButtonsPage extends BasePage{

    static get url(){
        return "/radio-button";
    }

    static get yesButton(){
        return cy.get('[for="yesRadio"]');
    }

    static get successMessage(){
        return cy.get(".text-success");
    }

    static get impressiveButton(){
        return cy.get("#impressiveRadio");
    }

    static get noButton(){
        return cy.get("#noRadio");

    }

}

export default RadioButtonsPage; 