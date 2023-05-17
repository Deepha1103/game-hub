/*import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;*/

/*import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>world</span>
      </Alert>
    </div>
  );
}

export default App;*/

/*import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Hello Darshan
      </Button>
    </div>
  );
}

export default App;*/
/*import React from "react";
import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  return (
    <div>
      <BsFillCalendarFill color="red" size="40" />
    </div>
  );
}

export default App;*/

//This below button component is not getting primary class
/*import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button onClick={() => {}}>My Button</Button>
    </div>
  );
}

export default App;*/

/*import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;*/
/*import { useState } from "react";
import produce from "immer";
function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;*/
/*import React, { useState } from "react";
import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title}
          {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;*/
/*
import React, { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [cartItems, setCartItems] = useState([
    "Product 1",
    "Product 2",
    "Product 3",
  ]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;*/
/*import produce from "immer";
import React, { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });*/

/*const handleClick = () => {
    setGame(produce((draft) => {
      const name = draft.find((game.player.name) => game.player.id === 1)
      return "Bob";
    }))
  };*/

/*const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "bob" } });
  };
  return;
  <Game />;
}

export default App;*/
/*import React from "react";
const [pizza, setPizza] = useState({
  name: "Spicy Pepperoni",
  toppings: ["Mushroom"],
});

const handleClick = () => {
  setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
};

function App() {
  return <div>App</div>;
}

export default App;*/
/*import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Produt1", quantity: 1 },
      { id: 2, title: "Produt2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return <div>App</div>;
}

export default App;*/
/*import React from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
        reiciendis sit, adipisci explicabo omnis, assumenda autem a eligendi
        magni reprehenderit voluptate ab? Amet quas enim, ex incidunt unde nulla
        dolore soluta dolorem minus similique voluptates laudantium modi,
        voluptatibus maxime obcaecati dolores maiores nobis earum aliquid harum!
        Modi aliquam magnam, doloribus, quo voluptatem est, sit dolorum eaque
        voluptatibus id nobis quos sapiente architecto. Ex numquam error tempore
        alias possimus recusandae deserunt esse iste reiciendis corrupti odio
        labore, aliquam adipisci vero delectus neque incidunt asperiores, nisi
        obcaecati. Amet, consequuntur sed! Eaque necessitatibus impedit animi
        dolores, fuga quae non obcaecati debitis mollitia quisquam.
      </ExpandableText>
    </div>
  );
}

export default App;*/
/*
import React, { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 6465, category: "utilities" },
    { id: 2, description: "bbb", amount: 5, category: "utilities" },
    { id: 3, description: "ccc", amount: 5, category: "utilities" },
    { id: 4, description: "ddd", amount: 5, category: "utilities" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;*/
/*import React, { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My Deepha App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;*/
/*import React, { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">HouseHold</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;*/
/*import React, { useEffect, useState } from "react";
import useUSers from "./hooks/useUsers";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUSers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Deepha" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUsers }) => setUsers([savedUsers, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item  d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;*/

import React from "react";

function App() {
  return <div>App</div>;
}

export default App;
