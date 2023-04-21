import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 200px;
  padding: 5px;
  font-size: 18px;
  font-weight: 700;
  background: #afcde7;
  border-style: solid;
  border-width: 0 1px 1px 0;

  margin: 10px;
  border-radius: 10px;
`;

export const OnlineItem = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: block;
  margin-right: 12px;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
    }
  }};
`;
