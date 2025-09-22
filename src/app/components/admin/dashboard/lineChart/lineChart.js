"use client"
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const LineChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const chartData = {
    series: [
      {
        name: 'Booking Trends',
        data: [20, 40, 22, 55, 24, 50, 27] // Approximated wavy data to match the curve in the image
      }
    ],
    options: {
      chart: {
        type: 'area',
        height: 200,
        toolbar: { show: false },
        zoom: { enabled: false },
        offsetY: -10
      },
      stroke: {
        curve: 'smooth', 
        width: 2,
        dashArray: 0
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#FFFFFF'], 
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0,
          stops: [0, 100]
        }
      },
      grid: {
        show: false 
      },
      colors: ['#CDAA74'], 
      tooltip: {
        enabled: false 
      },
      legend: {
        show: false
      }
    }
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-4 w-full">
      <h3 className="text-sm text-black mb-2">Booking Trends</h3>
      <div className="mb-2">
        <div className="text-2xl font-bold text-black">+15%</div>
        <div className="text-sm text-gray-400">Last 30 Days<span className='text-green-400'> +15%</span></div>
      </div>
      {isClient && (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={200}
        />
      )}
    </div>
  );
};

export default LineChart;