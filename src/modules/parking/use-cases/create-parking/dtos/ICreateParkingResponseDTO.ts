export interface ICreateParkingResponseDTO {
  id: number;
  plate: string;
  paid: boolean;
  left: boolean;
  start_time: Date;
  end_time: Date;
}
