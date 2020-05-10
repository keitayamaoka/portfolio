<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Front-end',
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
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
        },
        legend: {
          display:false
        }
      }
    }
  },
  mounted () {
    this.getChartName()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getChartName(){
      const names = this.$store.getters.skillName(1)
      this.data.labels = names
      const scores = this.$store.getters.skillScore(1)
      this.data.datasets[0].data = scores
    }
  }
}
</script>

