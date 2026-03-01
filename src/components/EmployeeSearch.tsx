import type { BaseSyntheticEvent } from "react";

interface EmployeeSearchProp {
  query: string;
  setQueryOnChange: (event: BaseSyntheticEvent) => void;
}

export default function EmployeeSearchComponent({
  query,
  setQueryOnChange,
}: EmployeeSearchProp) {
  return (
    <>
      <label htmlFor="employees">Employee name: </label>
      <input id="employees" value={query} onChange={setQueryOnChange} />
    </>
  );
}
