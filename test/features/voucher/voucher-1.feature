@Voucher
Feature: Voucher

        @Voucher-1
        Scenario: Memastikan voucher tetap tampil ketika order diterima semua
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
              And user choose status penerimaan "Diterima Semua"
              And user click konfirmasi
              And user click lihat selengkapnya
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
             Then user successfully memastikan voucher tetap tampil ketika order diterima semua

              ######### Dashboard ##########

            #   And user login dashboard
            #   And user click Finance menu
            #   And user click Setoran submenu
            #   And user click Buat setoran
            #   And user choose tipe order inhouse
            #   And user choose gudang aloha
            #   And user choose kurir feboi234
            #   And user shown list invoice on Complete Transaction
            #   And user check information on Grand total setoran
            #   And user check print bukti setor
            #   And user click buat setoran
            #   And user click Ya, Yakin
            #   And user successfully create setoran
            #   And user click detail setoran on list setoran
            #   And user successfully show detail setoran
            #   And user click Tab Invoice yang sudah dibayar
            #   And user input invoice code on searchbar
            #   And user choose filter Tanggal Kirim
            #   And user successfully show invoice on list
            #   And user click checklist
            #   And user click Complete Transaction
            #   And user click upload bukti pembayaran
            #   And user choose file upload
            #   And user click open
            #   And user successfully upload bukti pembayaran
            #   And user click upload
            #   And user click Ya, Yakin
            #   And user successfully bulk moved invoice
            #   And user click finance menu
            #   And user click complete order submenu
            #   And user input kode invoice on searchbar
            #   And user successfully shown bulk complete code on list
            #   And user click Detail bulk complete
            #   And user shown bukti bayar the same with photo on upload bukti pembayaran setoran
            #   And user click simpan
            #   And user click Ya, Lanjutkan
            #   And user successfully change status bulkcomplete to complete
            #   And user click Order menu
            #   And user click Penjualan Submenu
            #   And user input specific invoice code on searchbar
            #   And user click enter
            #   And user choose warehouse
            #   And user choose period
            #   And user shown invoice on list
            #  When user to kolom status
            #  Then user successfully shown status invoice on Selesai

        Examples:
                  | a | b |
                  | a | b |

