
export interface AuthProps {
  name: string;
  email?: string;
  isLoggedIn: boolean;
  token?: string | null;
}
