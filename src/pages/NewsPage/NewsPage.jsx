import React, { useState } from 'react';
import { useGetAllNewsQuery } from 'redux/newsApi';
import {
  Section,
  Container,
  MainTitle,
  Spinner,
  NewsItem,
  GridTemplate,
} from 'components';
import { Input, SearchForm, Label, Icon } from './NewsPage.styled';
import { requestErrorPopUp } from 'helpers';

const NewsPage = () => {
  const [newsName, setNewsName] = useState('');
  const { data, isLoading, isError, error } = useGetAllNewsQuery(newsName);

  const handleSubmitForm = evt => {
    evt.preventDefault();
    setNewsName(evt.currentTarget.elements.news.value);
    evt.currentTarget.elements.news.value = '';
  };

  if (isError) {
    requestErrorPopUp(error);
  }

  return (
    <Section>
      <Container>
        <MainTitle>News</MainTitle>
        <SearchForm onSubmit={handleSubmitForm}>
          <Label>
            <Input type="text" name="news" placeholder="Search" />
            <Icon />
          </Label>
        </SearchForm>
        {isLoading && <Spinner />}
        {data?.data.length > 0 && (
          <GridTemplate
            mobGap="40px 40px"
            tabGap="60px 32px"
            desGap="60px 32px"
          >
            {data.data.map(({ _id, title, description, url, date }) => {
              return (
                <NewsItem
                  key={_id}
                  title={title}
                  url={url}
                  description={description}
                  date={date}
                />
              );
            })}
          </GridTemplate>
        )}
      </Container>
    </Section>
  );
};

export default NewsPage;
