import chalk from "chalk";
import { existsSync } from "fs"
import inquirer from "inquirer";
import ora from "ora";
import checkFileExists from "./src/walk-files";
import readFile from "./src/readfile";
import obfuscator from "./src/obfs";
import writeFile from "./src/writeFile";

const spinner = ora("Loading Script...").start()

async function main(){
  spinner.stop()
  const {filename} = await inquirer.prompt(
    {
      type: "input",
      name: "filename",
      message: "Please Enter Your File Name:",
      validate(value) {
        const pass = value.match(
          /^(\w+).js$/i,
        );
        if (pass) {
          return true;
        }
  
        return 'Please enter a valid js file!';
      },
    }
  )
  const existsFile = await checkFileExists(filename)
  if(existsFile){
    spinner.text = chalk.yellowBright("waiting for reading ") + chalk.bold(filename)
    spinner.start()
    const data = readFile(filename)
    if(data){
      spinner.text = chalk.magentaBright("waiting for obfuscating...")
      const obfuscatedData = await obfuscator(data)
      spinner.stop()
      console.log(chalk.greenBright("[+] Data Has Been Successfuly Obfuscated"));
      const filePath = writeFile(`${filename}-obfs.js`, obfuscatedData)
      if (filePath) console.log(chalk.blueBright("[+] Obfuscated File:"), chalk.bold(filePath)); else console.log(chalk.red("i get error"))
    } else {
      spinner.stop()
      console.log(chalk.red("This File is Empty!"))
    }
  } else {
    console.log(chalk.red("This File Doesn't Exists!"));
  }
}

main()