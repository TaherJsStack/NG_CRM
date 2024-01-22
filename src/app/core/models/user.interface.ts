export interface IUserModel {
  Id:           string,
  Name:         string,
  Email:        string,
  Phone:        string,
  Address:      string,
  RegisterDate: string,

  name:          string,
  email:         string,
  password:      string,
  role:          number,
  permeation:    number[];
  phone:         number,
  imageUrl:      string,
  description:   string;
  activeState:   boolean;
  governorate:   string,
  city:          string,
  area:          string,
  floorNo:       string,
  streetNo:      string,
  buildingNo:    string,
  apartmentNo:   string,
  createdAt:     string,
  updatedAt:     string,
  showInWebsite: boolean,

  albumId: number,
  thumbnailUrl: string,
  title: string,
  url:  string,
}
  