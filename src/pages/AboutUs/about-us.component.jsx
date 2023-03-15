import { useSelector } from 'react-redux';
import {
  AboutUsContainer,
  AboutHeading,
  AboutParagraph,
} from './about-us.styles';

const AboutUs = () => {
  const themeColor = useSelector((state) => state.theme);
  return (
    <AboutUsContainer>
      <AboutHeading colors={themeColor}>
        Fake Plants: Canadian Owned and Operated <span>Fauxliage</span>
      </AboutHeading>
      <AboutParagraph colors={themeColor}>
        Fauxliage is a Canadian Owned and operated company. We specialize in
        fake plants for your house. We are environmentally friendly and very low
        maintenece. We will ship worldwide and have easy and convienient payment
        options. Your security and safety are of utmost importance to us.
      </AboutParagraph>
      <br />
      <AboutParagraph colors={themeColor}>
        All of our plastics and materials are environmentally freindly. We
        source all of our materials from Canadian owned businesses. We also are
        commited to using recycled materials wherever possible.
      </AboutParagraph>
    </AboutUsContainer>
  );
};

export default AboutUs;
