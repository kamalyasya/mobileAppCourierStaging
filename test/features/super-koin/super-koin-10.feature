@SuperKoin
Feature: Super Koin

        @SuperKoin-10
        Scenario: Memastikan order superkoin yang ditolak semua by customer, superkoin lepas
            Given I am on the onboarding page
             When I click masuk sekarang
              And I input username "nafifurqon"
              And I input password "123456"
              And I click login
            #   And I input phone number "081200000000"
            #   And I click lanjut
             Then I am on the dashboard

             When user click specific order
              And user get invoice
              And user click pesanan
              And user click dropdown update invoice
              And user select "Terima Semua Invoice"
              And user click konfirmasi
              And user click dropdown status penerimaan
              And user Select status penerimaan "Ditolak Semua"
              And user click konfirmasi
              And user click siap diterima

             When user upload bukti kirim
              And user select tipe pembayaran "Cash"
              And user click konfirmasi
              And user click siap diterima

             When user click tab sudah diterima
              And user search invoice
             When user click spesific order
              And user click pesanan
              And user click lihat selengkapnya
             Then I see information order rejected without supercoin deduction

        Examples:
                  | a | b |
                  | a | b |