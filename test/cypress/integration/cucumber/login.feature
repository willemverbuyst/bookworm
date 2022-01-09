Feature: Login to application

  As a valid user
  I want to log in to the application

  Scenario: Valid login
    Given I open the login page
    When I login with valid credentials
    Then I should see the home page