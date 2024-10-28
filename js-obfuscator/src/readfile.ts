import { readFileSync } from "fs"

function readFile(path: string){
  try {
    const data = readFileSync(path, 'utf8');

    // Check if the file is empty
    if (data.length === 0) {
      return false
    } else {
        return data
    }
  } catch (err) {
      console.error('Error reading the file:', err);
  }
}

export default readFile