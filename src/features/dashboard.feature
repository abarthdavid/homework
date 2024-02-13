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

  Scenario: 5. Check that allow to switch location list by region
    Given I open the main page

    When I scroll to Our Locations part on the page
    Then Regions should be displayed correcly
    And "AMERICAS" region should be selected
    And "EMEA" region should not be selected
    And "APAC" region should not be selected

    When I click on the "EMEA" region
    Then "AMERICAS" region should not be selected
    And "EMEA" region should be selected
    And "APAC" region should not be selected
    
    When I scroll to Our Locations part on the page
    And I click on the "APAC" region
    Then "AMERICAS" region should not be selected
    And "EMEA" region should not be selected
    And "APAC" region should be selected

  Scenario: 6. Check the search function
    Given I open the main page

    When I click on the search button
    Then Search modal should be expanded

    When I set the "search" search term in the text box
    And I click on the Find button
    And Search result list with searchterm "search" should be loaded

  Scenario: 7. Chack form's fields validation
    Given I open the contact page

  



