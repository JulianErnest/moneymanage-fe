import { Grid, Box, List, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import TimePicker from "../components/TimePicker";

import BG from "../css/mm-bg.png";

export default function Dashboard() {
  const [date, setDate] = useState();
  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      columnSpacing={2}
      container
      style={styles.container}
    >
      <Grid item xs={8} overflow="auto">
        <Box sx={styles.box}>
          <h3 style={styles.bigText}>My Account</h3>
          <h5 style={styles.lightText}>
            View your current balance relative to the monthly budget you
            inputted here.
          </h5>
          <Box sx={styles.row}>
            <Box>
              <h3 style={styles.text}>Current Balance</h3>
              <h2 style={styles.money}>P50,000.00</h2>
            </Box>
            <Box>
              <h3 style={styles.text}>Account Name</h3>
              <h2 style={styles.money}>P50,000.00</h2>
            </Box>
            <Box>
              <h3 style={styles.text}>Add category</h3>
              <br />
              <br />
              <input style={styles.addCategoryInput} />
            </Box>
          </Box>
          <h3 style={styles.bigText}>Spending Tracker</h3>
          <h5 style={styles.lightText}>
            View all your recent purchases here. Amount paid and nature of
            purchase included.
          </h5>
          <Box sx={styles.row}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3 style={styles.textFilter}>Apply filter by category:</h3>
              <Box marginLeft={2} display="flex" alignItems="center">
                <button>Groceries</button>
                <button>Travel</button>
                <button>Food</button>
                <button>School</button>
              </Box>
            </Box>
          </Box>
          <Grid container sx={{ marginLeft: "40px", marginRIght: "40px" }}>
            <Grid item xs={2}>
              <h5 style={styles.tableHeader}>Category</h5>
            </Grid>
            <Grid item xs={2}>
              <h5 style={styles.tableHeader}>Name</h5>
            </Grid>
            <Grid item xs={2}>
              <h5 style={styles.tableHeader}>Price</h5>
            </Grid>
            <Grid item xs={2}>
              <h5 style={styles.tableHeader}>Date</h5>
            </Grid>
            <Grid item xs={4}>
              <h5 style={styles.tableHeader}>Notes</h5>
            </Grid>
          </Grid>
          <List style={styles.list}>
            <h1>a</h1>
          </List>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={styles.box}>
          <h1 style={styles.bigText}>Add Spending</h1>
          <input
            placeholder="Name of the item"
            style={styles.addSpendingInput}
          />
          <input
            placeholder="Name of the item"
            style={styles.addSpendingInput}
          />
          <input
            placeholder="Name of the item"
            style={styles.addSpendingInput}
          />
          <TimePicker />
          <select
            placeholder="Name of the item"
            style={styles.addSpendingInput}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <BsFillPlusCircleFill style={styles.icon} />
        </Box>
      </Grid>
    </Grid>
  );
}

const styles = {
  addCategoryInput: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: "1.1em",
    borderBottomWidth: "1px",
    borderTop: "0px",
    borderLeft: "0px",
    marginLeft: "20px",
    borderRight: "0px",
  },
  addSpendingInput: {
    backgroundColor: "#737373",
    marginLeft: "50px",
    marginRight: "50px",
    height: "30px",
    marginTop: "30px",
  },
  container: {
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "100vw",
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    flex: "auto",
  },
  icon: {
    color: "#065ED4",
    textAlign: "center" as const,
    width: "100%",
    fontSize: 40,
    marginTop: 25,
  },
  box: {
    width: "100%",
    backgroundColor: "#323232",
    height: "30em",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
  },
  button: {
    width: "130px",
    marginLeft: "20px",
    height: "30px",
    borderRadius: "10px",
    backgroundColor: "#737373",
    color: "white",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
    marginTop: "20px",
    justifyContent: "space-between",
  },
  bigText: {
    color: "white",
    fontSize: "1.1em",
    textAlign: "center" as const,
    margin: 15,
  },
  list: {
    backgroundColor: "#737373",
    overflow: "auto",
    height: "10em",
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "10px",
    marginBottom: "15px",
  },
  money: {
    color: "white",
    fontSize: "1.3em",
    marginLeft: "20px",
  },
  text: {
    color: "white",
    fontSize: "0.8em",
    marginLeft: "20px",
    flexBasis: "100%",
  },
  lightText: {
    color: "#737373",
    margin: 0,
    padding: 0,
    marginTop: "-10px",
    fontSize: "10px",
    textAlign: "center" as const,
  },
  textFilter: {
    color: "white",
    fontSize: "0.8em",
    marginLeft: 20,
  },
  tableHeader: {
    textAlign: "left" as const,
    width: "100%",
    color: "white",
    padding: 0,
    margin: 0,
  },
};
