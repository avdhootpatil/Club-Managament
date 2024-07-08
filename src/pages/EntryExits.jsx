import WithLayout from "@/components/layout/WithLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

function ValuedCustomer() {
  return (
    <div className="p-3">
      <div className="grid gap-2">
        <Label htmlFor="payment-status">Member</Label>
        <Select id="payment-status">
          <SelectTrigger>
            <SelectValue placeholder="Select customer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="complete">Member 1</SelectItem>
            <SelectItem value="incomplete">Member 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="my-5">
        <Card className="w-full max-w-md">
          <CardHeader className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="grid gap-1 flex">
              {/* <div className="text-sm font-medium"> Balance</div> */}
              <div className="text-3xl font-bold">Balance : ₹ -10</div>
            </div>
          </CardHeader>
          <CardContent className="p-6 grid gap-6">
            <div className="grid gap-1">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Membership Expired</AlertTitle>
                <AlertDescription>
                  Membership expired from 20 days!
                </AlertDescription>
              </Alert>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Name</div>
              <div className="text-lg font-semibold">John Doe</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Email</div>
              <div className="text-muted-foreground">john@example.com</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Phone</div>
              <div className="text-muted-foreground">+1 (555) 555-5555</div>
            </div>
            <div className="grid gap-4">
              <div className="text-sm font-medium">Dependents</div>
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jane Doe</div>
                      <div className="text-xs text-muted-foreground">
                        Spouse
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Johnny Doe</div>
                      <div className="text-xs text-muted-foreground">Child</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center mt-5">
          <Label htmlFor="admin-access" className="mr-5">
            Grant Admin Access
          </Label>
          <Checkbox id="admin-access" />
        </div>
      </div>
    </div>
  );
}

function AccompanyingGuest() {
  return (
    <div>
      <div className="grid gap-2 p-3">
        <Label htmlFor="payment-status">Member</Label>
        <Select id="payment-status">
          <SelectTrigger>
            <SelectValue placeholder="Select customer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="complete">Member 1</SelectItem>
            <SelectItem value="incomplete">Member 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="my-5">
        <Card className="w-full max-w-md">
          <CardHeader className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="grid gap-1 flex">
              {/* <div className="text-sm font-medium"> Balance</div> */}
              <div className="text-3xl font-bold">Balance: ₹ 1,20,000</div>
            </div>
          </CardHeader>
          <CardContent className="p-6 grid gap-6">
            <div className="grid gap-1">
              <div className="text-sm font-medium">Name</div>
              <div className="text-lg font-semibold">John Doe</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Email</div>
              <div className="text-muted-foreground">john@example.com</div>
            </div>
            <div className="grid gap-1">
              <div className="text-sm font-medium">Phone</div>
              <div className="text-muted-foreground">+1 (555) 555-5555</div>
            </div>
            <div className="grid gap-4">
              <div className="text-sm font-medium">Dependents</div>
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jane Doe</div>
                      <div className="text-xs text-muted-foreground">
                        Spouse
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Johnny Doe</div>
                      <div className="text-xs text-muted-foreground">Child</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="my-10 " />

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-medium">Add Guest Details</h2>
      </div>

      <div className="grid gap-2 mb-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="Enter phone number" />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="credit-points">Guest entry fee</Label>
        <Input id="credit-points" type="number" placeholder="Enter Entry Fee" />
      </div>
    </div>
  );
}

function WalkInCustomrt() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="p-3">
      <hr className="my-5 " />

      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-medium">Add Guest Details</h2>
      </div>

      <div className="grid gap-2 mb-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="Enter phone number" />
        </div>
      </div>

      <hr className="my-5" />

      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-medium">Payment Details</h2>
      </div>

      <div className="grid gap-2">
        <div className="space-y-2">
          <Label htmlFor="admin-card">Amount</Label>
          <Input
            id="admin-card"
            placeholder="Enter amount"
            value={amount}
            onChange={(event) => {
              setAmount(Number(event.target.value));
            }}
          />
        </div>
        {amount == 0 ? (
          <div className="space-y-2">
            <Label htmlFor="access-reason">
              Reason for Complementary Access
            </Label>
            <Textarea id="access-reason" />
          </div>
        ) : (
          <div>
            <div className="space-y-2">
              <Label htmlFor="payment-type">Mode Of Payment</Label>
              <Select id="payment-type">
                <SelectTrigger>
                  <SelectValue placeholder="Select mode of payment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="valued-customer">UPI</SelectItem>
                  <SelectItem value="accompanying-guest">
                    Credit Card
                  </SelectItem>
                  <SelectItem value="walk-in-customer">Debit Card</SelectItem>
                  <SelectItem value="hotel-guest">Cash</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="payment-status">Payment Status</Label>
              <Select id="payment-status">
                <SelectTrigger>
                  <SelectValue placeholder="Select payment status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="complete">Received</SelectItem>
                  <SelectItem value="incomplete">Not received</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-card">Transaction Number</Label>
              <Input id="admin-card" placeholder="Enter transaction number" />
            </div>
          </div>
        )}
        {/* <div className="space-y-2">
          <Label htmlFor="admin-access" className="mr-5">
            Grant Access
          </Label>
          <Checkbox id="admin-access" />
        </div> */}
      </div>
    </div>
  );
}

