import React from "react";
import styled from "styled-components";
import { Row } from "../row/Row";
import { Data } from "../../state/store";

type PropsType = {
     data: Data;
     switch: React.Dispatch<React.SetStateAction<number>>;
};

type MapType = {
     [key: string]: string;
};

const map: MapType = {
     departure: "Вылет",
     arrival: "Прилет",
};

export const Table: React.FC<PropsType> = React.memo((props) => {
     const clickHandle = () => {
          props.switch((prev) => (prev === 0 ? 1 : 0));
     };

     return (
          <S.Container>
               <div
                    onClick={clickHandle}
                    style={{ display: "flex", gap: "10px", userSelect: "none", marginBottom: "40px" }}
               >
                    <S.Date>{map[props.data.type]}</S.Date>
                    <S.Date>{props.data.date}</S.Date>
               </div>
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

export const S = {
     Container: styled.div`
          padding: 30px;
          width: 100vw;
          height: 100vh;
     `,

     Date: styled.div`
          font-size: 40px;
          font-weight: 700;
          cursor: pointer;
     `,
     Table: styled.div`
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 50px;
     `,
     Header: styled.div``,
     HeaderItem: styled.div`
          border-bottom: 1px solid rgb(153, 153, 153);
          padding-bottom: 15px;
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
