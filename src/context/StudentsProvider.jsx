import React, { createContext, useState, useEffect, useRef } from "react";
import { storage, db } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

const StudentsContext = createContext();

const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState({});
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, "students"));
      const studentsData = {};
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const studentYear = data.year;
        if (!studentsData[studentYear]) {
          studentsData[studentYear] = [];
        }
        studentsData[studentYear].push({ id: doc.id, ...data });
      });
      setStudents(studentsData);
    };

    fetchStudents();
  }, []);

  const addStudent = async (newStudent) => {
    const docRef = await addDoc(collection(db, "students"), newStudent);
    const addedStudent = { id: docRef.id, ...newStudent };

    setStudents((prevStudents) => {
      const updatedStudents = { ...prevStudents };
      if (!updatedStudents[newStudent.year]) {
        updatedStudents[newStudent.year] = [];
      }
      updatedStudents[newStudent.year] = [
        ...updatedStudents[newStudent.year],
        addedStudent,
      ];
      return updatedStudents;
    });
  };

  const deleteStudent = async (studentId, studentYear) => {
    await deleteDoc(doc(db, "students", studentId));

    setStudents((prevStudents) => {
      const updatedStudents = { ...prevStudents };
      updatedStudents[studentYear] = updatedStudents[studentYear].filter(
        (student) => student.id !== studentId
      );
      return updatedStudents;
    });
  };

  return (
    <StudentsContext.Provider
      value={{
        students,
        addStudent,
        deleteStudent,
        fileInputRef,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export { StudentsContext, StudentsProvider };
