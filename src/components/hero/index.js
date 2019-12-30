import React from "react";
import styled from "styled-components";
import 'antd/dist/antd.css';
import {StyleSheet, css} from 'aphrodite';
import { Card, Icon } from "antd";



const Main = styled.div`
    width: 100%;
    height: 60vh;
    background: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
   h1{
        font-size: 30px;
        font-weight: 900;
        color: #fff;
      }
    // p{
    //     font-size: 20px;
    //     font-weight: 900;
    //     color: #fff;
    // }
`;

export default function index () {
    return (
        <Main>
            <Card className={css(style.card)}>
                <Title>
                    <h1>Olá Mundo!!</h1>
                    <p></p>
                    <Icon  className={css(style.icon)} type="highlight"/>
                </Title>
            </Card>
        </Main>

    );

}

const style = StyleSheet.create({
    card: {
        width: '90%',
        height: '30vh',
        background: 'linear-gradient(120deg, rgb(127, 255, 212), rgb(155, 48, 255))',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 4px 8px 20px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
    },

    icon:{
        fontSize: '50px',
        color: '#fff',


    },
});