import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LessonContext = createContext();

export const LessonProvider = ({ children }) => {
  const [complete, setComplete] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem("Lessons");
      if (data) setComplete(JSON.parse(data));
    })();
  }, []);

  const toggleLesson = async (id) => {
    const update = complete.includes(id)
      ? complete.filter((i) => i !== id)
      : [...complete, id];

    setComplete(update);
    await AsyncStorage.setItem("Lessons", JSON.stringify(update));
  };

  return (
    <LessonContext.Provider value={{ toggleLesson, complete }}>
      {children}
    </LessonContext.Provider>
  );
};

export const useLesson = () => useContext(LessonContext);
