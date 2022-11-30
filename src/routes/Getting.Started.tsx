import Styles from "../css/GettingStarted.module.css";
import { useState } from "react";
import LocationMarker from "../css/LocationMarker.png";
import CurrencyDollar from "../css/CurrencyDollar.png";
import LightBulb from "../css/LightBulb.png"
import { useNavigate } from "react-router-dom";
import Dropdown from './Dropdown';


function GettingStarted() {
    const navigate = useNavigate();
    const[selected, setSelected] = useState("");
    const homepage = () => {
        navigate("/");
    };

    return (
        <div className={Styles.body}>
            <div className={Styles.modal}>
                <div className={Styles.upperDiv}>
                    <h3>Let's get you started!</h3>
                </div>

                <div className={Styles.inputfields}>
                    <img src={LightBulb}></img>
                    <h3>Account Name</h3>
                    <p>Input the name of the account you wish to track your expenses on.</p>
                    <input type="text" />
                </div>

                <div className={Styles.inputfields}>
                    <img src={LocationMarker}></img>
                    <h3>Select Base Currency</h3>
                    <p>Let’s start by selecting your base currency. All transactions in other curriences will be calculated regards to this one.</p>
                    <Dropdown selected={selected} setSelected={setSelected} />
                </div>

                <div className={Styles.inputfields}>
                    <img src={CurrencyDollar}></img>
                    <h3>Select your Cash Balance</h3>
                    <p>How much cash do you have right now? You may skip this part if you wish to sync your bank account with the site.</p>
                    <input type="text" />
                </div>

                <button className={Styles.submitBtn}>Submit</button>

            </div>
        </div>
    );
}
export default GettingStarted;
  