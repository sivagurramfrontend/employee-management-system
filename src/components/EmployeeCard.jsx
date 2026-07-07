function EmployeeCard({name, role, status}) {
    return(
        <div className="employee-card">
            <h3>{name}</h3>
            <p>{role}</p>
            <p>{status}</p>
        </div>
    );
}
export default EmployeeCard;