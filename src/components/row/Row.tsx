import React from "react";
import { Schedule } from "../table/Table";
import uvtIcon from "../../icons/uvt-aero.svg";
import styled from "styled-components";
export const Row: React.FC<Schedule> = (props) => {
     return (
          <>
               <S.RowItem>{props.time}</S.RowItem>
               <S.RowItem>{props.flightName}</S.RowItem>
               <S.RowItem>
                    <S.Flight>
                         <img src={uvtIcon} alt="" />
                         <S.FlightContainer>
                              <S.FlightNumber>{props.flightNumber}</S.FlightNumber>
                              <S.Company>{props.carrier}</S.Company>
                         </S.FlightContainer>
                    </S.Flight>
               </S.RowItem>
               <S.RowItem>{props.fact}</S.RowItem>
               <S.RowItem>{props.reamark}</S.RowItem>
          </>
     );
};

const S = {
     FlightContainer: styled.div``,
     Company: styled.div`
          color: rgb(153, 153, 153);
     `,
     FlightNumber: styled.div`
          color: rgb(0, 68, 187);
     `,
     Flight: styled.div`
          display: flex;
          gap: 10px;
     `,
     RowItem: styled.div`
          width: 300px;
          word-break: break-all;
          font-size: 30px;
          text-align: start;
     `,
};
