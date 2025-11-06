
import {
  Table,
  TableBody,

  TableCell,

  TableRow,
} from "../../components/ui/table"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"
import { ArrowDownToLine } from "lucide-react";

const invoices = [
  {
    invoice: "Commercial Driver's License (CDL)",

  },
  {
    invoice: "Medical Certificate",

  },
  {
    invoice: "Insurance Certificate",

  },
  {
    invoice: "Vehicle Registration",

  },
  {
    invoice: "IRP Registration (if applicable)",

  },
  {
    invoice: "Proof of Van Ownership",

  },
  {
    invoice: "VIN Number Of the Vehicle",
  },
]

export function TableDemo() {

  return (
    <div className="px-4 py-5 space-y-6 flex justify-center ">
    <Popover>
      <PopoverTrigger asChild>
        {/* <Button variant="outline">Open popover</Button> */}
              <button className="mt-20 font-medium transition-all duration-500 ease-in bg-gradient-to-r from-blue-800 to-blue-900 text-white px-2 py-2 hover:scale-105 rounded-md">Open Table</button>
      </PopoverTrigger>
      <PopoverContent >
         <Table >
      <TableBody>
        {invoices.map((invoice,index) => (
          <TableRow key={index}>
            <TableCell className="">{invoice.invoice}</TableCell>
            <ArrowDownToLine color="blue"/>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </PopoverContent>
    </Popover>


      
    </div>
   
  )
}


  //  <div >
  //           <div className="bg-slate-200 rounded-xl p-6 w-[90%] max-w-md relative">
  //             <button
  //               className="absolute top-3 right-3 text-gray-600 hover:text-black"
  //               onClick={() => setOpen(null)}
  //             >
  //               ✖
  //             </button>
  //             <h1 className="text-2xl font-bold text-amber-700 mb-2">{open.ser}</h1>
  //             <p className="text-gray-700 mb-3 font-semibold">{open.desc}</p>
  //             <h2 className="text-md font-semibold text-yellow-600">Technologies Used:</h2>
  //             <p className="text-gray-600 mb-2">{open.techs}</p>
  //             <h2 className="text-md font-semibold text-yellow-600">Languages Used:</h2>
  //             <p className="text-gray-600">{open.language}</p>
  //             <Link href={open.link}>
  //               <button className="mt-4 bg-gradient-to-r from-orange-600 to-yellow-900 text-white font-semibold p-2 rounded-lg">
  //                 Learn More
  //               </button>
  //             </Link>
  //           </div>
  //         </div>