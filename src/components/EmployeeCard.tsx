import type { Employee } from "../types/Employees";

interface EmployeeCardProp {
  employee: Employee;
}

export default function EmployeeCardComponent({ employee }: EmployeeCardProp) {
  return (
    <tr>
      <td>#{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.role}</td>
      <td>
        {employee.hireDate.toLocaleString("default", { month: "long" })}{" "}
        {employee.hireDate.getDate()}, {employee.hireDate.getFullYear()}
      </td>
      <td>{employee.isActive ? "Yes" : "No"}</td>
    </tr>
  );
}
