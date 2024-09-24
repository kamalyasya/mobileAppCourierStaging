@Login
Feature: Login

        @LoginSuccess
        Scenario: Login
            Given I am on the onboarding page
             When I click masuk sekarang
              And I input username "nafifurqon"
              And I input password "123456"
              And I click login
            #   And I input phone number "081200000000"
            #   And I click lanjut
             Then I am on the dashboard

        Examples:
                  | a | b |
                  | a | b |