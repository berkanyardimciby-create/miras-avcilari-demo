/*
  MİRAS AVCILARI — ALAN BİLGİLERİ
  ================================
  Öğrenciler yalnızca bu dosyayı düzenler. Kurallar:
  - Her alan { ... } arasında durur, alanların arasında virgül olur.
  - Yazılar "tırnak" içinde kalır. Metnin içinde tırnak gerekiyorsa ' kullanın.
  - id: küçük harf, Türkçe karakter ve boşluk YOK (QR kod ve dosya adı bundan oluşur).
  - model: modeller/ klasöründeki .glb dosyasının adı.
  - isaretci: AR.js modunda bu alanı açan işaretçi.
      "hiro" veya "kanji" → AR.js'in hazır işaretçileri (ek dosya gerekmez)
      "isaretciler/efes.patt" → kendi ürettiğiniz işaretçi (NASIL KULLANILIR'a bakın)
      ""  → bu alanın AR.js işaretçisi yok (QR ile açılır)
  - olcek: AR.js modunda modelin işaretçi üstündeki büyüklüğü. 1.2 ≈ model işaretçiyi kaplar;
           model ekrandan taşıyorsa küçültün (ör. 0.8), çok küçükse büyütün.
*/
window.ALANLAR = [
  {
    id: "gobeklitepe",
    ad: "Göbeklitepe",
    il: "Şanlıurfa",
    unescoYili: 2018,
    donem: "Yaklaşık MÖ 9600–8200",
    model: "modeller/gobeklitepe.glb",
    isaretci: "hiro",
    olcek: 1.2,
    renk: "#b5651d",
    ozet: "Avcı-toplayıcı insanların, tarım ve yerleşik hayata geçmeden önce yaptığı dairesel yapılardır. Ortadaki T biçimli dev dikilitaşların üzerinde tilki, yaban domuzu, yılan ve akbaba gibi hayvan kabartmaları vardır.",
    biliyorMuydun: "Göbeklitepe, Mısır piramitlerinden yaklaşık 7000 yıl daha eskidir.",
    soru: {
      metin: "Göbeklitepe'deki büyük dikilitaşlar hangi harfe benzer?",
      secenekler: ["T", "L", "O", "X"],
      dogru: 0
    }
  },
  {
    id: "efes",
    ad: "Efes",
    il: "İzmir",
    unescoYili: 2015,
    donem: "Hellenistik ve Roma dönemleri",
    model: "modeller/efes.glb",
    isaretci: "kanji",
    olcek: 1.2,
    renk: "#8a7f6a",
    ozet: "Antik dünyanın en büyük liman kentlerinden biridir. Celsus Kütüphanesi'nin iki katlı cephesi, büyük tiyatrosu ve mermer caddeleri bugün hâlâ ayaktadır. Antik dünyanın yedi harikasından Artemis Tapınağı da buradaydı.",
    biliyorMuydun: "Celsus Kütüphanesi, MS 2. yüzyılda bir babanın anısına oğlu tarafından yaptırılmıştır; kütüphane aynı zamanda Celsus'un anıt mezarıdır.",
    soru: {
      metin: "Antik dünyanın yedi harikasından hangisi Efes'teydi?",
      secenekler: ["Rodos Heykeli", "Artemis Tapınağı", "İskenderiye Feneri", "Zeus Heykeli"],
      dogru: 1
    }
  },
  {
    id: "kapadokya",
    ad: "Göreme Millî Parkı ve Kapadokya",
    il: "Nevşehir",
    unescoYili: 1985,
    donem: "Milyonlarca yıllık doğa + Bizans dönemi kaya kiliseleri",
    model: "modeller/kapadokya.glb",
    isaretci: "",
    olcek: 1.2,
    renk: "#c9925a",
    ozet: "Volkanların püskürttüğü küllerin sertleşmesiyle oluşan tüf kayası, rüzgâr ve yağmurla aşınarak peri bacalarını oluşturmuştur. İnsanlar bu yumuşak kayaları oyarak ev, kilise ve yer altı şehirleri yapmıştır.",
    biliyorMuydun: "Kapadokya hem doğal hem kültürel miras olarak listeye girmiştir; Derinkuyu ve Kaymaklı yer altı şehirleri de bu bölgededir.",
    soru: {
      metin: "Peri bacalarının tepesindeki 'şapka' neden aşınmadan kalır?",
      secenekler: ["Boyanmıştır", "Daha sert bir kayadan oluşur", "İnsanlar korur", "Su geçirmez"],
      dogru: 1
    }
  },
  {
    id: "nemrut",
    ad: "Nemrut Dağı",
    il: "Adıyaman",
    unescoYili: 1987,
    donem: "MÖ 1. yüzyıl, Kommagene Krallığı",
    model: "modeller/nemrut.glb",
    isaretci: "",
    olcek: 1.2,
    renk: "#7d6e5d",
    ozet: "Kommagene Kralı I. Antiokhos, dağın zirvesine kırma taşlardan yapay bir tepe (tümülüs) yaptırmıştır. Çevresindeki terasların üzerinde tanrı ve kral heykelleri bulunur; heykellerin dev başları zamanla yere düşmüştür.",
    biliyorMuydun: "Heykeller Pers ve Yunan sanatının birlikte kullanıldığı bir tarzda yapılmıştır.",
    soru: {
      metin: "Nemrut Dağı'ndaki dev heykelleri hangi krallık yaptırmıştır?",
      secenekler: ["Hitit", "Urartu", "Kommagene", "Lidya"],
      dogru: 2
    }
  },
  {
    id: "safranbolu",
    ad: "Safranbolu Şehri",
    il: "Karabük",
    unescoYili: 1994,
    donem: "Osmanlı dönemi",
    model: "modeller/safranbolu.glb",
    isaretci: "",
    olcek: 1.2,
    renk: "#a0522d",
    ozet: "Kervan yolu üzerindeki bu Osmanlı kenti, ahşap ve kerpiçten yapılmış çıkmalı evleriyle ünlüdür. Evler, birbirinin manzarasını kapatmayacak şekilde yamaçlara yerleştirilmiştir.",
    biliyorMuydun: "Şehrin adı, çevresinde yetiştirilen safran bitkisinden gelir.",
    soru: {
      metin: "Safranbolu evlerinin üst katının alt kattan dışarı taşan kısmına ne denir?",
      secenekler: ["Kubbe", "Çıkma", "Avlu", "Sütun"],
      dogru: 1
    }
  },
  {
    id: "istanbul",
    ad: "İstanbul'un Tarihî Alanları",
    il: "İstanbul",
    unescoYili: 1985,
    donem: "Roma, Bizans ve Osmanlı dönemleri",
    model: "modeller/istanbul.glb",
    isaretci: "",
    olcek: 1.2,
    renk: "#6b5b95",
    ozet: "Tarihî Yarımada'daki Ayasofya, Sultanahmet Camii, Topkapı Sarayı, Süleymaniye ve kara surları bu alanın parçalarıdır. Ayasofya, MS 537'de Bizans İmparatoru Justinianus döneminde tamamlanmıştır.",
    biliyorMuydun: "Ayasofya, yaklaşık bin yıl boyunca dünyanın en büyük kilisesi olarak kalmıştır.",
    soru: {
      metin: "Ayasofya hangi imparator döneminde yapılmıştır?",
      secenekler: ["Justinianus", "Fatih Sultan Mehmet", "Büyük İskender", "Kanuni Sultan Süleyman"],
      dogru: 0
    }
  },
  {
    id: "pamukkale",
    ad: "Hierapolis-Pamukkale",
    il: "Denizli",
    unescoYili: 1988,
    donem: "Doğal oluşum + Hellenistik/Roma kenti",
    model: "modeller/pamukkale.glb",
    isaretci: "",
    olcek: 1.2,
    renk: "#4fa3c7",
    ozet: "Kalsiyum bakımından zengin sıcak su kaynakları, yamaçtan akarken bembeyaz traverten basamakları oluşturur. Hemen yukarıda, antik çağda bir şifa merkezi olan Hierapolis kentinin kalıntıları bulunur.",
    biliyorMuydun: "Pamukkale de Kapadokya gibi hem doğal hem kültürel miras olarak listededir.",
    soru: {
      metin: "Pamukkale'nin beyaz basamaklarına ne ad verilir?",
      secenekler: ["Peri bacası", "Traverten", "Dikit", "Lav"],
      dogru: 1
    }
  },
  {
    id: "catalhoyuk",
    ad: "Çatalhöyük",
    il: "Konya",
    unescoYili: 2012,
    donem: "Yaklaşık MÖ 7400–6200 (Neolitik)",
    model: "modeller/catalhoyuk.glb",
    isaretci: "",
    olcek: 1.2,
    renk: "#9c6b3c",
    ozet: "Dünyanın en eski köy yerleşimlerinden biridir. Kerpiç evler birbirine bitişik yapılmış, aralarında sokak bırakılmamıştır. İnsanlar evlerine damdaki açıklıktan merdivenle girerdi. Duvarlarda resimler ve kabartmalar bulunmuştur.",
    biliyorMuydun: "Çatalhöyük'te sokak olmadığı için insanlar damların üzerinde yürüyerek dolaşırdı.",
    soru: {
      metin: "Çatalhöyük'te insanlar evlerine nereden girerdi?",
      secenekler: ["Ön kapıdan", "Bodrumdan", "Damdaki açıklıktan", "Bahçeden"],
      dogru: 2
    }
  }
];
