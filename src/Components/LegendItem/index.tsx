import * as Styles from './styles';

interface LegendItemProps {
  label: string;
  color: string;
}

const LegendItem: React.FC<LegendItemProps> = ({ label, color }) => {
  return (
    <Styles.MainContainer>
      <Styles.Circle color={color}/>
      <span>{label}</span>
    </Styles.MainContainer>
  );
};

export default LegendItem;