dataSetVersion = "2018-06-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Original", tooltip: "feat. salt", key: "kirara" },
      { name: "Hidamari Sketch", tooltip: "aka nutbladder grills", key: "wide" },
      { name: "Gakkou Gurashi", tooltip: "spoiler: there is (no) hope", key: "gg" },
      { name: "A Channel", tooltip: "suki tooru~~", key: "achan" },
      { name: "Yuyushiki", tooltip: "yui's harem", key: "yys" },
      { name: "Kin`iro Mosaic", tooltip: "dess", key: "km" },
      { name: "New Game!", tooltip: "ganbaruzoi", key: "ng" },
      { name: "Stella no Mahou", tooltip: "notNewGame, also Teru being Teru", key: "snm" },
      { name: "Urara Meirochou", tooltip: "feat. bellies and Nono being bullied(?)", key: "urara" },
      { name: "Kill Me Baby", tooltip: "the most philosophical slapstick of all time", key: "kmb" },
      { name: "Sakura Trick", tooltip: "me: *drunk on dat gay shit*", key: "gay" },
      { name: "Blend S", tooltip: "a reminder that Hideri's CV is essentially Nico and you are gay", key: "blends" },
      { name: "Slow Start", tooltip: "for once it's not a protag's harem", key: "ss" },
      { name: "Yuru Camp", tooltip: "camp s h i y o", key: "yc" },
      { name: "Yumekui Merry", tooltip: "wait this is Kirara?!", key: "merry" },
      { name: "Ha na ya ma ta", tooltip: "paato paato the dramafes", key: "hana" },
      { name: "Comic Girls", tooltip: "abababa", key: "comiga" },
      { name: "Anne Happy", tooltip: "the kirara that describes you", key: "anhapi" },
      { name: "Harukana Recieve", tooltip: "haikyu, but fappable and always beach episode", key: "haruka" },
      { name: "K-ON!", tooltip: "KyoAni cashcow about cute girls not trying to do band things", key: "kon"},
      { name: "Koufuku Grafitti", tooltip: "Souma's grandma", key: "foodgasm"},
      { name: "Acchi Kocchi", tooltip: "This animu gave me diabetes", key: "acchi"},
      { name: "Gochuumon Usagi desu ka?", tooltip: "civil war: cawfee VS gween tea", key: "rabbits" }
    ]
  },
  {
    name: "Filter by Availability",
    key: "when",
    tooltip: "Check this to restrict to characters that appear in the game.",
    checked: false,
    sub: [
        { name: "In-Game", key: "in" },
        { name: "Soon.tm", tooltip: "aka datamined", key: "soon" },
        { name: "Never.tm", key: "never" }
    ]
  },
  {
    name: "Filter by Importance",
    key: "status",
    tooltip: "Okay, seriously, I have an actual standard for this.",
    checked: true,
    sub: [
        { name: "Main Cast", key: "main", tooltip: "By definition, she appears in at least 33% of all chapters after his/her debut."},
        { name: "Game Cast", key: "game", tooltip: "She\'d normally be less than a recurring character, but if she's in the game, she has to be either a fan favorite or an important character!"},
        { name: "Rival", key: "anta", tooltip: "She appears in at least one major arc as a foil / rival / enemy."},
        { name: "Recurring", key: "recur", tooltip: "She appears in at least 10% of all chapters after his/her debut."},
        { name: "Non-Recurring", key: "side", tooltip: "She only appears in one arc after debut, and for the rest of the manga / anime, she is absent. Also, all characters that do not fit the criteria for recurring also fit here.", checked: false}
    ]
  },
  {
    name: "No Traps",
    key: "trap",
    checked: false,
    tooltip: "Check this to remove Hideri (and others?), because (s)he's ranked ??? in your heart."
  },
  {
    name: "No non-Anime charas",
    key: "nonanimu",
    checked: true,
    tooltip: "Check this to remove Omi, you heartless bastard."
  }
];

