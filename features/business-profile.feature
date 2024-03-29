Feature: Business Profile
  As a visitor
  I can view a business profile
  So that I can purchase documents and reports

  Scenario: UK Business overview, docs & reports
    When I visit the profile page for company "02425919"
    Then I should be on the profile page for "Northern Connectors Limited"
    And I should see a company overview
    When I select the reports tab
    Then I should see the 5 vendor report sets available
    When I select the documents tab
    Then I should see 2 vendor document sets available
    And I should see 48 50p RM documents available

  Scenario: UK Business with missing 50p docs
    When I visit the profile page for company "00040496"
    Then I should be on the profile page for "software testing co"
    And I should see a company overview
    When I select the documents tab
    Then I should see 1 vendor document set available

  Scenario: International Business with missing 50p docs
    When I visit the Belgian profile page for company "370547584"
    Then I should be on the Belgian profile page for "van roy vanessa"
    And I should see a company overview
    When I select the documents tab
    Then I should see 0 vendor document set available
    And I should see an option to contact Julia

  Scenario: Unavailable Company
    When I visit the profile page for company "02425919XXX"
    Then I should see a company unavailable error message

  Scenario: Report details
    When I visit the profile page for company "02425919"
    And I view the reports tab
    And I click through to the Equifax report
    Then I should be on the the report detail page

