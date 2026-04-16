import api from "../libs/api.js";

const taskService = {
  async getAll() {
    const res = await api.get("/tasks");
    return res.data;
  },
  async create(payload) {
    const res = await api.post("/tasks", payload);
    return res.data;
  },
  async update(id, payload) {
    const res = await api.patch(`/tasks/${id}`, payload);
    return res.data;
  },
  async markAsDone(id) {
    const res = await api.patch(`/tasks/${id}/done`);
    return res.data;
  },
  async delete(id) {
    const res = await api.patch(`/tasks/${id}/delete`);
    return res.data;
  },
};

export default taskService;