dataSet[dataSetVersion].characterData = [
  // Hidamari Sketch
  {
    name: "Yuno",
    img: "https://i.imgur.com/5l2Ekoc.jpg",
    opts: {
      series: [ "wide" ],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Miyako",
    img: "https://i.imgur.com/cNbZ8Gg.jpg",
    opts: {
      series: [ "wide" ],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Hiro",
    img: "https://i.imgur.com/WHJzb50.jpg",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Sae",
    img: "https://i.imgur.com/TUVJgMh.jpg",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nori",
    img: "https://i.imgur.com/F0ToNFe.jpg",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nazuna",
    img: "https://i.imgur.com/chPqUyM.jpg",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yoshinoya",
    img: "https://i.imgur.com/HQ585oP.png",
    opts: {
      series: ["wide"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Matsuri",
    img: "https://i.imgur.com/sbKhIbT.jpg",
    opts: {
      series: ["wide"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },


  // Yuyushiki
  {
    name: "Yuzuko Nonohara",
    img: "https://i.imgur.com/L0NW5TO.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yui Ichii",
    img: "https://i.imgur.com/cgAG4bf.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yukari Hinata",
    img: "https://i.imgur.com/qaIc7uo.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yoriko Matsumoto",
    img: "https://i.imgur.com/GP5t5Eb.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["recur"]
    }
  },
  {
    name: "Chiho Aikawa",
    img: "https://i.imgur.com/JcVdm7T.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Fumi Hasegawa",
    img: "https://i.imgur.com/CKkoeBm.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["recur"]
    }
  },
  {
    name: "Kei Okano",
    img: "https://i.imgur.com/TRuWpVp.jpg",
    opts: {
      series: ["yys"],
      when: ["recur"]
    }
  },


  // Gakkou Gurashi
  {
    name: "Yuki Takeya",
    img: "https://i.imgur.com/92TcgbJ.jpg",
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Kurumi Ebisuzawa",
    img: "https://i.imgur.com/5kTdgCk.jpg",
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Miki Naoki",
    img: "https://i.imgur.com/djD9QzI.jpg",
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Megumi Sakura",
    img: "https://i.imgur.com/iPOUVOX.jpg",
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main", "recur"]
    }
  },
  {
    name: "Yuri Wakasa",
    img: "https://i.imgur.com/d7Snyy2.jpg",
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Ruu Wakasa",
    img: "https://i.imgur.com/4ZosD4E.png",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Hikako Kirai",
    img: "https://i.imgur.com/EmHBMc5.png",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Touko Deguchi",
    img: "https://i.imgur.com/5zeW3XR.jpg",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Aki Hikarizato",
    img: "https://i.imgur.com/EKUaV08.jpg",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Aosoi Shiiko",
    img: "https://i.imgur.com/jzhiF2o.jpg?2",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Kei Shidou",
    img: "https://i.imgur.com/IhlBqzf.jpg?1",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["side"]
    }
  },


  // New Game
  {
    name: "Aoba Suzukaze",
    img: "https://i.imgur.com/p8rY4Ig.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Hifumi Takimoto",
    img: "https://i.imgur.com/5dOhBCb.jpg",
    opts: {
      series: ["ng"],
      when:["in"],
      status: ["main"]
    }
  },
  {
    name: "Hajime Shinoda",
    img: "https://i.imgur.com/3ieZMGf.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yun Iijima",
    img: "https://i.imgur.com/BakGJt0.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Kou Yagami",
    img: "https://i.imgur.com/MfBHah2.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Rin Tooyama",
    img: "https://i.imgur.com/0vJEsV6.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nene Sakura",
    img: "https://i.imgur.com/rQPuFYZ.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Umiko Ahagon",
    img: "https://i.imgur.com/xhpJjXm.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Momiji Mochizuki",
    img: "https://i.imgur.com/d4zfF7D.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main", "anta"]
    }
  },
  {
    name: "Tsubame Narumi",
    img: "https://i.imgur.com/uHa3HP8.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main", "anta"]
    }
  },
  {
    name: "Shizuku Hazuki",
    img: "https://i.imgur.com/5w0JkRO.jpg?1",
    tooltip: "She's officially called Haduki but no. Just no.",
    opts: {
      series: ["ng"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Christina Wako Yamato",
    img: "https://i.imgur.com/Le6dnRN.png?1",
    opts: {
      series: ["ng"],
      when: ["never"],
      status: ["side", "anta"]
    }
  },
  {
    name: "Hotaru Hoshikawa",
    img: "https://i.imgur.com/IWtrx5d.png?1",
    opts: {
      series: ["ng"],
      when: ["never"],
      status: ["recur"]
    }
  },


  // A Channel
  {
    name: "Tooru",
    img: "https://i.imgur.com/lWooYNy.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Run",
    img: "https://i.imgur.com/ebsBgzG.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yuuko",
    img: "https://i.imgur.com/sek4Gtu.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nagi",
    img: "https://i.imgur.com/L139c9B.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Miho",
    img: "https://i.imgur.com/QddPCdv.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yutaka",
    img: "https://i.imgur.com/gu8tZD0.png?1",
    opts: {
      series: ["achan"],
      when: ["never"],
      status: ["main"]
    }
  },


  // Kiniro Mosaic
  {
    name: "Karen Kujou",
    img: "https://i.imgur.com/5URXuui.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Alice Cartelet",
    img: "https://i.imgur.com/o6bSQh9.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Shinobu Oomiya",
    img: "https://i.imgur.com/azmRVtf.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Aya Komichi",
    img: "https://i.imgur.com/PJxlbjW.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Youko Inokuma",
    img: "https://i.imgur.com/axxZUpr.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Honoka Matsubara",
    img: "https://i.imgur.com/2gCfVEJ.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Isami Oomiya",
    img: "https://i.imgur.com/RxESoYN.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["recur"]
    }
  },
  {
    name: "Sakura Karasuma",
    img: "https://i.imgur.com/a2UrZ8S.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Akari Kuzehashi",
    img: "https://i.imgur.com/QyeV3qt.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  }

// Urara Meirochou
  {
    name: "Chiya",
    img: "https://i.imgur.com/eBN4GyI.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Kon Tatsumi",
    img: "https://i.imgur.com/4F0PsCK.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Koume Yukimi",
    img: "https://i.imgur.com/TFhcRab.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nono Natsume",
    img: "https://i.imgur.com/rVTC4z8.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Saku Iroi",
    img: "https://i.imgur.com/UfhhRxQ.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nina Natsume",
    img: "https://i.imgur.com/SHRbP8I.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
  name: "Omi Nijou",
  img: "https://i.imgur.com/xIyeAVA.jpg",
  opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
];
