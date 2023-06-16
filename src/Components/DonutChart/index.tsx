import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataItem {
  label: string;
  value: number;
  color?: string;
}

interface DonutChartProps {
  data: DataItem[];
  width: number;
  height: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, width, height }) => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (data.length === 0) return;

    const svg = d3.select(chartRef.current);

    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie<DataItem>().value((d) => d.value);

    const arc = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(radius * 0.6)
      .outerRadius(radius - 10);

    const arcs = svg
      .selectAll<SVGGElement, d3.PieArcDatum<DataItem>>('g.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => d.data.color || color(d.index.toString()));

  }, [data, width, height]);

  return (
    <svg ref={chartRef} width={width} height={height}>
      <g transform={`translate(${width / 2},${height / 2})`} />
    </svg>
  );
};

export default DonutChart;
