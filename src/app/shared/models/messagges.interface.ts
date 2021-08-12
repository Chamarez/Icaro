export interface ReceivedMesagges{
  sender: string,
  msjs: string,
  date: Date,
  msjId:number
}


export interface SendedMessagges{
  addressee: string,
  msjs: string,
  date: Date,
  msjId:number
}

export interface NewMessage{
  sender: string,
  addressee: string,
  msjs: string,


}


