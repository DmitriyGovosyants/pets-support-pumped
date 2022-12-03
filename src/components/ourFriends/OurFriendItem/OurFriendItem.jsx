import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import partnerImg from 'data/img/partner.png';
import { daysOfWeek } from 'constants/constants';
import { ModalOurFriend } from 'components';
import {
  Card,
  FriendTitle,
  InfoWrapper,
  ImgWrapper,
  InfoList,
  InfoItem,
  AddressLink,
  TimeBtn,
  TimeDetails,
  TimeDetailsItem,
} from './OurFriendItem.styled';

const empty = '-'.repeat(30);

export const OurFriendItem = ({
  title,
  url,
  imageUrl,
  workDays,
  address,
  addressUrl,
  email,
  phone,
}) => {
  const [workDay, setWorkDay] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!workDays) {
      return;
    }

    const oneDay = workDays.find(el => el.isOpen === true);
    setWorkDay(oneDay);
  }, [workDays]);

  const closeDetails = () => {
    if (showDetails) {
      setShowDetails(false);
    }
  };

  return (
    <Card onClick={() => closeDetails()}>
      <FriendTitle>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </FriendTitle>
      <InfoWrapper>
        <ImgWrapper>
          <img src={imageUrl ? imageUrl : partnerImg} alt={title} />
        </ImgWrapper>
        <InfoList>
          <InfoItem>
            <TimeBtn
              type="button"
              disabled={workDays ? false : true}
              onClick={() => setShowDetails(s => !s)}
            >
              <p>Time:</p>
              {!workDay && <p>{empty}</p>}
              {workDay && (
                <p>
                  {workDay.from}-{workDay.to}
                </p>
              )}
            </TimeBtn>
            {showDetails && (
              <ModalOurFriend toggleModal={() => setShowDetails(s => !s)}>
                <TimeDetails>
                  {workDays.map((el, idx) => {
                    return (
                      <TimeDetailsItem key={daysOfWeek[idx]}>
                        <span>{daysOfWeek[idx]}</span>
                        <span>
                          {el.from} - {el.to}
                        </span>
                      </TimeDetailsItem>
                    );
                  })}
                </TimeDetails>
              </ModalOurFriend>
            )}
          </InfoItem>
          <InfoItem>
            <p>Address:</p>
            {address && (
              <AddressLink
                underline
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {address}
              </AddressLink>
            )}
            {!address && <p>{empty}</p>}
          </InfoItem>
          <InfoItem>
            <p>Email:</p>
            {email && (
              <AddressLink underline href={`mailto:${email}`}>
                {email}
              </AddressLink>
            )}
            {!email && <p>{empty}</p>}
          </InfoItem>
          <InfoItem>
            <p>Phone:</p>
            {phone && <AddressLink href={`tel:${phone}`}>{phone}</AddressLink>}
            {!phone && <p>{empty}</p>}
          </InfoItem>
        </InfoList>
      </InfoWrapper>
    </Card>
  );
};

OurFriendItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  workDays: PropTypes.any,
  address: PropTypes.string,
  addressUrl: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};
