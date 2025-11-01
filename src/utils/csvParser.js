/**
 * Parse CSV text into an array of objects
 * @param {string} csvText - The CSV content as a string
 * @returns {Array} Array of objects with CSV data
 */
export const parseCSV = (csvText) => {
  const lines = csvText.split('\n').filter(line => line.trim() !== '');
  if (lines.length === 0) return [];

  // Get headers from first line
  const headers = lines[0].split(',').map(header => header.trim());

  // Parse data rows
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    if (values.length === headers.length) {
      const row = {};
      headers.forEach((header, index) => {
        row[header] = values[index].trim();
      });
      data.push(row);
    }
  }

  return data;
};

/**
 * Fetch and parse a CSV file
 * @param {string} filePath - Path to the CSV file
 * @returns {Promise<Array>} Promise that resolves to array of parsed data
 */
export const fetchCSV = async (filePath) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath}`);
    }
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error(`Error loading CSV from ${filePath}:`, error);
    return [];
  }
};
