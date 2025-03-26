 import { PieChart } from 'react-minimal-pie-chart'

 interface ChartData {
    title: string;
    value: number;
    color: string;
    
  }
  
  interface EllipseProps {
    data: ChartData[];
  }
  
const Ellipse = ({data} : EllipseProps) => {
  return (
    <div className='w-96'>
        <PieChart 
            startAngle={-90} 
            radius={50} 
            lineWidth={50}  
            data={data}
        />
    </div>
  )
}

export default Ellipse