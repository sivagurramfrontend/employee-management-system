function EmployeeCard(employee) {
  return (
    
        <div className="employee-card">
            <h2>{employee.name}</h2>
            <p><strong>Role:</strong> {employee.role}</p>
            <p><strong>Salary:</strong> {employee.salary}</p>
       </div>
    
  );
  
}
export default EmployeeCard;