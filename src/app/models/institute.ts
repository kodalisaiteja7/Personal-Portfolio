export interface Course {
  id: number;
  date: string;
  title: string;
}

export interface Institute {
  id: number;
  institute: string;
  courses: Course[];
}