function HotelGuest() {
  return (
    <div className="grid gap-2 p-3">
      <div className="space-y-2">
        <Label htmlFor="room-number">Room Number</Label>
        <Input id="room-number" type="number" placeholder="Enter room number" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bill-amount">Entry Fee</Label>
        <Input id="bill-amount" type="number" placeholder="Enter entry fee" />
      </div>
      {/* <div className="space-y-2">
        <Label htmlFor="admin-access" className="mr-5">
          Grant Access
        </Label>
        <Checkbox id="admin-access" />
      </div> */}
    </div>
  );
}

function EntryExits() {
  const [entries, setEntries] = useState([
    {
      type: "Valued Member",
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      notes: "VIP customer",
      isValid: true,
      balance: 500,
    },
    {
      type: "Valued Member",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      notes: "Frequent visitor",
      isValid: true,
      balance: 300,
    },
    {
      type: "Valued Member",
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "555-555-5555",
      notes: "Loyal customer",
      isValid: false,
      balance: -20,
    },
    {
      type: "Valued Member",
      name: "Alice Williams",
      email: "alice@example.com",
      phone: "111-222-3333",
      notes: "VIP member",
      isValid: true,
      balance: 800,
    },
    {
      type: "Valued Member",
      name: "Tom Davis",
      email: "tom@example.com",
      phone: "444-444-4444",
      notes: "Preferred customer",
      isValid: false,
      balance: -100,
    },
  ]);
  const [currentEntry, setCurrentEntry] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const handleCreateEntry = (type) => {
    setCurrentEntry({
      type,
      name: "",
      email: "",
      phone: "",
      notes: "",
      isValid: true,
      balance: 0,
    });
  };
  const handleSaveEntry = () => {
    setEntries([...entries, currentEntry]);
    setCurrentEntry(null);
  };
  const handleCardClick = (type) => {
    setActiveCard(type);
  };
  const handleGrantAccess = (entry) => {
    setEntries(entries.map((e) => (e === entry ? { ...e, isValid: true } : e)));
  };
  return (
    <div>
      <div className="grid grid-cols-5 gap-4 mb-8">
        <div
          className={`bg-primary text-primary-foreground p-4 rounded-lg cursor-pointer hover:bg-primary/90 ${
            activeCard === "Valued Member" ? "bg-primary/90" : ""
          }`}
          // onClick={() => {
          //   handleCreateEntry("Valued Member");
          //   handleCardClick("Valued Member");
          // }}
        >
          <div className="text-lg font-semibold">Valued Member</div>
          <div className="mt-4">
            {entries
              .filter((entry) => entry.type === "Valued Member")
              .slice(0, 3)
              .map((entry, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-2"
                >
                  <div className="text-sm font-medium">{entry.name}</div>
                  <div
                    className={`bg-green-500 text-green-50 px-2 py-1 rounded-full text-xs`}
                  >
                    Valid
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div
          className={`bg-primary text-primary-foreground p-4 rounded-lg cursor-pointer hover:bg-primary/90 ${
            activeCard === "Accompanying Guest" ? "bg-primary/90" : ""
          }`}
          onClick={() => {
            handleCreateEntry("Accompanying Guest");
            handleCardClick("Accompanying Guest");
          }}
        >
          <div className="text-lg font-semibold">Accompanying Guest</div>
        </div>
        <div
          className={`bg-primary text-primary-foreground p-4 rounded-lg cursor-pointer hover:bg-primary/90 ${
            activeCard === "Walk-in Customer" ? "bg-primary/90" : ""
          }`}
          onClick={() => {
            handleCreateEntry("Walk-in Customer");
            handleCardClick("Walk-in Customer");
          }}
        >
          <div className="text-lg font-semibold">Walk-in Customer</div>
        </div>
        <div
          className={`bg-primary text-primary-foreground p-4 rounded-lg cursor-pointer hover:bg-primary/90 ${
            activeCard === "Hotel Guest" ? "bg-primary/90" : ""
          }`}
          onClick={() => {
            handleCreateEntry("Hotel Guest");
            handleCardClick("Hotel Guest");
          }}
        >
          <div className="text-lg font-semibold">Hotel Guest</div>
        </div>
      </div>
      {currentEntry && (
        <Dialog open onOpenChange={() => setCurrentEntry(null)}>
          <DialogContent className="p-6 w-full max-w-[800px] ">
            <DialogHeader>
              <DialogTitle>Create {currentEntry.type} Entry</DialogTitle>
            </DialogHeader>
            <div className="max-h-[800px] overflow-y-auto px-3">
              {activeCard == "Valued Member" ? <ValuedCustomer /> : null}
              {activeCard == "Accompanying Guest" ? (
                <AccompanyingGuest />
              ) : null}
              {activeCard == "Walk-in Customer" ? <WalkInCustomrt /> : null}
              {activeCard == "Hotel Guest" ? <HotelGuest /> : null}
            </div>
            {/* <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={currentEntry.name}
                  onChange={(e) =>
                    setCurrentEntry({ ...currentEntry, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={currentEntry.email}
                  onChange={(e) =>
                    setCurrentEntry({ ...currentEntry, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={currentEntry.phone}
                  onChange={(e) =>
                    setCurrentEntry({ ...currentEntry, phone: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={currentEntry.notes}
                  onChange={(e) =>
                    setCurrentEntry({ ...currentEntry, notes: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="isValid">Is Valid</Label>
                <Checkbox
                  id="isValid"
                  checked={currentEntry.isValid}
                  onChange={(e) =>
                    setCurrentEntry({
                      ...currentEntry,
                      isValid: e.target.checked,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="balance">Balance</Label>
                <Input
                  id="balance"
                  type="number"
                  value={currentEntry.balance}
                  onChange={(e) =>
                    setCurrentEntry({
                      ...currentEntry,
                      balance: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
            </div> */}
            <DialogFooter>
              <Button variant="outline" onClick={() => setCurrentEntry(null)}>
                Cancel
              </Button>
              <Button onClick={handleSaveEntry}>Grant Access</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.type}</TableCell>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.email}</TableCell>
                <TableCell>{entry.phone}</TableCell>
                <TableCell>{entry.notes}</TableCell>
                <TableCell>
                  {entry.isValid ? (
                    <div className="bg-green-500 text-green-50 px-2 py-1 rounded-full">
                      Valid
                    </div>
                  ) : (
                    <div className="bg-red-500 text-red-50 px-2 py-1 rounded-full">
                      Invalid
                    </div>
                  )}
                </TableCell>
                <TableCell>{entry.balance.toFixed(2)}</TableCell>
                <TableCell>
                  {!entry.isValid && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleGrantAccess(entry)}
                    >
                      Grant Access
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default WithLayout(EntryExits);

// import WithLayout from "@/components/layout/WithLayout";

// import { useState, useMemo } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { useNavigate } from "react-router-dom";

// function EnretExits() {
//   const navigate = useNavigate();

//   const [search, setSearch] = useState("");
//   const [entries, setEntries] = useState([
//     {
//       id: 1,
//       member: "John Doe",
//       date: "2023-06-01",
//       time: "09:30 AM",
//       organization: "Acme Gym",
//       membership: "Premium",
//       creditPoints: 50,
//     },
//     {
//       id: 2,
//       member: "Jane Smith",
//       date: "2023-06-02",
//       time: "05:45 PM",
//       organization: "Aqua Center",
//       membership: "Basic",
//       creditPoints: 25,
//     },
//     {
//       id: 3,
//       member: "Michael Johnson",
//       date: "2023-06-03",
//       time: "11:15 AM",
//       organization: "Acme Gym",
//       membership: "Premium",
//       creditPoints: 75,
//     },
//     {
//       id: 4,
//       member: "Emily Davis",
//       date: "2023-06-04",
//       time: "03:00 PM",
//       organization: "Tennis Club",
//       membership: "Elite",
//       creditPoints: 100,
//     },
//     {
//       id: 5,
//       member: "David Lee",
//       date: "2023-06-05",
//       time: "10:00 AM",
//       organization: "Acme Gym",
//       membership: "Basic",
//       creditPoints: 30,
//     },
//   ]);
//   const filteredEntries = useMemo(() => {
//     return entries.filter((entry) =>
//       entry.member.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [entries, search]);
//   return (
//     <div>
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold">Sports Club Entries</h1>
//         <Button
//           onClick={() => {
//             navigate("/create-entry");
//           }}
//         >
//           Create Manual Entry
//         </Button>
//       </div>
//       <div className="mb-6">
//         <Input
//           type="text"
//           placeholder="Search by member name..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full max-w-md"
//         />
//       </div>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Member</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead>Time</TableHead>
//             <TableHead>Organization</TableHead>
//             <TableHead>Membership</TableHead>
//             <TableHead>Credit Points</TableHead>
//             <TableHead>Actions</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filteredEntries.map((entry) => (
//             <TableRow key={entry.id}>
//               <TableCell>{entry.member}</TableCell>
//               <TableCell>{entry.date}</TableCell>
//               <TableCell>{entry.time}</TableCell>
//               <TableCell>{entry.organization}</TableCell>
//               <TableCell>{entry.membership}</TableCell>
//               <TableCell>{entry.creditPoints}</TableCell>
//               <TableCell>
//                 <div className="flex items-center gap-2">
//                   <Button variant="outline" size="sm">
//                     <FilePenIcon className="h-4 w-4" />
//                   </Button>
//                   <Button variant="outline" size="sm" color="red">
//                     <TrashIcon className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

// function FilePenIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
//       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//       <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
//     </svg>
//   );
// }

// function TrashIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//     </svg>
//   );
// }

// export default WithLayout(EnretExits);
