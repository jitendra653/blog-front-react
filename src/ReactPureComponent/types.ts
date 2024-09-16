export interface User {
    id: number;
    name: string;
    age: number;
  }
  
  export interface UserProps {
    user: User;
  }
  
  export interface UserListProps {
    users: User[];
    onUpdateAge: (id: number, newAge: number) => void;
  }
  