import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import axios from "axios"


interface User{
    _id:string, 
    username:string,
    password:string,
    createdAt:string
}
export function TableDemo() {
    const [users,setisUsers]=useState<User[]>([])

    useEffect(()=>{
        const fetchusers=()=>{
         axios.get("http://localhost:5000/api/auth/users").then((res) => setisUsers(res.data)).catch((error)=>console.log("Error=>",error));  
        }
        fetchusers()
    },[])
  return (
    <Table className="mt-20">

      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User Id</TableHead>
          <TableHead>username</TableHead>
          <TableHead>password</TableHead>
          <TableHead>Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) =>{ const date = new Date(new Date(user.createdAt))
        const formattedDate = date.toLocaleString();
         return  (
          <TableRow key={user._id}>
             <TableCell className="font-medium">{user._id}</TableCell>
            <TableCell className="font-medium">{user.username}</TableCell>
            <TableCell>{user.password}</TableCell>
            <TableCell>{formattedDate}</TableCell>
          </TableRow>
        )})}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{users.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
