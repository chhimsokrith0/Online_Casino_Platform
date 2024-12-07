// utils/auth.ts
export interface User {
    username: string;
    password: string;
  }
  
  export const users: User[] = [
    { username: "admin", password: "123" },
    { username: "testuser", password: "password" },
  ];
  
  export function authenticate(username: string, password: string): boolean {
    return users.some(
      (user) => user.username === username && user.password === password
    );
  }
  