@SuperKoin
Feature: Super Koin

        @SuperKoin-8
        Scenario: Memastikan Ketika ada tolakan Sebagian Super untuk seluruh Product Rokok, Bundle, flashsale, tidak ada penyesuaian Super koin (Order Product Rokok, Flashsale, Bundle dan Non Rokok)
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
              And user Select status penerimaan "Ditolak Sebagian"
              And user click konfirmasi
              And user click tolakan dari "Super" for "Second" SKU
              And user input qty tolakan with value 4 for "Second" SKU
              And user click tolakan dari "Super" for "Third" SKU
              And user input qty tolakan with value 4 for "Third" SKU
              And user click tolakan dari "Super" for "Forth" SKU
              And user input qty tolakan with value 4 for "Forth" SKU
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
             Then I see information Order without Super Koin Adjust

        Examples:
                  | a | b |
                  | a | b |