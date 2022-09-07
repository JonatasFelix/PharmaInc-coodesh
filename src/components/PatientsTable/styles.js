import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  margin-top: 25px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  background-color: #fff;
`;

export const TableHeader = styled.tr`
  height: 48px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #e0e0e0;
  }

  th:nth-child( 1 ) {
    padding-left: 16px;
  }

`

export const TableTitle = styled.th`
  text-align: start;
  padding-right: 16px;
  cursor: pointer;
  position: relative;
`

export const OrderIcon = styled.span`
  position: absolute;
  ${props => props.order === 'desc' ? 'padding-right: 5px;' : 'padding-left: 5px;'}
  top: 50%;  
  transform: ${props => props.order === 'asc' ? 'translate(0, -50%)' : 'translate(0, 50%)'};
  rotate: ${props => props.order === 'asc' ? '0deg' : '180deg'};
`


export const TableTitleActions = styled.th`
  text-align: center;
`


export const TableBody = styled.tr`
  height: 44px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #e0e0e0;
  }

  td:nth-child( 1 ) {
    padding-left: 16px;
  }

  &:hover {
    background-color: #f5f5f5;
  }

`

export const TableDataActions = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
`