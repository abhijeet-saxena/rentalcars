import { Flex, colors } from '../../common/styles';
import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled(Flex)`
    flex-direction: column;
    padding: 0.5rem 1rem 1.5rem;

    color: ${colors.textLight};
    max-width: 1142px;
    > h1 {
        margin: 2rem auto;
        text-align: center;
    }
    @media (max-width: 768px) {
    }
`;

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & [alt='gb'] {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
    }
    > .menu > button {
        padding: 0px 16px;
        color: ${colors.primaryBlue};
        background: ${colors.textLight};
    }
    @media (min-width: 768px) {
        .hamburger {
            display: none;
        }
    }
    @media (max-width: 768px) {
        .menu {
            display: none;
        }
    }
`;

export const SearchContainer = styled(Flex)`
    flex-direction: column;
    background: ${colors.secondaryYellow};
    border-radius: 8px;
    padding: 1rem;
    & button {
        padding: 1rem 3rem;
        color: ${colors.textLight};
        background: ${colors.secondaryGreen};
    }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Autocomplete = styled(Flex)`
    position: relative;
    > input {
        padding-left: 2rem;
    }
    &:after {
        content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path d="m20.75 3.709-7.377 17.79-1.638-8.187a.75.75 0 0 0-.588-.588L2.96 11.086l17.79-7.377zm-.574-1.386L2.385 9.7a1.5 1.5 0 0 0 .28 2.856l8.188 1.638-.588-.588 1.638 8.188a1.5 1.5 0 0 0 2.856.28l7.377-17.79a1.5 1.5 0 0 0-1.96-1.96z"/></svg>');
        position: absolute;
        left: 0.5rem;
        top: 35%;
    }
    > svg {
        position: absolute;
        right: 0.5rem;
        top: 30%;
        animation: ${rotate} 1.5s linear infinite;
    }
`;

export const Suggestions = styled(Flex)`
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 100%;
    z-index: 1;
    border: solid 1px ${colors.textDark};
    border-radius: 4px;
    background: ${colors.textLight};
    cursor: pointer;
    > div {
        min-height: 54px;
        padding: 0.5rem;
        border-bottom: solid 1px ${colors.border};
        &:hover {
            background: ${colors.primaryBlueLight};
        }
    }
`;

export const FilterContainer = styled(Flex)`
    gap: 1rem;
    flex-direction: column;
    margin: 1rem 0 0;
    & [type='checkbox'] {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
    }
    @media (min-width: 768px) {
        gap: 2rem;
        flex-direction: row;
    }
`;

export const InputContainer = styled(Flex)`
    flex-direction: column;
    gap: 0.75rem;
    margin: 1rem 0 0;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const DateTimeContainer = styled(Flex)`
    gap: 0.75rem;
`;

export const Time = styled.div`
    position: relative;
    & select {
        padding-left: 2rem;
    }
    &:after {
        content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path d="M21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75zm1.5 0C23.25 5.787 18.213.75 12 .75S.75 5.787.75 12 5.787 23.25 12 23.25 23.25 18.213 23.25 12zm-10.5 0V8.25a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0zm-1.28.53 4.687 4.688a.75.75 0 0 0 1.06-1.06L12.53 11.47a.75.75 0 0 0-1.06 1.06z"/></svg>');
        position: absolute;
        left: 0.5rem;
        top: 35%;
    }
`;

export const DateTime = styled(Flex)`
    gap: 0.75rem;
    flex-direction: column;
    overflow: hidden;
    > input {
        width: auto;
    }
    & select {
        width: 100%;
    }
    @media (min-width: 768px) {
        flex-direction: row;
        gap: 0;
        border-radius: 4px;
        overflow: hidden;
        & input,
        select {
            border-radius: 0px;
            width: auto;
        }
        & select {
            border-left: solid 1px ${colors.border};
        }
    }
`;
