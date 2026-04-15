import api from "../libs/api.js";

const taskService = {
  async getAll() {
    const res = api.get("/tasks");
    return res;
  },
  async create(payload) {
    const res = api.post("/tasks", payload);
    return res;
  },
  async update(id, payload) {
    const res = api.patch(`/tasks/${id}`, payload);
    return res;
  },
  async markAsDone(id) {
    const res = api.patch(`/tasks/${id}/done`);
    return res;
  },
  async delete(id) {
    const res = api.patch(`/tasks/${id}/delete`);
    return res;
  },
};

export default taskService;
