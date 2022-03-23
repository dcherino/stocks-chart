import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Wrapper } from './PricesButtons.styles';

type PricesButtonsProps = {
  priceSelected: string;
  handleClick: (price: string) => void;
};

const PricesButtons = ({
  priceSelected,
  handleClick,
}: PricesButtonsProps): JSX.Element => (
  <Wrapper>
    <ButtonGroup
      size="large"
      variant="contained"
      aria-label="large button group"
    >
      <Button
        key="open"
        color={priceSelected === 'open' ? 'info' : 'primary'}
        onClick={() => handleClick('open')}
      >
        Open Prices
      </Button>
      <Button
        key="close"
        color={priceSelected === 'close' ? 'info' : 'primary'}
        onClick={() => handleClick('close')}
      >
        Close Prices
      </Button>
      <Button
        key="high"
        color={priceSelected === 'high' ? 'info' : 'primary'}
        onClick={() => handleClick('high')}
      >
        High Prices
      </Button>
      <Button
        key="low"
        color={priceSelected === 'low' ? 'info' : 'primary'}
        onClick={() => handleClick('low')}
      >
        Low Prices
      </Button>
    </ButtonGroup>
  </Wrapper>
);

export default PricesButtons;
