/* property
    characterData, checked, img, key, name, nonanimu, options, opts, 
    category: ["anime"]rarity,
    series status, sub, tooltip, trap, when
*/
/* global
    dataSet,
    dataSetVersion
*/
/* eslint-disable no-global-assign */
dataSetVersion = "2019-01-23" // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {}

dataSet[dataSetVersion].options = [
    {
        name: "Filter",
        key: "category",
        tooltip: "Check one category only to avoid dumbness.",
        checked: true,
        sub: [
          { name: "Anime", tooltip: "aoty", key: "anime" },
          { name: "Girl", tooltip: "girl", key: "girl", checked: false},
          { name: "Boy", tooltip: "boy", key: "boy", checked: false},
          { name: "Supp", tooltip: "supp", key: "supp", checked: false},
          { name: "OP", tooltip: "op", key: "op", checked: false},
          { name: "ED", tooltip: "ed", key: "ed", checked: false}
        ]
    }
]

dataSet[dataSetVersion].characterData = [
  {
    name:"Yuru Camp",
    img:"https://lh3.googleusercontent.com/t0vqCsFDPI1I1U6k-sJp1SvsShmi0fOOuqOtfpWBvIkOmT7gXAcbXF7I_IhFNvhsMGhLuMaOjA",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Darling in the Frankxx",
    img:"https://lh5.googleusercontent.com/S9mmYJq4B9QeMUEupg3oO-fO7TC9EEZl1It8dhcvaazzYEJjH3COm_g8XRCjGCVhKUwM9Ph64A",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Sora Yori mo Tooi Basho",
    img:"https://lh5.googleusercontent.com/-RVC1djRgrulD36QL7a42gTCEjm3ol_LZKrxvf6SsnIP1A4ltnQZI7Gc9dYDPmQJXOpKiEzDjA",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Mitsuboshi Colors",
    img:"https://lh3.googleusercontent.com/1MVQDBy_BRxCoV5-Iq45N14AeHnW7dofRVK_aVb71Gjht19XEo3iy1CAXO6mLaeL5VTqBHYHCw",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Karakai Jouzu no Takagi-san",
    img:"https://lh3.googleusercontent.com/-QOMIcZj85jOvI-T_-Ui1V3s1TZzUCRufrXdWh6w8e9yJTLJnFtY0hITFp939nYrlLlFL9GFxA",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Hinamatsuri",
    img:"https://lh3.googleusercontent.com/TGPkCx7UDWp3p3dFs4tYWlO75Wws4HYqTlmCMcX1xiWXz6l_fHDJKEbZizk7yiTSYSd5KVKOog",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Lost Song",
    img:"https://lh4.googleusercontent.com/yeKq3D7Y3CK6bYllXS8P5z4z5hTJU9a-liy9V0H05SeRkzvYJoaksM0C9HtxO9mSn_uq2aealw",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Uma Musume: Pretty Derby",
    img:"https://lh4.googleusercontent.com/CYHbSZB6nFV__zY88uD7_oFlxK9Ag05BTYfjM_dpoVf2Nbzym01uM_souYDQ8vgawbl6S6N5fw",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Last Period",
    img:"https://lh5.googleusercontent.com/h2CyANrFWljGZnsqCrrGbF4DzikFQrY6mfzZrQNwkObeDigZyYrIE7qXJCaqoCRiWeTv5SJH5g",
    opts:{
        category: ["anime"]
    }
},
{
    name:"SAO GGO Alternative",
    img:"https://lh6.googleusercontent.com/3eHzbya0kQDmlTFlFP3dVZiyTMjdtVZmThzij9dFYGSVX7cEe4-TAhnJCgJDCJVfBph5x5RN7w",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Shoujo Kageki Revue Starlight",
    img:"https://lh6.googleusercontent.com/6Pyb_JXAmO55wA-OUphwIiFz8ZkIcnin3tetcur9Qo5St-dlQVe3M4GlnfbXK5zu2W2pwQhkfQ",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Asobi Asobase",
    img:"https://lh5.googleusercontent.com/ZweW26lmR1EJzCXUW8vtnkWLlsf_6X9WLYW6AL7T5URaRKlw38EqDhfAJLw9T3xk0JZmEhGrDg",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Grand Blue",
    img:"https://lh4.googleusercontent.com/sF_sXD3vW_Dqb7J5G2Ax5CESZAAYaUXkFmU38yvnYmjA-o__Z_30PTulO2nPVB3ep3E_x7gAbg",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Hataraku Saibou",
    img:"https://lh6.googleusercontent.com/PXLWyOMO4IiHsvbqG7dbtAghzIMbpknvTdbLempkvLPc8BonVEUdg7WyJpa5HB84pNhlzOboNA",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Planet With",
    img:"https://lh5.googleusercontent.com/fCU7MpGg9EM6hkcPpmyA2F9zWZE9AJIf9NIuoz3ke_zNAF_j-9O9i8aXbTNAGXtmhISGK41JIg",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Yama no Susume Third Season",
    img:"https://lh3.googleusercontent.com/eneVNSjBllM5mcuEch7WX24lomuZ2iW0HdwbbzWKjsXBl5urbIVeONTFm3bIIf23_4kD-gmzDQ",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
    img:"https://lh4.googleusercontent.com/xTOEoGtc-65dFiBDoxwg75dX4LNVn0kmfYlbn1qW-1182PWVmSttjxX9k5YEVjMxCn-iad10Lw",
    opts:{
        category: ["anime"]
    }
},
{
    name:"SSSS.Gridman",
    img:"https://lh6.googleusercontent.com/louluu5WG04Mo5LO4MHpPWcuj3PlVg7ydclD8gyarbDJ0xhfolZXrCze5enKErHqfpH1LyyW7w",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Tensei shitara Slime Datta Ken",
    img:"https://lh5.googleusercontent.com/-RfwZDS5cAUhfbK5kQX-73A958pslpDdrx0hI8WkfPzOXZYCdNNjBIwORHuBL_SDMifkl2DTAA",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Irozuku Sekai no Ashita kara",
    img:"https://lh4.googleusercontent.com/NPDE7mT6iv0NxHwdEBLAO1P7SEZmdYq4PMReno5ZyXeQYOvaI5iZMzKJ6gLsO2jG0SVMyeDR4A",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Zombieland Saga",
    img:"https://lh3.googleusercontent.com/07VgsPn8ZZsXc_uzd1zXKElgUxuy_YFPW11Zs5phvaAX_spOaJeSpHC2JR3WPI90ry1RHFbNZA",
    opts:{
        category: ["anime"]
    }
},
{
    name:"Golden Kamuy",
    img:"https://lh3.googleusercontent.com/FrcVK-N4fa7WCVZ4pi_tAW_tc0Sm8SSET63t2VVJBE80kuQnOQEchGKqp2911E1NF8YcNXiu7Q",
    opts:{
        category: ["anime"]
    }
}
  //
  // END
  //
]
