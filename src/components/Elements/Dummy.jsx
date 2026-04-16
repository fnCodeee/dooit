"use client"

import taskService from "@/services/task.service.js";
import { useEffect, useState } from "react"

const Dummy = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTask = async () => {
    try {
      const data = await taskService.getAll();
      setTask(data.data);
      // console.log(data)
    } catch (error) {
      console.error("Gagal ambil task: ", error)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDYyOThiYzkwYTY2ZTMyNTYyMzhjYiIsImlhdCI6MTc3NjI3NTA4MywiZXhwIjoxNzc2NTM0MjgzfQ.zf-pdCroUsV4kclBa-Y4-kUwX68CI1gtjB2-774KknY")
    fetchTask();
  }, [])

  if(loading) {
    return <p>Tunggu bentar nyed . . . .</p>
  }
  return (
    <div>
      <h1>Daftar tugas</h1>
      {task.length === 0 ? (
        <p>Tidak ada tugas!</p>
      ):(
        task.map((tugas) => (
          <div key={tugas._id}>
            <p>{tugas.title}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Dummy