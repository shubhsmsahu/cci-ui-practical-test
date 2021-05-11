import "./styles.css";
import UserTable from "./UserTable";
import Adduser from "./Adduser";
import Updateuser from "./Updateuser";
import "bootstrap/dist/css/bootstrap.css";
export default function App() {
  return (
    <div className="App">
      <UserTable />
      <Adduser />
      <Updateuser />
    </div>
  );
}
