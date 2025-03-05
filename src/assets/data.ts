export const StepsData = [
  {
    id: 1,
    title: "Type de pose",
    mainTypes: [
      {
        mainType: "En applique",
        subTypes: ["extérieur", "intérieur"],
      },
      {
        mainType: "Tunnel",
        subTypes: ["extérieur", "intérieur"],
      },
    ],
  },
  {
    id: 2,
    title: "Type de lame",
    mainTypes: [
      { mainType: "Lames Pleines", subTypes: [] },
      { mainType: "Lames micro-perforées", subTypes: [] },
      {
        mainType: "Grille cobra",
        subTypes: ["simple", "renforcées"],
      },
      { mainType: "Grille bijoutier", subTypes: [] },
    ],
  },
  {
    id: 3,
    title: "Couleurs",
    AvailableColors: ["Acier galvanisé", "Blanc 9010", "Gris 7016"],
  },
  {
    "id": 4,
    "title": "Motorisation",
    "modes": [
      "Manuel",
      {
        "Motorisé": {
          "Type de Motorisation": ["Central", "Tubulaire", "Externe"]
        }
      }
    ]
  },
  { id: 5, title: "Serrure" },
  { id: 6, title: "Accessoires" },
];
