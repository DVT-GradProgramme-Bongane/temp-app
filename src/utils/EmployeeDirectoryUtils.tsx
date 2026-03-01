import type { Employee } from "../types/Employees";

export function filterItems(employees: Employee[], query: string) {
  query = query.toLowerCase();
  return employees.filter((employee) =>
    employee.name
      .split(" ")
      .some((name) => name.toLowerCase().startsWith(query)),
  );
}
