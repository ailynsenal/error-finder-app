import { FC } from 'react'
import { ConfirmationWrapper } from './styles';

type TConfirmation = {
  nextRound: () => void;
  cancelNextRound: () => void;
};

const Confirmation: FC<TConfirmation> = ({ ...props }) => {
  const { nextRound, cancelNextRound } = props;
  return (
    <ConfirmationWrapper>
      <div className='content'>
        <span>Do you want to take the next round?</span>
      </div>
      <div className='button-wrapper'>
        <button className="button" onClick={nextRound}>YES</button>
        <button className="button" onClick={cancelNextRound}>NO</button>
      </div>
    </ConfirmationWrapper>
  )
}

export default Confirmation;