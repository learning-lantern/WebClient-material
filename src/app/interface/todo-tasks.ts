export interface TodoTask {
    id:number;
    name: string;
    isFavorite:boolean;
    isMyday:boolean;
    isCompleted:boolean;
    date: {
      dueDate: string;
      repeate: string;
    };
  
  }