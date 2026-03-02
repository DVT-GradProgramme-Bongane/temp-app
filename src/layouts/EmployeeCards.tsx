import EmployeeCardComponent from "../components/EmployeeCard";
import type { Employee } from "../types/Employees";
import { filterItems } from "../utils/EmployeeDirectoryUtils";
import "../styles/EmployeeCards.css";

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
      <table className="employee-directory-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Date Hired</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {filterItems(employees, query).map((employee) => {
            return <EmployeeCardComponent employee={employee} />;
          })}
        </tbody>
      </table>
    </>
  );
}
