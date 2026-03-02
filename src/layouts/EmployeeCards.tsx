import EmployeeCardComponent from "../components/EmployeeCard";
import type { Employee } from "../types/Employees";
import { filterItems } from "../utils/EmployeeDirectoryUtils";

interface EmployeeCardProps {
  employees: Employee[];
  query: string;
}

export default function EmployeeCardLayout({
  employees,
  query,
}: EmployeeCardProps) {
  return (
    <>
    <table>
      <thead>
        Name
      </thead>
      {filterItems(employees, query).map((employee) => {
        return <EmployeeCardComponent employee={employee} />;
      })}
      </table>
    </>
  );
}
