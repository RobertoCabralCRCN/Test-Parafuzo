export interface ICreateParkingResponseDTO {
  id: number;
  plate: string;
  paid: boolean;
  left: boolean;
  time: Date;
}
