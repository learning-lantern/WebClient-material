export interface TodoTask {
  Id: number;
  name: string;
  isFavorite: boolean;
  isMyday: boolean;
  isCompleted: boolean;
  date: {
    dueDate: string;
    repeate: string;
  };
  key: string;
}
