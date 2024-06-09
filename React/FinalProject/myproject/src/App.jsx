import "./App.css";
import React,{useContext} from "react";
import { MainRoutes } from "./routes";
import { ProfileCall } from "./services/auth";
import { AuthContext } from "./Contexts/AuthContext";

function App() {
  // const {setUser}=useContext(AuthContext)
  // React.useEffect(() => {
  //   ProfileCall().then(({data})=>{
  //     if(data.user){
  //       setUser(data.user)
  //     }else{
  //       setUser(false)
  //     }
      
  //   }).catch((err)=>{
  //     console.log(err)
  //   });
  // }, []);
  return (
    <div className="overflow-hidden">
      <MainRoutes />
    </div>
  );
}

export default App;
