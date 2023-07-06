import styled from 'styled-components';

export const TestContainer = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 50px;
    padding: 15px;

    border: 1px solid red;
    border-radius: 15px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding-top: 15vh;

    flex: 1;

`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 50%;
`;