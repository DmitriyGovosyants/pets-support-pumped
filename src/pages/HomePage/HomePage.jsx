import { contImgs } from 'data/img/homePage';
import { size } from 'styles/mediaquery';

import {
  BackgroundWrapper,
  HomePageContainer,
  Title,
  PictureStyled,
} from './HomePage.styled';
import { AnimationCat } from 'components';

const HomePage = () => {
  return (
    <BackgroundWrapper>
      <HomePageContainer>
        <Title>Take good care of your small pets</Title>
        <PictureStyled>
          <source
            srcSet={`${contImgs.womanDesktop1x} 1x, ${contImgs.womanDesktop2x} 2x`}
            media={`(min-width: ${size.desktop})`}
            type="image/jpeg"
          />
          <source
            srcSet={`${contImgs.womanTablet1x} 1x, ${contImgs.womanTablet2x} 2x`}
            media={`(min-width: ${size.tablet})`}
            type="image/jpeg"
          />
          <source
            srcSet={`${contImgs.womanMobile1x} 1x, ${contImgs.womanMobile2x} 2x`}
            media={`(min-width: ${size.mobile})`}
            type="image/jpeg"
          />
          <img
            src={contImgs.womanMobile1x}
            alt="American-woman-enjoys-company-of-small-pedigree-dog"
          />
        </PictureStyled>
      </HomePageContainer>
      <AnimationCat />
    </BackgroundWrapper>
  );
};

export default HomePage;
