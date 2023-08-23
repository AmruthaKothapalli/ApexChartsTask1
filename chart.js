let getData = async () => {
  try {
    let response = await fetch("./Data.JSON", { method: "GET" });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    localStorage.setItem("Data", JSON.stringify(data)); // Store as a string
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getData();

var jsonDataStr = localStorage.getItem("Data");
var jsonData = JSON.parse(jsonDataStr);

var options = {
  series: [
    {
      name: jsonData?.xaxis?.name,
      type: "column",
      data: jsonData?.xaxis?.data,
    },
    {
      name: jsonData?.yaxis?.name,
      type: "line",
      data: jsonData?.yaxis?.data,
    },
  ],
  chart: {
    height: 350,
    type: "line",
  },
  stroke: {
    width: [0, 4],
    show: true,
    curve: "smooth",
  },

  annotations: {
    yaxis: [
      {
        y: 400,
        borderColor: "#00E396",
        label: {
          borderColor: "#00E396",
          style: {
            color: "#fff",
            background: "#00E396",
          },
          text: "12:30------------------------------",
          width: "50px",
        },
      },
    ],
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: "bottom", // top, center, bottom
        style: {
          colors: ["red"],
        },
      },
    },
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: undefined,
    style: {
      colors: ["#000080"],
    },
  },
  labels: [
    "12AM-06AM",
    "06AM-08AM",
    "08AM-10AM",
    "10AM-12PM",
    "12PM-02PM",
    "02PM-04PM",
    "04PM-06PM",
    "06PM-08PM",
    "08PM-10PM",
    "10PM-12PM",
  ],
  xaxis: {
    type: "interval",
  },
  yaxis: [
    {
      type: "datetime",
    },
    {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
  ],
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only y axis
      },
    },
  },

  colors: ["lightpink", "#000080"],

  fill: {
    colors: ["lightpink"],
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
