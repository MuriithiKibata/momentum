
 export type UserData = {
    email: string;
    password: string;
  }


  export type UserRegData = {
    email: string;
    full_name: string;
    password: string;
    passwordConfirmation: string
  }


  export type User = {
    FirstName: string | null;
    LastName: string | null;
    token: string | null;
  };


  export type Todo = {
    id: number;
    Name: string;
    Priority: "High" | "Medium" | "Low";
    Description?: string | null;
    DateDue: Date | string; // Often serialized as an ISO string over JSON
    Completed: boolean;
    DependentOn: number | null; // Go pointers (*uint) map to nullable types
    Dependency: Todo | null; // Represents the nested *Todo struct
  }



  export type Category = {
    ID: number;
    Name: string;
  }
