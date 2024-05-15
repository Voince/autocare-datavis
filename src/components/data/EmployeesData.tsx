export interface Employee {
  employeeID: string;
  firstName: string;
  lastName: string;
  status: string;
  position: string;
  employmentDate: string;
  isActive: boolean;
}

export const EmployeesData = [
  {
    employeeID: "Rr89v12O",
    firstName: "John",
    lastName: "Doe",
    status: "Active",
    position: "Mechanic",
    employmentDate: "2021-03-15",
    isActive: true
  },
  {
    employeeID: "Pp73s40Q",
    firstName: "Jane",
    lastName: "Smith",
    status: "Active",
    position: "Service Advisor",
    employmentDate: "2019-09-01",
    isActive: true
  },
  {
    employeeID: "Tt22u11S",
    firstName: "Michael",
    lastName: "Johnson",
    status: "On Leave",
    position: "Auto Body Technician",
    employmentDate: "2022-06-01",
    isActive: false
  },
  {
    employeeID: "Ww68x09Z",
    firstName: "Emily",
    lastName: "Davis",
    status: "Terminated",
    position: "Parts Specialist",
    employmentDate: "2020-11-01",
    isActive: false
  },
  {
    employeeID: "Yy91z21X",
    firstName: "David",
    lastName: "Wilson",
    status: "Active",
    position: "Detailer",
    employmentDate: "2018-02-15",
    isActive: true
  },
  {
    employeeID: "Aa45b67M",
    firstName: "Chris",
    lastName: "Brown",
    status: "Active",
    position: "Mechanic",
    employmentDate: "2023-01-10",
    isActive: true
  },
  {
    employeeID: "Bb56c78N",
    firstName: "Alex",
    lastName: "Taylor",
    status: "Active",
    position: "Mechanic",
    employmentDate: "2020-07-22",
    isActive: true
  },
  {
    employeeID: "Cc67d89O",
    firstName: "Jordan",
    lastName: "Lee",
    status: "Active",
    position: "Mechanic",
    employmentDate: "2019-11-30",
    isActive: true
  }
];
