@SuperKoin
Feature: Super Koin

        @SuperKoin-5
        Scenario: Memastikan Ketika ada tolakan Sebagian Customer Product Non Rokok, ada penyesuaian Super koin (Order Product Rokok dan Non Rokok)
            Given I am on the onboarding page
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
              And user click tolakan dari "Customer" for "First" SKU
              And user input qty tolakan with value 1 for "First" SKU
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
             Then I see information order with super koin adjusted

        Examples:
                  | a | b |
                  | a | b |

