import fs from "fs"
import path from "path"

const excludeDirs = ['node_modules', '.git']; // Directories to exclude

function checkFileExists(filename: string){
  const exists = new Promise((resolve) => {
    fs.readdir(process.cwd(), (err, files) => {
      if (err) {
          console.error('Error reading directory:', err);
          return;
      }

      // Filter out excluded directories
      const filteredFiles = files.filter(file => {
          const filePath = path.join(process.cwd(), file);
          const isExcluded = excludeDirs.includes(file) || fs.lstatSync(filePath).isDirectory();
          return !isExcluded;
      });
      
      // Check if the desired file exists in the filtered list
      if (filteredFiles.includes(filename)) {
        resolve(true)
      } else {
        resolve(false)
      }
  });
})
return exists
}

export default checkFileExists