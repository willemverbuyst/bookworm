Feature: Login

  As a valid user
  I want to log in to the application

  Scenario: Valid login
  Given I open the login page
  When I login with valid credentials
  Then I see "/home" in the url
  And I see "BOOKWORM Home" as title
  And I see "Welcome!" as message

  Scenario: Invalid login
  Given I open the login page
  When I login with invalid credentials
  Then I should see an error message