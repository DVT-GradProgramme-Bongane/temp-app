import { useState, type BaseSyntheticEvent } from "react";
import { employeesData } from "../data/employees";
import EmployeeSearchComponent from "../components/EmployeeSearch";
import "../styles/EmployeeDirectory.css"
import EmployeeCardLayout from "../layouts/EmployeeCards";

export default function EmployeeDirectoryPage() {
  const [query, setQuery] = useState("");

  function setQueryOnChange(event: BaseSyntheticEvent) {
    setQuery(event.target.value);
  }
  return (
    <>
      <header>
        <h1>EMPLOYEE DIRECTORY</h1>
      </header>
      <div>
        <EmployeeSearchComponent
          query={query}
          setQueryOnChange={setQueryOnChange}
        />
        <EmployeeCardLayout employees={employeesData} query={query} />
        <div className="list-of-employees"></div>
      </div>
    </>
  );
}
