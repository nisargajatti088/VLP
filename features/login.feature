Feature: Create the employee

  Scenario: Employee creation
    Given a login to the VLP application with "sandeshd@ekfrazo.in" and "1234"
    When i click on the sidebar and I create a new employee 
    Then verify that the employee is created successfully