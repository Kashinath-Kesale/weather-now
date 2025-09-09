// src/components/SearchBar.jsx
import React, { useEffect, useState } from "react";

export default function SearchBar({ onSelect }) {
  const [q, setQ] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (q.length === 0) setTyping(false);
  }, [q]);

  return (
    <form
      className="searchBar"
      onSubmit={(e) => {
        e.preventDefault();
        if (!q.trim()) return;
        setTyping(false);
        onSelect({ input: q.trim() }); 
      }}
    >
      <input
        aria-label="Search city"
        placeholder="Search city (e.g., Hyderabad)"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setTyping(true);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}
