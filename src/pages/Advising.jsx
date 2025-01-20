import React, { useState } from "react";
import Layout from "../components/Layout"; // Import the Layout component
import styles from "./Advising.module.css"; // Use Advising-specific CSS

const Advising = () => {
  // Example student data with "Status" column
  const students = [
    { id: "2024001", fullName: "John Doe", studentType: "Irregular 3rd Year", course: "Computer Science", status: "Accepted" },
    { id: "2024002", fullName: "Jane Smith", studentType: "Irregular 2nd Year", course: "Computer Science", status: "Pending" },
    { id: "2024003", fullName: "Alice Johnson", studentType: "Transferee 2nd Year", course: "Computer Sciences", status: "Pending" },
    { id: "2024004", fullName: "Bob Brown", studentType: "Transferee 2nd Year", course: "Computer Science", status: "Rejected" },
    { id: "2024005", fullName: "Charlie Lee", studentType: "Shiftee 2nd Year", course: "Computer Science", status: "Pending" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = students.filter((student) =>
      student.id.toLowerCase().includes(query) ||
      student.fullName.toLowerCase().includes(query) ||
      student.studentType.toLowerCase().includes(query) ||
      student.course.toLowerCase().includes(query)
    );
    setFilteredStudents(filtered);
  };

  return (
    <Layout>
      <div className={styles.advising}>
        <header className={styles.headerSection}>
          <h1 className={styles.title}>Advising List</h1>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by ID, Name, Type, or Course"
            value={searchQuery}
            onChange={handleSearch}
            className={styles.searchInput}
          />
        </header>

        {/* Table displaying filtered students */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Student Type</th>
              <th>Course</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.fullName}</td>
                  <td>{student.studentType}</td>
                  <td>{student.course}</td>
                  <td>{student.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No students found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Advising;
