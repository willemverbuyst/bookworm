Feature: Navigation

  As a user
  I want to use the tabs at the bottom to navigate

  Scenario: Navigate to books page
    Given I use the application
    When I click on the book link
    Then I see "/books" in the url
    And I see "Books" as title

  Scenario: Navigate to authors page
    When I click on the author link
    Then I see "/authors" in the url
    And I see "Authors" as title

  Scenario: Navigate to review page
    When I click on the review link
    Then I see "/review" in the url
    And I see "Review" as title

  Scenario: Navigate to home page
    When I click on the home link
    Then I see "/home" in the url
    And I see "Home" as title