Feature: Dashboard

  Scenario: 1. Check the title is correct
    Given I open the main page
    Then Page title should "be equal to" "EPAM | Software Engineering & Product Development Services"

  Scenario: 2. Check the ability to switch Light / Dark mode
    Given I open the main page
    Then Page theme should be light

    When I click on the theme toogle
    Then Page theme should be dark

  Scenario: 3. Check that allow to change language to UA
    Given I open the main page
    
    When I click on the location selector
    Then Location panel should be visible
    And UA option in Location panel should be visible

    When I click on the UA option in Location panel
    Then UA EPAM page should be loaded

  Scenario: 4. Check the policies list
    Given I open the main page

    When I scroll to the bottom of the page
    Then Policies list should include the correct items