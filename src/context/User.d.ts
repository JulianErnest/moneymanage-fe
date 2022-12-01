export type User = {
  created_at: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  updated_at: string;
};

export type UserContextType = {
  token: string;
  setToken: (token: string) => void;
  user: User;
  setUser: (user: User) => void;
};
