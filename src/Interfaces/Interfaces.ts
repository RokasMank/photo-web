

export interface IAction{
    type:ActionType,
    payload:any
}
export interface IState{
    itemsAuto:string[],
    itemsPeople:string[],
    itemsHolidays:string[],
   
}

export interface IImage {
   
    source : string,
    name: string,
    index: number
   
}
export interface ISlidesProps{  //
    state: IState
    type : PhotosType
}
export enum PhotosType {   // firebase katalogų vardai
    auto = "auto",
    portrait = "portraits",
    holidays = "fests"
    
  }
  export enum ActionType {
      addAuto = 'AUTO_DATA',
      addPortrait = 'PORTRAIT_DATA',
      addHoliday = 'HOLIDAY_DATA',
  }
