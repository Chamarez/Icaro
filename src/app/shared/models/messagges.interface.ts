export interface ReceivedMesagges{
  sender: string,
  msjs: string,
  date: Date

}


export interface SendedMessagges{
  addressee: string,
  msjs: string,
  date: Date
}

export interface NewMessage{
  sender: string,
  addressee: string,
  msjs: string,


}


