import styled from '@emotion/styled';

export const Transaction = styled.table`
  font-size: 14px;
  border-collapse: collapse;
  text-align: center;
`;

export const Td = styled.td`
  background: #d8e6f3;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: #fff;
  text-align: center;
  :first-of-type {
    background: #afcde7;
    color: white;
    padding: 10px 20px;
    text-align: left;
  }
`;

export const Th = styled.th`
  padding: 10px 20px;
  background: #afcde7;
  border-style: solid;
  color: white;
  border-width: 0 1px 1px 0;
  border-color: #fff;
  :first-of-type {
    background: #afcde7;
    color: white;
    padding: 10px 20px;
    text-align: center;
  }
`;

export const Tr = styled.tr`
  font-size: 14px;
  text-align: center;
`;

// .transaction_history{
// font-size: 14px;
// border-collapse: collapse;

// text-align: center;
// }

// th,
// td:first-child {
//     background: #AFCDE7;
//     color: white;
//     padding: 10px 20px;
// }
// th,
// td {
//     border-style: solid;
//     border-width: 0 1px 1px 0;
//     border-color: white;
// }

// td {
//     background: #D8E6F3;
// }

// th:first-child,
// td:first-child {
//     text-align: left;
// }
