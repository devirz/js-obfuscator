import { writeFileSync } from "fs"

function writeFile(path: string, data: string){
  try {
    writeFileSync(path, data);
    return path
  } catch (err) {
    console.error('Error writing to file:', err);
    return false
  }
}

export default writeFile
