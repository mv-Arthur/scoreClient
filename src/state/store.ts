import { RemarkParamType, ScoreService } from "@/api/ScoreService";
import { makeAutoObservable } from "mobx";
import { AlertProps } from "@mui/material/Alert";
import { isAxiosError } from "axios";
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

class Store {
     data = [] as Data[];
     snackbar: Pick<AlertProps, "children" | "severity"> | null = null;
     constructor() {
          makeAutoObservable(this, {}, { deep: true });
     }

     setSnackBar(data: Pick<AlertProps, "children" | "severity"> | null) {
          this.snackbar = data;
     }

     setData(data: Data[]) {
          this.data = data;
     }

     editSchedule(id: number, dto: RemarkParamType) {
          this.data = this.data.map((el) => ({
               ...el,
               schedule: el.schedule.map((el) => (el.id === id ? { ...el, reamark: dto.remark, fact: dto.fact } : el)),
          }));
     }

     async fetchData() {
          try {
               const response = await ScoreService.getTodayScore();
               this.setData(response.data);
          } catch (err) {
               if (isAxiosError(err)) {
                    this.setSnackBar({ children: err.response?.data.message, severity: "error" });
               }
          }
     }

     async fetchToEdit(id: number, dto: RemarkParamType) {
          try {
               const response = await ScoreService.remarkShcedule(id, dto);
               this.editSchedule(response.data.id, {
                    remark: response.data.reamark,
                    fact: response.data.fact,
               });
               this.setSnackBar({ children: "Успех", severity: "success" });
          } catch (err) {
               if (isAxiosError(err)) {
                    this.setSnackBar({ children: err.response?.data.message, severity: "error" });
               }
          }
     }
}

export const store = new Store();
