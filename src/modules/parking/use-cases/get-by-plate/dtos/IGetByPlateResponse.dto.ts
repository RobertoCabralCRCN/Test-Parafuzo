export interface IGetByPlateResponseDTO {
  id: number;
  plate: string;
  paid: boolean;
  left: boolean;
  start_time: Date;
  end_time: Date;
  time: string;
}
