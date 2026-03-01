import type { Employee } from "../types/Employees";

export const employees: Employee[] = [
  {
    id: 0,
    name: "Alice Johnson",
    email: "alice.johnson@company.com",
    department: "Engineering",
    role: "Senior Software Engineer",
    salary: 98000,
    hireDate: new Date(2020, 2, 15), // March 15, 2020
    isActive: true
  },
  {
    id: 1,
    name: "Brian Smith",
    email: "brian.smith@company.com",
    department: "Engineering",
    role: "DevOps Engineer",
    salary: 92000,
    hireDate: new Date(2021, 6, 10), // July 10, 2021
    isActive: true
  },
  {
    id: 2,
    name: "Catherine Lee",
    email: "catherine.lee@company.com",
    department: "Product",
    role: "Product Manager",
    salary: 105000,
    hireDate: new Date(2019, 10, 1), // November 1, 2019
    isActive: true
  },
  {
    id: 3,
    name: "Daniel Brown",
    email: "daniel.brown@company.com",
    department: "Finance",
    role: "Financial Analyst",
    salary: 78000,
    hireDate: new Date(2022, 0, 20), // January 20, 2022
    isActive: true
  },
  {
    id: 4,
    name: "Emma Williams",
    email: "emma.williams@company.com",
    department: "HR",
    role: "HR Business Partner",
    salary: 72000,
    hireDate: new Date(2018, 5, 5), // June 5, 2018
    isActive: true
  },
  {
    id: 5,
    name: "Franklin Davis",
    email: "franklin.davis@company.com",
    department: "Engineering",
    role: "Frontend Developer",
    salary: 85000,
    hireDate: new Date(2023, 1, 14), // February 14, 2023
    isActive: true
  },
  {
    id: 6,
    name: "Grace Miller",
    email: "grace.miller@company.com",
    department: "Marketing",
    role: "Digital Marketing Manager",
    salary: 88000,
    hireDate: new Date(2020, 8, 30), // September 30, 2020
    isActive: true
  },
  {
    id: 7,
    name: "Henry Wilson",
    email: "henry.wilson@company.com",
    department: "Engineering",
    role: "Backend Developer",
    salary: 90000,
    hireDate: new Date(2021, 3, 18), // April 18, 2021
    isActive: true
  },
  {
    id: 8,
    name: "Isabella Moore",
    email: "isabella.moore@company.com",
    department: "Customer Success",
    role: "Customer Success Manager",
    salary: 76000,
    hireDate: new Date(2019, 11, 12), // December 12, 2019
    isActive: false
  },
  {
    id: 9,
    name: "Jack Taylor",
    email: "jack.taylor@company.com",
    department: "Engineering",
    role: "QA Engineer",
    salary: 70000,
    hireDate: new Date(2022, 7, 22), // August 22, 2022
    isActive: true
  }
];