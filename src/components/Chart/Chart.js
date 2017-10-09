import React from 'react'
import {Chart, ChartCanvas} from 'react-stockcharts'
import {last} from 'react-stockcharts/lib/utils'
import {CandlestickSeries} from 'react-stockcharts/lib/series'
import {XAxis, YAxis} from 'react-stockcharts/lib/axes'
import {scaleTime} from 'd3-scale'
import {fitWidth} from 'react-stockcharts/lib/helper'

const ChartComponent = ({data, ratio, width}) => {
  const xAccessor = d => d.date
  const xExtents = [xAccessor(last(data)), xAccessor(data[data.length - 1000])]
  return (
    <ChartCanvas
      type="hybrid"
      height={600}
      width={width}
      ratio={ratio}
      margin={{left: 50, right: 50, top: 10, bottom: 30}}
      seriesName="BTC/USD"
      data={data}
      xAccessor={xAccessor}
      xScale={scaleTime()}
      xExtents={xExtents}
    >
      <Chart id={1} yExtents={d => [d.high, d.low]}>
        <XAxis axisAt="bottom" orient="bottom" ticks={6} />
        <YAxis axisAt="left" orient="left" ticks={5} />
        <CandlestickSeries width={400} />
      </Chart>
    </ChartCanvas>
  )
}

export default fitWidth(ChartComponent)
