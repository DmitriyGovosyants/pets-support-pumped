import { Dna } from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Dna
        visible={true}
        height={'140'}
        width={'140'}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </SpinnerWrapper>
  );
};
