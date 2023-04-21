import styled from '@emotion/styled';

export const UserProfile = styled.div`
  background-color: #fff;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  width: 300px;
  margin-top: 50px;
`;

export const Stats = styled.ul`
  border: 0.1rem solid #0000001a;
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style: none;
  padding-left: 0;
  margin: 0px;
  background-color: #afcde7;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  :not(:last-child) {
    border-right: 0.1rem solid #00000048;
    padding-right: 15px;
  }
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const Discription = styled.div`
  padding-top: 20px;
  text-align: center;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0;
`;
