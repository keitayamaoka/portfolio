<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart2',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySql', 'Python'],
        datasets: [
          {
            label: 'Back-end',
            data: [1, 2, 2, 2, 1,],
            backgroundColor: [
              'rgba(15, 136, 57, 0.25)',
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
