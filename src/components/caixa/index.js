import React from "react";
import styled from "styled-components";
import { Button, DatePicker, version } from "antd";
import 'antd/dist/antd.css';
import {StyleSheet, css} from 'aphrodite';
import { Card } from "antd";

const Main = styled.div `
     width: 100%;
     height: 60vh;
     background: gray;
     display: flex;
     justify-content: center;
     align-items: center;

`;


export default function CaixaData(){
    return(
        <Main>
            <Card className={css(style.card)}>
                <div className="App">
                <h1>Versão antd: {version}</h1>
                <DatePicker/>
                <Button type="primary" style={{ marginLeft: 8}} loading> Loading </Button>
                </div>
            </Card>
        </Main>

        );
}

const style = StyleSheet.create({
    card: {
        width: '90%',
        height: '35vh',
        background: 'linear-gradient(120deg, rgb(127, 255, 212), rgb(155, 48, 255))',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 4px 8px 20px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none'
    },
});


