import "./App.css";
import { Form } from "./Pages/Form";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className="container">
        <h1 style={{ color: "#a3a3a3", fontStyle: "italic" }}>
          react-form-hook and material-ui
        </h1>
        <Form />
      </div>
    </LocalizationProvider>
  );
}

export default App;
