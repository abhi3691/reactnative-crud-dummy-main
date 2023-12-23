import * as SQLite from "expo-sqlite";

const DB_NAME = "register.db";

type callBackType = (value: dataProps) => void;
type allCallBackType = (e: dataProps[]) => void;
interface props extends dataProps {
  callback: callBackType;
}

const db = SQLite.openDatabase(DB_NAME);

const createDb = () => {
  // Database creation logic remains the same
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS students (sl INTEGER PRIMARY KEY , id INTEGER, name TEXT, age INTEGER, gender TEXT)",
      [],
      () => console.log("Table created successfully"),
      (_, error) => console.error("Error creating table", error)
    );
  });
};

const createStudentDB = ({ id, name, age, gender, callback }: props) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO students (id , name, age, gender) VALUES (?, ?, ?, ?)",
      [id, name, age, gender],
      (_, result) => {
        const lastInsertRowId = result.insertId;
        tx.executeSql(
          "SELECT * FROM students WHERE id = ?",
          [lastInsertRowId],
          (_, queryResult) => {
            const createdStudent = queryResult.rows._array[0];
            callback(createdStudent);
          },
          (_, error) => console.error("Error fetching created student", error)
        );
      },
      (_, error) => console.error("Error creating student", error)
    );
  });
};

// Similarly, updateStudentDB, deleteStudentDB, and getAllStudentsDB functions can be modified accordingly.

const updateStudentDB = ({ id, name, age, gender, callback }: props) => {
  db.transaction((tx) => {
    tx.executeSql(
      "UPDATE students SET name = ?, age = ?, gender = ? WHERE id = ?",
      [name, age, gender, id],
      (_) => {
        tx.executeSql(
          "SELECT * FROM students WHERE id = ?",
          [id],
          (_, queryResult) => {
            const updatedStudent = queryResult.rows._array[0];
            callback(updatedStudent);
          },
          (_, error) => console.error("Error fetching updated student", error)
        );
      },
      (_, error) => console.error("Error updating student", error)
    );
  });
};

// Similarly, modify deleteStudentDB and getAllStudentsDB functions.

const deleteStudentDB = (id: number, callback: callBackType) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM students WHERE id = ?",
      [id],
      (_, queryResult) => {
        const deletedStudent = queryResult.rows._array[0];
        tx.executeSql(
          "DELETE FROM students WHERE id = ?",
          [id],
          (_) => {
            callback(deletedStudent);
          },
          (_, error) => console.error("Error deleting student", error)
        );
      },
      (_, error) => console.error("Error fetching deleted student", error)
    );
  });
};

const getAllStudentsDB = (callback: allCallBackType) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM students",
      [],
      (_, result) => {
        const rows = result.rows._array;
        callback(rows);
      },
      (_, error) => console.error("Error fetching students", error)
    );
  });
};

export {
  createDb,
  createStudentDB,
  updateStudentDB,
  deleteStudentDB,
  getAllStudentsDB,
};
