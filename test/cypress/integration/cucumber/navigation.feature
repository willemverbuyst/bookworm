Feature: Navigation

  As a user
  I want to use the tabs at the bottom to navigate

  Scenario: Correct navigation
  Given I use the application
  When I click on the Book tab
  Then I should see the book page
  When I click on the Author tab
  Then I should see the author page
  When I click on the Feeback tab
  Then I should see the feedback page
  When I click on the Home tab
  Then I should see the home page