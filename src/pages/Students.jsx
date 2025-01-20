import React, { useState } from "react";
import styles from "./Students.module.css";

const Students = () => {
  const [students] = useState([
    {
      id: 1,
      firstName: "Ivan",
      lastName: "Loque",
      studentType: "Regular",
      course: "BSCS",
      files: ["Transcript.pdf", "EnrollmentForm.pdf"],
    },
    {
      id: 2,
      firstName: "Jimmar",
      lastName: "Idioma",
      studentType: "Irregular",
      course: "BSCS",
      files: ["IDCard.pdf"],
    },
    {
      id: 3,
      firstName: "Aziz",
      lastName: "Bayabao",
      studentType: "Shiftee",
      course: "BSCS",
      files: [],
    },
    {
      id: 4,
      firstName: "Jericho",
      lastName: "Figueroa",
      studentType: "Shiftee",
      course: "BSCS",
      files: ["COG.pdf",]
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = students.filter((student) =>
    Object.values(student).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleView = (student) => {
    setSelectedStudent(student);
  };

  const handleBack = () => {
    setSelectedStudent(null);
  };

  return (
    <div className={styles.container}>
      {selectedStudent ? (
        <div className={styles.detailView}>
          <button onClick={handleBack} className={styles.backButton}>
            Back
          </button>
          <h2>Student Details</h2>
          <p><strong>ID:</strong> {selectedStudent.id}</p>
          <p><strong>First Name:</strong> {selectedStudent.firstName}</p>
          <p><strong>Last Name:</strong> {selectedStudent.lastName}</p>
          <p><strong>Student Type:</strong> {selectedStudent.studentType}</p>
          <p><strong>Course:</strong> {selectedStudent.course}</p>

          {/* File Attachments Section */}
          <h3>Attached Files</h3>
          {selectedStudent.files.length > 0 ? (
            <ul className={styles.fileList}>
              {selectedStudent.files.map((file, index) => (
                <li key={index} className={styles.fileItem}>
                  <a href={`#${file}`} className={styles.fileLink}>
                    {file}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No files attached.</p>
          )}
        </div>
      ) : (
        <>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search by any field"
              value={searchQuery}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Student Type</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.studentType}</td>
                    <td>{student.course}</td>
                    <td>
                      <button
                        onClick={() => handleView(student)}
                        className={styles.viewButton}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No students found</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Students;
