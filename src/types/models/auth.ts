import { User } from 'firebase/auth';

type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

export type { AuthState };
