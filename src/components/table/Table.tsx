import React from "react";
import styled from "styled-components";
import { Row } from "../row/Row";

type PropsType = {
     data: Data;
};

export type Data = {
     id: number;
     type: string;
     date: string;
     airPortName: string;
     schedule: Schedule[];
};

export type Schedule = {
     id: number;
     carrier: string;
     time: string;
     flightName: string;
     flightNumber: string;
     fact: string;
     reamark: string;
};

export const Table: React.FC<PropsType> = React.memo((props) => {
     return (
          <S.Container>
               <S.Date>{props.data.type}</S.Date>
               <S.Date>{props.data.date}</S.Date>
               <S.Table>
                    <S.HeaderItem>Время</S.HeaderItem>
                    <S.HeaderItem>Направление</S.HeaderItem>
                    <S.HeaderItem>Рейс</S.HeaderItem>
                    <S.HeaderItem>Факт</S.HeaderItem>
                    <S.HeaderItem>Примечание</S.HeaderItem>
                    {props.data.schedule.map((el) => {
                         return <Row key={el.id} {...el}></Row>;
                    })}
               </S.Table>
          </S.Container>
     );
});

const gap = 20;

export const S = {
     Container: styled.div`
          padding: 30px;
          width: 100vw;
          height: 100vh;
     `,

     Date: styled.div`
          font-size: 40px;
          font-weight: 700;
     `,
     Table: styled.div`
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 50px;
     `,
     Header: styled.div``,
     HeaderItem: styled.div`
          font-weight: 400;
          font-size: 25px;
          color: rgb(153, 153, 153);
     `,
     Row: styled.div`
          display: flex;
          justify-content: space-between;
          padding: 15px;
     `,
};
