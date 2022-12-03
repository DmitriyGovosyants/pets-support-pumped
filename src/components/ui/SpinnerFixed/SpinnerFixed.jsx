import { createPortal } from 'react-dom';
import { Dna } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { SpinnerWrapper } from './SpinnerFixed.styled';

const spinnerRoot = document.querySelector('#spinner-root');

export const SpinnerFixed = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return createPortal(
    <SpinnerWrapper>
      <Dna
        visible={true}
        height={isMobile ? '70' : '100'}
        width={isMobile ? '70' : '100'}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </SpinnerWrapper>,
    spinnerRoot
  );
};
