let xValues = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
let yValues = [25, 15, 35, 20, 45];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: "transparent",
        borderColor: "#758ecd",
        data: yValues,
      },
    ],
  },
  options: {},
});
