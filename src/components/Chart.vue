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
            data: [3, 3, 2, 1, 3,],
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
        }
      }
    }
  },
  mounted () {
    this.getskills()
    this.renderChart(this.data, this.options)
  },
  methods:{
    getskills(){
      const skills = this.$store.state.skills
      this.data.labels = skills
    }
  }
}
</script>

