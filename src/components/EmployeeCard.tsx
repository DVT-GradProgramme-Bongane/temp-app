import type { Employee } from "../types/Employees";

interface EmployeeCardProp {
  employee: Employee;
}

export default function EmployeeCardComponent({ employee }: EmployeeCardProp) {
  return (
    <>
      <div>{employee.name}</div>
    </>
  );
}
