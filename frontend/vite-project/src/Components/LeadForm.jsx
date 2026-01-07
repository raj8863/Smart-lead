import { useState } from "react";
import API from "../api";

const LeadForm = ({ setLeads, setLoading }) => {
  const [input, setInput] = useState("");

const submitHandler = async (e) => {
  e.preventDefault();
  setLoading(true);

  const names = input.split(",").map(n => n.trim());

  const res = await API.post("/leads/process", { names });

  setLeads(prev => [...prev, ...res.data]); // ✅ FIX
  setInput("");
  setLoading(false);
};


  return (
    <form onSubmit={submitHandler}>
      <textarea
        placeholder="Peter, Aditi, Ravi"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default LeadForm;
