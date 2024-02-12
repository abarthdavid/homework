Feature: Dashboard

  Scenario: Check the title is correct
    Given I open the main page
    Then Page title should "be equal to" "EPAM | Software Engineering & Product Development Services"

  Scenario: Check the ability to switch Light / Dark mode
    Given I open the main page
    Then Page theme should be light
    When I click on the theme toogle
    Then Page theme should be dark
