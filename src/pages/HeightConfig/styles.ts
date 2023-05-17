import styled from 'styled-components';
import defaultColors from '../../settings/defaultSettings';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding-top: 15vh;

    flex: 1;

`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 13vw;
    min-width: 150px;

    padding-top: 15vh;

    padding-bottom: 20vh;
`;


export const Label = styled.label`
  font-size: 20px;
  font-weight: 700;

  color: ${defaultColors.primary};
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    gap: 1vh;
`;


export const ArrowButton = styled.div`
    border: none;

    cursor: pointer;

    img {
        width: 4vw;
        min-width: 50px;

        transition: 0.3s;

        &:hover {
            filter: brightness(80%);
        }
    }


`;
