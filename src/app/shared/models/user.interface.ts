export interface User{
  username: string;
  password: string;
}

export interface UserResponse{
  mesagge: string;
  token: string;


}
export interface registerOk{
}

export interface UserRegister{
  username:string,
  password:string,
  role: string,
  country: string,
  city: string,

}
