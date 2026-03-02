import type { Employee } from "../types/Employees";

interface EmployeeCardProp {
  employee: Employee;
}

export default function EmployeeCardComponent({ employee }: EmployeeCardProp) {
  return (
    <tr>
      <td>{employee.name}</td>
    </tr>
  );
}
