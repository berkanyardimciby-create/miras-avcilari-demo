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
  - noktalar (isteğe bağlı): alanın birden çok önemli yeri varsa her biri { ad, model, bilgi }
           olarak yazılır; AR'da ◀ ▶ düğmeleriyle, ayrıntı sayfasında sekmelerle gezilir.
           Yoksa alanın tek "model"i gösterilir. Örnek: Efes.
  - gecici: true → alan henüz Dünya Mirası değil, UNESCO Geçici Listesi'nde
           (unescoYili = listeye girdiği yıl; sitede "Geçici Liste" olarak yazılır).
  - sorular: istediğiniz kadar soru eklenebilir. dogru = doğru seçeneğin sırası (0'dan başlar:
           ilk seçenek 0, ikinci 1, ...). Alan, tüm sorular doğru cevaplanınca "avlanır".
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
    sorular: [
      {
        metin: "Göbeklitepe'nin yerleşik hayata geçiş konusundaki görüşleri sarsmasının temel nedeni nedir?",
        secenekler: [
          "Anıtsal yapıların, tarım yaygınlaşmadan önce avcı-toplayıcılar tarafından yapılmış olması",
          "Alanda bilinen en eski yazılı belgelerin bulunması",
          "Dikilitaşların metal aletlerle işlenmiş olması",
          "Alanın bir imparatorluğun başkenti olması"
        ],
        dogru: 0
      },
      {
        metin: "Göbeklitepe hangi döneme tarihlenir?",
        secenekler: ["Üst Paleolitik", "Çanak Çömleksiz Neolitik", "Tunç Çağı", "Demir Çağı"],
        dogru: 1
      },
      {
        metin: "Bazı dikilitaşların yan yüzlerinde kol ve el kabartmaları bulunur. Bu, T biçimi için hangi yorumu destekler?",
        secenekler: [
          "Dikilitaşlar yalnızca çatı taşıyan sütunlardır",
          "Dikilitaşlar güneş saati olarak kullanılmıştır",
          "Dikilitaşlar stilize edilmiş insan (ya da insanüstü varlık) figürleridir",
          "Dikilitaşlar mezar taşıdır"
        ],
        dogru: 2
      }
    ]
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
    noktalar: [
      {
        ad: "Celsus Kütüphanesi",
        model: "modeller/efes.glb",
        bilgi: "MS 2. yüzyılın başında, Roma valisi Celsus'un anısına oğlu tarafından yaptırıldı. Binlerce parşömen rulosu barındırdığı düşünülür. Yıkılmış olan iki katlı cephesi 1970'lerde özgün parçalarıyla yeniden ayağa kaldırıldı."
      },
      {
        ad: "Büyük Tiyatro",
        model: "modeller/efes_tiyatro.glb",
        bilgi: "Panayır Dağı'nın yamacına yaslanan tiyatro, Hellenistik dönemde yapılıp Roma döneminde büyütüldü ve yaklaşık 25.000 kişilik oldu. Oyunların yanı sıra halk toplantıları da burada yapılırdı; liman caddesine bakar."
      },
      {
        ad: "Artemis Tapınağı",
        model: "modeller/efes_artemis.glb",
        bilgi: "Antik dünyanın yedi harikasından biridir. MÖ 6. yüzyılda Lidya Kralı Kroisos'un desteğiyle yapıldı, MÖ 356'da Herostratos adlı biri tarafından yakıldı ve yeniden inşa edildi. Bugün yerinde, parçalarından yeniden dikilmiş tek bir sütun durur."
      }
    ],
    sorular: [
      {
        metin: "Bir liman kenti olan Efes'in zamanla önemini yitirmesinin coğrafi nedeni nedir?",
        secenekler: [
          "Büyük bir depremle denize gömülmesi",
          "Küçük Menderes'in taşıdığı alüvyonların limanı doldurması",
          "Yakındaki bir yanardağın patlaması",
          "Deniz seviyesinin yükselip kenti basması"
        ],
        dogru: 1
      },
      {
        metin: "Celsus Kütüphanesi cephesindeki dört kadın heykeli neyi simgeler?",
        secenekler: [
          "Dört mevsimi",
          "Celsus'un dört kızını",
          "Bilgelik, erdem, düşünce ve bilgi gibi nitelikleri",
          "Roma'nın dört eyaletini"
        ],
        dogru: 2
      },
      {
        metin: "Roma döneminde Efes, hangi eyaletin en önemli merkezlerinden biriydi?",
        secenekler: ["Asya (Asia) eyaleti", "Galatya", "Kilikya", "Mısır"],
        dogru: 0
      }
    ]
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
    sorular: [
      {
        metin: "Peri bacalarının oluşumunu doğru sırayla veren seçenek hangisidir?",
        secenekler: [
          "Volkanik kül birikip tüfe dönüşür → üstte daha sert bir tabaka oluşur → yumuşak tüf, sert tabakadan daha hızlı aşınır",
          "Deniz tabanında mercanlar birikir → deniz çekilir → rüzgâr mercanları şekillendirir",
          "Buzullar vadiyi aşındırır → buzul erir → kalan kayalar sivrilir",
          "Lav sütunlar hâlinde soğur → sütunlar çatlar → üstleri yağmurla yuvarlaklaşır"
        ],
        dogru: 0
      },
      {
        metin: "Kapadokya UNESCO listesine neden 'karma' (hem doğal hem kültürel) alan olarak girmiştir?",
        secenekler: [
          "Yalnızca turist sayısı çok olduğu için",
          "Hem olağanüstü jeolojik oluşumları hem de kayaya oyulmuş yerleşim ve kiliseleri bulunduğu için",
          "İki ayrı ülkenin sınırında bulunduğu için",
          "Hem dağlık hem ovalık olduğu için"
        ],
        dogru: 1
      },
      {
        metin: "Göreme'deki kaya kiliselerinin fresklerinin büyük bölümü hangi döneme aittir?",
        secenekler: ["Hitit", "Roma Cumhuriyeti", "Bizans", "Osmanlı"],
        dogru: 2
      }
    ]
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
    sorular: [
      {
        metin: "I. Antiokhos'un zirveye yaptırdığı kırma taş tümülüs hangi amaçla yapılmıştır?",
        secenekler: [
          "Gözetleme kulesi olarak",
          "Kralın anıt mezarı ve kutsal alanı olarak",
          "Tahıl deposu olarak",
          "Bir yanardağ ağzını kapatmak için"
        ],
        dogru: 1
      },
      {
        metin: "Heykellerdeki 'Zeus-Oromasdes' gibi çift adlı tanrılar neyi gösterir?",
        secenekler: [
          "Yunan ve Pers inanışlarının birleştirildiğini",
          "Tanrıların ikiz olduğunu",
          "Heykellerin iki farklı yüzyılda yapıldığını",
          "Kommagene'nin iki dil konuştuğunu ama tek tanrıya inandığını"
        ],
        dogru: 0
      },
      {
        metin: "Kommagene Krallığı hangi iki büyük güç arasında kalan bir tampon devletti?",
        secenekler: ["Hitit ve Mısır", "Bizans ve Sasani", "Roma ve Part", "Osmanlı ve Safevi"],
        dogru: 2
      }
    ]
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
    sorular: [
      {
        metin: "Safranbolu'nun Osmanlı döneminde zenginleşip gelişmesini sağlayan temel etken nedir?",
        secenekler: [
          "Bir liman kenti olması",
          "Önemli bir kervan yolu üzerinde bulunması",
          "Padişahın yazlık sarayının burada olması",
          "Altın madenlerinin bulunması"
        ],
        dogru: 1
      },
      {
        metin: "Safranbolu evlerinde üst katın sokağa taşan 'çıkma'sı hangi ihtiyaca cevap verir?",
        secenekler: [
          "Zemin katı yağmurdan korumak için tek başına yapılmıştır",
          "Dar arsada üst katta daha geniş yaşam alanı, ışık ve manzara elde etmek",
          "Evin depreme karşı daha ağır olmasını sağlamak",
          "Hayvanların barınması için yer açmak"
        ],
        dogru: 1
      },
      {
        metin: "Safranbolu'daki Cinci Hanı'nın asıl işlevi neydi?",
        secenekler: [
          "Medrese",
          "Kervanların ve tüccarların konakladığı kervansaray",
          "Hamam",
          "Saat kulesi"
        ],
        dogru: 1
      }
    ]
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
    sorular: [
      {
        metin: "Ayasofya'da dev kubbenin yükünü kare planlı gövdeye aktaran üçgen biçimli mimari öğe hangisidir?",
        secenekler: ["Pandantif", "Minare", "Revak", "Şadırvan"],
        dogru: 0
      },
      {
        metin: "Aşağıdakilerden hangisi UNESCO'nun 'İstanbul'un Tarihî Alanları' kapsamındaki dört bölgeden biri DEĞİLDİR?",
        secenekler: ["Süleymaniye", "Zeyrek", "Kara Surları", "Galata"],
        dogru: 3
      },
      {
        metin: "Aşağıdaki yapılardan hangisi Mimar Sinan'ın eseridir?",
        secenekler: ["Ayasofya", "Süleymaniye Camii", "Sultanahmet Camii", "Yerebatan Sarnıcı"],
        dogru: 1
      }
    ]
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
    sorular: [
      {
        metin: "Pamukkale travertenleri hangi süreçle oluşur?",
        secenekler: [
          "Lavın soğuyup beyazlaşmasıyla",
          "Deniz suyunun buharlaşıp tuz bırakmasıyla",
          "Sıcak su yüzeye çıkınca CO₂ kaybeder; çözünmüş kalsiyum bikarbonat, kalsiyum karbonat olarak çöker",
          "Buzulların kayaları aşındırmasıyla"
        ],
        dogru: 2
      },
      {
        metin: "Hierapolis antik çağda en çok hangi özelliğiyle tanınıyordu?",
        secenekler: [
          "Termal suları sayesinde bir sağlık ve şifa merkezi olmasıyla",
          "Bir askerî liman olmasıyla",
          "Altın madenleriyle",
          "Bir krallığın başkenti olmasıyla"
        ],
        dogru: 0
      },
      {
        metin: "Hierapolis'te yer altından boğucu gaz (karbondioksit) çıktığı için 'Cehennem Kapısı' olarak bilinen kutsal alanın adı nedir?",
        secenekler: ["Agora", "Plutonion", "Odeon", "Nymphaion"],
        dogru: 1
      }
    ]
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
    sorular: [
      {
        metin: "Çatalhöyük'ün bilim açısından önemi en iyi hangi seçenekte verilmiştir?",
        secenekler: [
          "Yazının icat edildiği yer olması",
          "Tarım, hayvancılık ve kalabalık yerleşik yaşamın erken ve iyi korunmuş bir örneği olması",
          "İlk demir aletlerin üretildiği yer olması",
          "Bir Roma garnizonu olması"
        ],
        dogru: 1
      },
      {
        metin: "Çatalhöyük'te ölüler genellikle nereye gömülürdü?",
        secenekler: [
          "Yerleşimden uzak bir mezarlığa",
          "Evlerin tabanının altına",
          "Nehre bırakılarak",
          "Dağın zirvesindeki bir tümülüse"
        ],
        dogru: 1
      },
      {
        metin: "Çatalhöyük'te bulunan bir duvar resmi, bazı araştırmacılarca neyin tasviri olarak yorumlanır?",
        secenekler: [
          "Bir deniz savaşının",
          "Yerleşimin planı ve arkasında patlayan bir yanardağın (Hasan Dağı)",
          "Bir kralın taç giyme töreninin",
          "Yıldız haritasının"
        ],
        dogru: 1
      }
    ]
  },

  // ---- BÖLGEMİZ: UNESCO Geçici Listesi (gecici: true olanlar ayrı bölümde gösterilir) ----
  {
    id: "mamure",
    ad: "Mamure Kalesi",
    il: "Mersin (Anamur)",
    unescoYili: 2012,
    gecici: true,
    donem: "Roma döneminden Osmanlı'ya",
    model: "modeller/mamure.glb",
    isaretci: "isaretciler/letterF.patt",
    olcek: 1.2,
    renk: "#5b7a8c",
    ozet: "Anamur'da, deniz kıyısında yükselen Mamure, Türkiye'nin en iyi korunmuş ortaçağ kalelerinden biridir. Temelleri Roma dönemine uzanır; Selçuklular, Karamanoğulları ve Osmanlılar tarafından onarılıp kullanılmıştır. Surları, burçları ve avlularıyla bugün de büyük ölçüde ayaktadır.",
    biliyorMuydun: "Kalenin avlusunda Karamanoğulları döneminden kalma küçük bir cami bulunur.",
    sorular: [
      {
        metin: "Mamure Kalesi'nin Roma'dan Osmanlı'ya kadar farklı devletlerce onarılıp kullanılması en çok neyi gösterir?",
        secenekler: [
          "Kalenin Akdeniz kıyısında, deniz ve kara yollarını denetleyen stratejik bir konumda olduğunu",
          "Kalenin yalnızca dinî amaçla kullanıldığını",
          "Bölgede hiç savaş yaşanmadığını",
          "Kalenin her dönemde yeniden sıfırdan yapıldığını"
        ],
        dogru: 0
      },
      {
        metin: "13. yüzyılda Akdeniz kıyısındaki kaleleri ele geçirip onartan Anadolu Selçuklu sultanı kimdir?",
        secenekler: ["Sultan Alparslan", "I. Alâeddin Keykubad", "II. Kılıç Arslan", "Osman Gazi"],
        dogru: 1
      },
      {
        metin: "Bir yerin UNESCO 'Geçici Listesi'nde olması ne anlama gelir?",
        secenekler: [
          "Dünya Mirası listesinden çıkarıldığı",
          "Ülkenin, o yeri ileride Dünya Mirası olarak aday göstermeyi planladığı",
          "Yalnızca geçici bir süre ziyarete açık olduğu",
          "Tehlike altındaki miras ilan edildiği"
        ],
        dogru: 1
      }
    ]
  },
  {
    id: "kizkalesi",
    ad: "Kızkalesi ve Korykos Antik Kenti",
    il: "Mersin (Erdemli)",
    unescoYili: 2014,
    gecici: true,
    donem: "Antik çağ liman kenti + Orta Çağ kaleleri",
    model: "modeller/kizkalesi.glb",
    isaretci: "isaretciler/letterG.patt",
    olcek: 1.2,
    renk: "#2f8fb3",
    ozet: "Kızkalesi, kıyıya yakın küçük bir adacığın üzerine yapılmış bir deniz kalesidir. Karşısındaki kıyıda Korykos kara kalesi ve antik Korykos kentinin kalıntıları bulunur. Orta Çağ'da Bizanslılar ve Kilikya Ermeni Krallığı tarafından kullanılan iki kale, birlikte limanı korurdu.",
    biliyorMuydun: "Efsaneye göre bir kral, kızının yılan sokmasıyla öleceği kehanetini duyunca onu korumak için denizin ortasına bu kaleyi yaptırmıştır; ama yılan, kıza gönderilen bir üzüm sepetinin içinde kaleye ulaşır.",
    sorular: [
      {
        metin: "Kızkalesi'nin bir adacık üzerine yapılmasının savunma açısından en önemli avantajı nedir?",
        secenekler: [
          "Çevresinin denizle çevrili olması nedeniyle karadan doğrudan saldırıya kapalı olması",
          "Adada tarım yapılabilmesi",
          "Adanın yanardağ kayalarından oluşması",
          "Kalenin kıyıdan görünmemesi"
        ],
        dogru: 0
      },
      {
        metin: "Kızkalesi ile karşı kıyıdaki Korykos kara kalesi birlikte hangi işi görürdü?",
        secenekler: [
          "Tahıl depolamak",
          "Limanı ve deniz yolunu iki yönden korumak",
          "Kervansaray olarak tüccarları ağırlamak",
          "Gözlemevi olarak yıldızları izlemek"
        ],
        dogru: 1
      },
      {
        metin: "Kızkalesi efsanesine göre kehanet nasıl gerçekleşir?",
        secenekler: [
          "Kale bir fırtınada yıkılır",
          "Kız kaleden kaçar",
          "Kaleye gönderilen üzüm sepetinden çıkan yılan kızı sokar",
          "Kral kaleyi düşmana teslim eder"
        ],
        dogru: 2
      }
    ]
  }
];
