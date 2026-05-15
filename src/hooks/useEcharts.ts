import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import * as echarts from 'echarts'

export function useEcharts() {
  const chartRef = ref<HTMLElement | null>(null)
  const chartInstance = shallowRef<echarts.ECharts | null>(null)

  const initChart = () => {
    if (chartRef.value) {
      chartInstance.value = echarts.init(chartRef.value)
    }
  }

  const setOptions = (options: echarts.EChartsCoreOption) => {
    if (!chartInstance.value) {
      initChart()
    }
    chartInstance.value?.setOption(options)
  }

  const resize = () => {
    chartInstance.value?.resize()
  }

  onMounted(() => {
    window.addEventListener('resize', resize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    chartInstance.value?.dispose()
  })

  return {
    chartRef,
    chartInstance,
    initChart,
    setOptions,
    resize,
  }
}
