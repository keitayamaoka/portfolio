<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart3',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'GitHub', 'Firebase'],
        datasets: [
          {
            label: 'DevOps',
            data: [3, 1, 2, 3, 1,],
            backgroundColor: [
              'rgba(87, 16, 131, 0.25)',
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scale: {
          ticks: {
            beginAtZero:true,
            max: 10,
            min: 0
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}

</script>
