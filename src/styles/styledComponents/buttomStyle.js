import styled from "styled-components";
export const ButtomStyle = styled.section`
button {
    cursor: pointer;
    font-size: 1.1em;
    padding: 8px;
    color: #f6f6f6;
    border-radius: 8px;
    border: none;
    background-color: #0DBDBD;
    text-align: center;
}


.sucess{
    margin-top: 15vh;
    font-size: 1.8em;
    padding: 35px;
}


@media (max-width: 768px) {
    button {
        width: 100%;
        padding: 20px;
        
    }

    .returnButton {
        width: 70vw;
    }

    .returnButton button {
        padding: 25px;
    }

}

`;