@Voucher
Feature: Voucher

        @Voucher-3
        Scenario: Memastikan voucher terlepas ketika order tolakan sebagian by customer
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
              And user click dropdown status penerimaan
              And user choose status penerimaan "Ditolak Sebagian"
              And user click konfirmasi
              And user click tolakan dari "Customer"
              And user input qty tolakan with value 1
              And user click lihat selengkapnya
              And user not shown nominal voucher
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
              And user not shown nominal voucher
             Then user successfully memastikan voucher terlepas ketika order tolakan sebagian by customer

        Examples:
                  | a | b |
                  | a | b |