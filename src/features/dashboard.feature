Feature: EPAM page tests - SQE JS training

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

  Scenario: 7. Check form's fields validation
    Given I open the contact page

    When I scroll to Submit button on the page
    And I click on the Submit button
    Then "FirstName textbox" should be required
    And "LastName textbox" should be required
    And "Email textbox" should be required
    And "Phone textbox" should be required

 Scenario: 8. Check the the Company logo on the header lead to the main page
    Given I open the about page

    When I click on the Logo in the Header
    Then EPAM main page should be loaded
  
  Scenario: 9. Check that allows to download report
    Given I open the about page

    When I scroll to Download button on the page
    And I click on the Download button
    Then file extension should be correct




