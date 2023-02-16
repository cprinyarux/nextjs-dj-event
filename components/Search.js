import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/Search.module.css";

const Search = () => {
  const [term, setTerm] = useState();

  const router = useRouter();
  const handleSubmit = e => {
    e.preventDefault();
    console.log(term);
    router.push(`/events/search?term=${term}`);
    setTerm("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={e => setTerm(e.target.value)}
          placeholder="Search Events"
        />
        {/* <button className="btn" onClick={handleSubmit()} /> */}
      </form>
    </div>
  );
};

export default Search;
