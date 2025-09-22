"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const chartData = {
    series: [
      {
        name: 'Revenue',
        data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 200,
        toolbar: { show: false },
        zoom: { enabled: false },
        offsetY: -10
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 4,
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          show: true,
          style: {
            colors: '#666',
            fontSize: '12px'
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        show: false
      },
      fill: {
        opacity: 1,
        colors: ['#FEF1D2']
      },
      grid: {
        show: false
      },
      tooltip: {
        enabled: false
      },
      legend: {
        show: false
      },
      // 👇 Hover effects
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'darken',
            value: 0.7
          },
          // Change bar color on hover
          color: '#FF0000',
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'darken',
            value: 0.7
          }
        }
      },
      // 👇 Add animation for smooth hover scaling
      theme: {
        monochrome: {
          enabled: false
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-4 w-full">
      <h3 className="text-sm text-black mb-2">Revenue Trends</h3>
      <div className="mb-2">
        <div className="text-2xl font-bold text-black">+8%</div>
        <div className="text-sm text-gray-400">This Month<span className='text-green-400'> +8%</span></div>
      </div>
      {isClient && (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={200}
        />
      )}
    </div>
  );
};

export default BarChart;
