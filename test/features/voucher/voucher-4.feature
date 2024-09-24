@Voucher
Feature: Voucher

        @Voucher-4
        Scenario: Memastikan voucher tetap tampil ketika order tolakan sebagian by super dan customer
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
              And user click tolakan dari "Super" for "First" SKU
              And user input qty tolakan with value 1 for "First" SKU
              And user click tolakan dari "Customer" for "Second" SKU
              And user input qty tolakan with value 1 for "Second" SKU
              And user click Lihat Selengkapnya
              And user shown nominal voucher
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
              And user shown nominal voucher
             Then user successfully memastikan voucher tetap tampil ketika order tolakan sebagian by super dan customer
        
        Examples:
                  | a | b |
                  | a | b |