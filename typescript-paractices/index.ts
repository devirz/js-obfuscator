console.log("Hello via Bun!");
interface IUser {
  id: number
  name: string
  username: string
  phone_number: string
}

const user: IUser = {
  id: 2,
  name: "Alireza",
  username: "AppModule",
  phone_number: "09215562314"
}

console.log(`welcome to my app ${user.name}`);