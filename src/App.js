import React, { useState, useEffect } from "react";

import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/Buttons";
import Sections from "./components/Sections";
import ListContact from "./components/ToDoList/MainList/List.json";
import ToDoList from "./components/ToDoList/MainList/MainList";
import ContactForm from "./components/ToDoList/ContactForm";
import Filters from "./components/ToDoList/Filter";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [listContactTotal, setListContactTotal] = useState([]);
  const [filterListContactTotal, setFilterListContactTotal] = useState(
    listContactTotal
  );
  useEffect(() => {
    const massItem = localStorage.getItem("massItem");
    const parseItem = JSON.parse(massItem);
    
    if (parseItem) {
      setListContactTotal(parseItem);
    } else {
      setListContactTotal(ListContact);
    }
  }, []);
  useEffect(() => {
    setFilterListContactTotal(listContactTotal);
    localStorage.setItem("massItem", JSON.stringify(listContactTotal));
  }, [listContactTotal]);
  const goodVoise = () => {
    setGood((good) => good + 1);
  };
  const neuiralVoise = () => {
    setNeutral((neutral) => neutral + 1);
  };
  const badVoise = () => {
    setBad((bad) => bad + 1);
  };
  const addContacts = (id, name, number) => {
    setListContactTotal((prev) => {
      let newArray = prev.map((el) => el.name.toLowerCase());

      if (newArray.includes(name.toLowerCase())) {
        alert("такое имя уже есть, придумайте другое");
        return prev;
      } else {
        return [...prev, { id, name, number }];
      }
    });
  };

  const contactsFilter = (filter) => {
    setFilterListContactTotal(listContactTotal);
    setFilterListContactTotal((prev) => {
      return prev.filter((contact) => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
    });
  };
  const remoteContact = (id) => {
    setListContactTotal((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Please leave feedback</h1>

      <Sections>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          setOptions={[goodVoise, neuiralVoise, badVoise]}
        />
        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </Sections>

      <Sections>
        <h1>Phonebook</h1>
        <ContactForm addContacts={addContacts} />

        <h2>Contacts</h2>
        <Filters filterFunc={contactsFilter} />
        <ToDoList list={filterListContactTotal} remoteContact={remoteContact} />
      </Sections>
    </>
  );
};

export default App;
