import { useState, type BaseSyntheticEvent } from "react";
import { employeesData } from "../data/employees";
import { filterItems } from "../utils/EmployeeDirectoryUtils";
import EmployeeSearchComponent from "../components/EmployeeSearch";

export default function EmployeeDirectoryPage() {
  const [query, setQuery] = useState("");

  function setQueryOnChange(event: BaseSyntheticEvent) {
    setQuery(event.target.value);
  }
  return (
    <>
      <div>
        <EmployeeSearchComponent
          query={query}
          setQueryOnChange={setQueryOnChange}
        />
        {filterItems(employeesData, query).map((employee) => {
          return <div>{employee.name}</div>;
        })}
        <div className="list-of-employees"></div>
      </div>
    </>
  );
}
