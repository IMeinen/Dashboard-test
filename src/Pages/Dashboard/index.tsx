import * as Styles from './styles';
import SideBar from '../../Components/SideBar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Table from '../../Components/Table';
import DonutChart from '../../Components/DonutChart';
import LegendItem from '../../Components/LegendItem';

const Dashboard = () => {
  const data = [
    { label: 'Luxuo', value: 10, color: '#ffd100' },
    { label: 'Mens-Folio', value: 20, color: '#20bf55' },
    { label: 'Grazia', value: 15, color: '#564787' },
  ];

  return <Styles.MainContainer>
    <SideBar />
    <Styles.TableContainer>
      <h1 className='table-container-title'>Dashboard</h1>
      <Styles.TopButtonContainer>
        <button><span>View on going missions</span><ArrowForwardIcon /></button>
        <button><span>View on going missions</span><ArrowForwardIcon /></button>
        <button><span>View on going missions</span><ArrowForwardIcon /></button>
      </Styles.TopButtonContainer>
      <h2 className='table-container-subtitle'>Top Performing Articles</h2>
      <Table />
    </Styles.TableContainer>
    <Styles.ChartContainer>
      <Styles.EarningsContainer>
        <span className='earnings-container-title'>Earnings YTD</span>
        <span className='earnings-container-value'>$56,201</span>
        <span className='earnings-container-indicator'>2,29%</span>
      </Styles.EarningsContainer>
      <Styles.DonutContainer>
        <h1 className='donut-container-title'>Earnings by brand</h1>
        <p className='donut-container-subtitle'>YTD</p>
        <Styles.AnalyticsContainer>
          <DonutChart data={data} width={120} height={120} />
          <Styles.LegendContainer>
            {data.map((item) => (
              <LegendItem key={item.label} label={item.label} color={item.color || ''} />
            ))}
          </Styles.LegendContainer>
        </Styles.AnalyticsContainer>

      </Styles.DonutContainer>

    </Styles.ChartContainer>
  </Styles.MainContainer>;
}

export default Dashboard;