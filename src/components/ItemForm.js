import React from "react";
import PropTypes from "prop-types";

const KeyValueVisualizer = ({ data }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Key-Value Data</h3>
      <div style={styles.listContainer}>
        {Object.entries(data).map(([key, value], index) => (
          <div key={index} style={styles.item}>
            <strong style={styles.key}>{key}:</strong>
            <span style={styles.value}>{String(value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    margin: "20px auto",
    maxWidth: "600px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#333",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  key: {
    fontWeight: "bold",
    color: "#555",
  },
  value: {
    color: "#000",
  },
};

KeyValueVisualizer.propTypes = {
  data: PropTypes.object.isRequired, // Validate prop type as an object
};

export default KeyValueVisualizer;
