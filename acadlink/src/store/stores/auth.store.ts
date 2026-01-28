import { makeAutoObservable, runInAction } from "mobx";


export class AuthStore {
  token: string | null = null;
  role: string | null = null;
  userId: string | null = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);

    // Load from localStorage on hydration
    if (typeof window !== "undefined") {
      this.token = localStorage.getItem("token");
      this.role = localStorage.getItem("role");
      this.userId = localStorage.getItem("userId");
    }
  }

  async login(email: string, password: string) {
    this.loading = true;
    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      const { token, userId, role } = res.data.data;

      runInAction(() => {
        this.token = token;
        this.userId = userId;
        this.role = role;
        this.loading = false;
      });

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", role);

      return res.data;
    } catch (err: any) {
      runInAction(() => {
        this.loading = false;
      });
      throw err.response?.data || err;
    }
  }

  async universitySignup(payload: any) {
    this.loading = true;
    try {
      const res = await axios.post("/auth/university/signup", payload);
      this.loading = false;
      return res.data;
    } catch (err: any) {
      this.loading = false;
      throw err.response?.data || err;
    }
  }

  logout() {
    this.token = null;
    this.role = null;
    this.userId = null;

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
  }
}
