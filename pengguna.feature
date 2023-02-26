Feature: Pengguna kasirAja

  Scenario Outline: As a user, I can see error alert field <field>

    Given I am on the login page
    When I login with "hajaraniranra@gmail.com" and "hajarani17"
    And I click menu pengguna
    And I click button tambah
    And I <scenario> field
    And I click button simpan
    Then I should see a flash message saying <message>

    Examples:
      | username | password                     | message                             |
      | nama     | dont input any               | "nama" is not allowed to be empty   |
      | email    | input invalid data to email  | "email" must be a valid email       |
