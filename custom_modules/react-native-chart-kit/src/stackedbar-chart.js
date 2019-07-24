import React from 'react'
import { View } from 'react-native'
import { Svg, Rect, G, Text } from 'react-native-svg'
import AbstractChart from './abstract-chart'



const barWidth = 32

class StackedBarChart extends AbstractChart {
  renderBars = config => {
    const {
      data,
      width,
      height,
      borderRadius,
      paddingTop,
      paddingRight,
      border,
      colors,
      
    } = config
    return data.map((x, i) => {
      const barWidth = 10
      const stackSpace = 3
      const ret = []
      let h = 0
      let st = paddingTop
      for (let z = 0; z < x.length; z++) {
        console.log("Color" + z)
        h = (height - 55) * (x[z].v / border)
        const y = (height / 4) * 3 - h + st
        const xC =
          (paddingRight +
            (i * (width - paddingRight)) / data.length +
            barWidth / 2) * 0.7

        let halfWidth = barWidth / 2;
        console.log("Heigth" + h + "Width" + halfWidth)

        let r = (barWidth < h) ? 5 : 1
        console.log("r " + r)
        ret.push(
          <Rect
            key={Math.random()}
            x={xC}
            y={y + 2}
            width={barWidth}
            rx={r}
            ry={r}
            height={h - 2}
            fill={x[z].c}
          />
        )



        st -= h
      }

      return ret
    })
  }

  renderLegend = config => {
    const { legend, colors, width, height } = config
    return legend.map((x, i) => {
      return (
        <G key={Math.random()}>
          <Rect
            width="16px"
            height="16px"
            fill={colors[i]}
            rx={8}
            ry={8}
            x={width * 0.71}
            y={height * 0.7 - i * 50}
          />
          <Text
            fill="#9A9A9A"
            fontSize={16}
            x={width * 0.78}
            y={height * 0.76 - i * 50}
          >
            {x}
          </Text>
        </G>
      )
    })
  }

  render() {
    const paddingTop = 15
    const paddingRight = 50
    const { width, height, style = {}, data, noOfDaysInMonth } = this.props
    const { borderRadius = 0 } = style
    const config = {
      width,
      height
    }
    let border = 0
    for (let i = 0; i < data.data.length; i++) {
      const actual = data.data[i].reduce((pv, cv) => {
        console.log(cv.v)
        return pv + cv.v
      }, 0)
      if (actual > border) {
        console.log("Actual " + actual)
        console.log("Border " + border)
        border = actual
      }
      console.log(JSON.stringify(actual))
    }

    return (
      <View style={style}>
        {this.renderLegend({
            ...config,
            legend: data.legend,
            colors: this.props.data.barColors
          })}
        <Svg height={height} width={width}>
          {this.renderDefs({
            ...config,
            ...this.props.chartConfig
          })}
          <Rect
            width="100%"
            height={height}
            rx={borderRadius}
            ry={borderRadius}
            fill="url(#backgroundGradient)"
          />
          <G>
            {this.renderHorizontalLines({
              ...config,
              count: 5,
              paddingTop
            })}
          </G>
          <G>
            {this.renderVerticalLines({
              ...config,
              data: data.data,
              paddingTop,
              count: noOfDaysInMonth,
              paddingRight
            })}
          </G>
        
          

          <G>
            {this.renderHorizontalLabels({
              ...config,
              count: 10,
              data: [0, border],
              paddingTop,
              paddingRight
            })}
          </G>
          <G>
            {this.renderVerticalLabels({
              ...config,
              labels: data.labels,
              paddingRight: paddingRight + 28,
              stackedBar: true,
              paddingTop,
              horizontalOffset: barWidth
            })}
          </G>
          <G>
            {this.renderBars({
              ...config,
              data: data.data,
              border,
              colors: this.props.data.barColors,
              paddingTop,
              paddingRight: paddingRight + 20

            })}
          </G>
          
        </Svg>
      </View>
    )
  }
}
export default StackedBarChart
