Feature: Aircall InCall feature
  Background:
    Given I am on the "login" page
    When I login with user "" and password ""
    Then I am on language page
    Then default language is "English"
    When I click on next button on language page
    Then I am on introduction page
    When I skip introduction page
    Then I am on phone page
    When I call number ""

  Scenario Outline: As a user, I can mute a call
     When I mute call
     Then mute button toggle

  Scenario Outline: As a user, I can hold a call
     When I hold call
     Then hold button toggle

  Scenario Outline: As a user, I tap close on keyboard I sould back on the phone view
    When I tap on keyboard on a call
    Then keyboard on call appear
    When I close keyboard on a call 
    Then I am on phone view

  Scenario Outline: As a user, I can tap on number and symbols on the keyboard and they are displayed on screen
    When I tap on keyboard on a call
    Then keyboard on call appear
    When I enter in keyboard "#65*"
    Then keyboard input has "#65*" value
  
  Scenario Outline: As a user, When I click on Assign this call a new modal should appears
      When I tap on assign button on a call
      Then assign modal is displayed

  Scenario Outline: As a user, I assign an agent in a call
      When I tap on assign button on a call
      Then assign modal is displayed
      When I assign agent "QA tester (me)"
      Then success assign modal is displayed

  Scenario Outline: As a user, I assign a tag in a call
       When I tap on tag button on a call
       Then tags modal is displayed
       When I assign first tag
       Then tag tick button is displayed

  Scenario Outline: As a user, When I write notes in a call
    When I tap on notes button on a call
    And I write "test notes 123" notes in a call
    And I hang up a call
    Then notes "test notes 123" still saved