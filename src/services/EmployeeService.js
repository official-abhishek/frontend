import axios from 'axios';

const EMPLOYEE_API_BASE_URL='http://localhost:8080/getAllUsers';

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

}

export default new EmployeeService();