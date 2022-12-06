import { Grid, Box, List, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

import TimePicker from "../components/TimePicker";
import { UserContextType } from "../context/User";
import { UserContext } from "../context/UserContext";

import BG from "../css/mm-bg.png";
import accountService from "../services/accountService";
import categoryService from "../services/categoryService";
import entryService from "../services/entryService";
import toastService from "../services/toastService";
import { Category } from "../types/Category";
import { Entry } from "../types/Entry";

export default function Dashboard() {
  const { token, user, account, setAccount } = useContext(
    UserContext
  ) as UserContextType;

  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  async function getCategories() {
    console.log(user.id);
    const response = await categoryService.getMyCategories(account.id, token);
    console.log(response);
    response.success && setCategories(response.data);
  }

  async function getEntries() {
    const response = await entryService.getMyEntries(user.id, token);
    response.success && setEntries(response.data);
  }

  useEffect(() => {
    getCategories();
    getEntries();
  }, []);

  async function addCategory(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const response = await categoryService.addCategory(user.id, token, {
        description: newCategory,
        type: "SPENDING",
      });
      toastService.showToast(response);
      if (response.success) {
        setNewCategory("");
        getCategories();
      }
    }
  }

  async function addEntry() {
    const a = moment(date).format("YYYY-MM-DD HH:mm:ss");
    if (name && notes && date && amount && category) {
      const response = await entryService.addEntry(user.id, token, {
        name,
        type: "SPENDING",
        amount: +amount,
        date: a,
        category_id: +category,
        description: notes,
      });
      toastService.showToast(response);
      const account = await accountService.getAccount(user.id, token);
      setAccount(account.data[0]);
      if (response.success) {
        setName("");
        setNotes("");
        setAmount("");
        setCategory("");
        getEntries();
      }
    } else {
      toastService.showToast({
        success: false,
        message: "Fill out all forms",
        data: "",
      });
    }
  }

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
              <h2 style={styles.money}>
                {account.balance} - {account.currency}
              </h2>
            </Box>
            <Box>
              <h3 style={styles.text}>Account Name</h3>
              <h2 style={styles.money}>{account.name}</h2>
            </Box>
            <Box>
              <h3 style={styles.text}>Add category</h3>
              <br />
              <br />
              <input
                value={newCategory}
                onChange={(t) => setNewCategory(t.target.value)}
                onKeyDown={(e) => addCategory(e)}
                style={styles.addCategoryInput}
              />
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
                {categories.map((c) => (
                  <button key={c.id}>{c.description}</button>
                ))}
              </Box>
            </Box>
          </Box>
          <Grid
            container
            sx={{
              marginLeft: "40px",
              marginRight: "40px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
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
            <Grid item xs={2}>
              <h5 style={styles.tableHeader}>Category</h5>
            </Grid>
          </Grid>
          <List style={styles.list}>
            {entries.map((e) => (
              <Grid key={e.id} container sx={{}}>
                <Grid item xs={2}>
                  <h5 style={styles.tableHeader}>{e.name}</h5>
                </Grid>
                <Grid item xs={2}>
                  <h5 style={styles.tableHeader}>{e.amount}</h5>
                </Grid>
                <Grid item xs={2}>
                  <h5 style={styles.tableHeader}>{e.date}</h5>
                </Grid>
                <Grid item xs={4}>
                  <h5 style={styles.tableHeader}>{e.description}</h5>
                </Grid>
                <Grid item xs={2}>
                  <h5 style={styles.tableHeader}>
                    {categories.find((c) => c.id == e.category_id)?.description}
                  </h5>
                </Grid>
              </Grid>
            ))}
          </List>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={styles.box}>
          <h1 style={styles.bigText}>Add Spending</h1>
          <input
            value={name}
            onChange={(t) => setName(t.target.value)}
            placeholder="Name of the item"
            style={styles.addSpendingInput}
          />
          <input
            value={amount}
            onChange={(t) => setAmount(t.target.value)}
            placeholder="Name of the item"
            style={styles.addSpendingInput}
          />
          <TimePicker date={date} setDate={setDate} />
          <input
            value={notes}
            onChange={(t) => setNotes(t.target.value)}
            placeholder="Name of the item"
            style={styles.addSpendingInput}
          />
          <select
            value={category}
            onChange={(c) => setCategory(c.target.value)}
            placeholder="Name of the item"
            style={styles.addSpendingInput}
          >
            <option value="" disabled hidden>
              Choose here
            </option>

            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.description}
              </option>
            ))}
          </select>
          <BsFillPlusCircleFill onClick={addEntry} style={styles.icon} />
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
