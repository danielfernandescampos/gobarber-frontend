import styled from "styled-components"
import signInBackgroundImg from "../../assets/barber.jpeg"
import { shade } from "polished"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;

    strong {
        color: black;
        font-size: 32px;
    }

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color .1s;

            &:hover {
                color: ${shade(.2, '#f4ede8')};
            }
        }
    }

    > a {
            color: #ff9000;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color .1s;
            display: flex;
            align-items: center;

            svg {
                margin-right: 16px;
            }

            &:hover {
                color: ${shade(.2, '#ff9000')};
            }
    }

`
export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`