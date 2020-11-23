export function templateChart({ labels, customData }) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Your numbers',
          data: customData,
          fill: false,
          steppedLine: true,
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 3,
        },
      ],
    },
  }
}
