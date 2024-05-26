import { useState, useContext } from "react";
import { storage } from "../../firebase";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { StudentsContext } from "../../context/StudentsProvider";

// Css
import "../../assets/Css/addStudents.css";

const AddStudent = () => {
  const { students, addStudent, deleteStudent, fileInputRef } =
    useContext(StudentsContext);

  const [progress, setProgress] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [percentage, setPercentage] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const newStudent = {
            firstName,
            lastName,
            subjectName,
            percentage,
            imageUrl: downloadURL,
            year,
          };

          await addStudent(newStudent);

          // Reset form
          setFirstName("");
          setLastName("");
          setSubjectName("");
          setPercentage("");
          setYear(new Date().getFullYear());
          setProgress(0);
          fileInputRef.current.value = null;
        });
      }
    );
  };

  const handleYearChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setYear(selectedDate.getFullYear());
  };
  const handleDelete = async (studentId, studentYear, imageUrl) => {
    const studentYears = Object.keys(students);
    const isLastEntry = studentYears.every((year) => {
      if (year === studentYear) {
        return students[year].every(
          (student) => student.id !== studentId || student.imageUrl !== imageUrl
        );
      } else {
        return students[year].every((student) => student.imageUrl !== imageUrl);
      }
    });

    // Delete document from Firestore
    await deleteStudent(studentId, studentYear);

    // Delete image file from Firebase Storage if it's the last entry
    if (isLastEntry) {
      const storageRef = ref(storage, imageUrl);
      try {
        await deleteObject(storageRef);
        console.log("Image deleted successfully from Firebase Storage.");
      } catch (error) {
        console.error("Error deleting image from Firebase Storage:", error);
      }
    }
  };

  return (
    <div className="AddStudent">
      <form onSubmit={handleSubmit} className="form">
        <input type="file" name="file" ref={fileInputRef} />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject Name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Percentage"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
        <input
          type="date"
          onChange={handleYearChange}
          value={`${year}-01-01`}
        />
        <button type="submit">Upload</button>
      </form>
      <div className="outerbar">
        <div className="innerbar" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>

      <div className="student-list">
        {Object.keys(students).map((year) => (
          <div key={year}>
            <h2>Year: {year}</h2>
            {students[year].map((student, index) => (
              <div key={index} className="student">
                <img
                  src={student.imageUrl}
                  alt={`${student.firstName} ${student.lastName}`}
                  height={100}
                />
                <p>First Name: {student.firstName}</p>
                <p>Last Name: {student.lastName}</p>
                <p>Subject Name: {student.subjectName}</p>
                <p>Percentage: {student.percentage}</p>
                <button
                  onClick={() =>
                    handleDelete(student.id, year, student.imageUrl)
                  }
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddStudent;
