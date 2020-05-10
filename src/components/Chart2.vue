<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart2',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            data: [],
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
      const names = this.$store.getters.skillBackName
      this.data.labels = names
      const scores = this.$store.getters.skillBackScore
      this.data.datasets[0].data = scores
    }
  }
}
</script>
