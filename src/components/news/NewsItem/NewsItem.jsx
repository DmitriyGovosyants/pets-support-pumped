import PropTypes from 'prop-types';
import {
  Title,
  NewsText,
  Date,
  ReadMore,
  Wrapper,
  Line,
  ItemWrapper,
} from './NewsItem.styled';

export const NewsItem = ({ title, description, url, date }) => {
  function format(date) {
    return date.split('-').reverse().join('/');
  }
  return (
    <ItemWrapper>
      <Line></Line>
      <Title>{title}</Title>
      <NewsText>{description}</NewsText>
      <Wrapper>
        {date ? <Date>{format(date)}</Date> : <Date>----------</Date>}

        <ReadMore href={url} target="_blank">
          Read more
        </ReadMore>
      </Wrapper>
    </ItemWrapper>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string,
};
