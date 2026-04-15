import api from "../libs/api.js";

const authService = {
  async register(payload) {
    const res = await api.post("/auth/register", payload);
    return res;
  },
  async login(payload) {
    const res = await api.post("/auth/login", payload);
    return res;
  },
  async me() {
    const res = await api.get("/me");
    return res;
  },
};

export default authService;
