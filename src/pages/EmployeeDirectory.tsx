export default function EmployeeDirectoryPage(){
    return (
        <>
        <div>
          <label htmlFor="employees"> Employee name</label>
          <input id="employees"/>
          <div className="list-of-employees"></div>
        </div>
        </>
    )
}