export interface DataListInterface {
  id: number,
  user: { avatar: string, name: string, phone: string}, 
  ticketNo: string, 
  ticketValue: number, 
  cinemas: string[],  
  countOfPeople: number,
  purchasesTimes: string,
  ticket: {no: string, types: string[]}
}