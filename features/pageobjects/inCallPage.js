const Page = require('./page');

class InCallPage extends Page {

    get btnMute() { return $('[data-test="action-mute"]')}
    get btnHold() { return $('[data-test="action-hold"]')}
    
    get btnStartRecording() { return $('[data-test="action-start-recording"]')}
    
    get btnUnmute() { return $('[data-test="action-unmute"]')}
    get btnUnhold() { return $('[data-test="action-unhold"]')}
    get btnHangUp() { return $('[data-test="hangup-button"]')}
    
    
    
    get inCallActions() { return $('[data-test="in-call-actions"]')}
    get inCallFlowActions() { return $('[data-test="incall-flow-actions"]')}
    
    //ASSIGN MENU
    get btnAssign() { return $('[data-test="assign-button"]')}
    get btnCloseAssign() { return $('[class="Close__SvgClose-hm8qnr-0 hzvoCJ"]')}
    get inputAssign() { return $('[class="styles_input__2k3B0 styles_closable__tZTdq"]')}


    //KEYBOARD
    get btnKeypad() { return $('[data-test="action-keypad"]')}
    get keypad() { return $('[class="styles_keyboard__cOAFJ"]')}
    get inputKeyboard() { return $('[class="styles_input__2k3B0"]')}
    get btnCloseKeypad() { return $('[class="Close__SvgClose-hm8qnr-0 hzvoCJ"]')}

    //TAG MENU
    get btnTags() { return $('[data-test="tags-button"]')}
    get btnTagsDone(){return $(`//*[text()='Done']`)}
    get testTag() { return $(`//*[text()='Test']`)}
    get tagAssignedTick(){return $('[class="TickCircle__SvgTickCircle-e9hfqn-0 llpbfJ"]')}

    //Notes
    get btnNotes() { return $('[data-test="notes-button"]')}
    get modalTitle() { return $('[data-test="title-text"]')}
    get inputModalNotes() { return $('[data-test="note-textarea"]')}
    get btnNotesDone(){return $(`//*[text()='Done']`)}
   
    
    
    muteCall(){
        this.btnMute.click();
    }

    holdCall(){
        this.btnHold.click();
    }
    
    tapKeypad(){
        this.btnKeypad.click();
    }

    closeKeypad(){
        this.btnCloseKeypad.waitForClickable({ timeout: 3000 });
        this.btnCloseKeypad.click(); 
    }
    
    tapAssignMenu(){
        this.btnAssign.click()
    }

    assignAgent(agent){
        const element = $(`//*[text()='${agent}']`)
        element.click();
    }

    openTagMenu(){
        this.btnTags.click()
    }

    selectFirstTag(){
        this.testTag.click();
    }

    openNotesMenu(){
        this.btnNotes.click()
    }

    writeNotes(text){
        this.inputModalNotes.waitForDisplayed()
        this.inputModalNotes.setValue(text)
    }

    hangUp(){
        this.btnHangUp.click()
    }
}

module.exports = new InCallPage();