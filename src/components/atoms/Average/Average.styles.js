import styled from 'styled-components';

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  line-height: 13.52px;
  text-align: right;
  letter-spacing: -0.02em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
