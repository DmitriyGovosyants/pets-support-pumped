import { toast } from 'react-toastify';
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

const NewsPage = () => {
  const [newsName, setNewsName] = useState('');
  const { data, isLoading, isError, error } = useGetAllNewsQuery(newsName);

  const handleSubmitForm = evt => {
    evt.preventDefault();
    setNewsName(evt.currentTarget.elements.news.value);
    evt.currentTarget.elements.news.value = '';
  };

  if (isError) {
    if (error.status === 400) {
      toast.error(error.data.message);
    }
    if (error.status === 404) {
      toast.error('Resourses not found');
    }
    if (error.status === 500) {
      toast.error('Server not response');
    }
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
