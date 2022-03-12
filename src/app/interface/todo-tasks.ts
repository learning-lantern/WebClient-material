export interface TodoTask {
    name: string;
    isFavorite:boolean;
    date: {
      dueDate: string;
      repeate: string;
    };
  
  }