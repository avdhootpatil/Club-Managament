import WithLayout from "@/components/layout/WithLayout";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

function Dependants() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      memberLevel: "Platinum",
      creditPoints: 12345,
      dependents: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      memberLevel: "Gold",
      creditPoints: 8765,
      dependents: 1,
    },
    {
      id: 3,
      name: "Michael Johnson",
      memberLevel: "Silver",
      creditPoints: 5432,
      dependents: 2,
    },
    {
      id: 4,
      name: "Emily Davis",
      memberLevel: "Platinum",
      creditPoints: 18765,
      dependents: 4,
    },
    {
      id: 5,
      name: "David Lee",
      memberLevel: "Gold",
      creditPoints: 9876,
      dependents: 1,
    },
    {
      id: 6,
      name: "Sarah Wilson",
      memberLevel: "Silver",
      creditPoints: 6543,
      dependents: 2,
    },
    {
      id: 7,
      name: "Alex Chen",
      memberLevel: "Platinum",
      creditPoints: 15432,
      dependents: 3,
    },
    {
      id: 8,
      name: "Olivia Martinez",
      memberLevel: "Gold",
      creditPoints: 10987,
      dependents: 1,
    },
  ]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [dependents, setDependents] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [newDependents, setNewDependents] = useState([
    { name: "", relationship: "", dob: "" },
  ]);
  const handleAddDependent = () => {
    setShowDialog(true);
  };
  const handleAddNewDependent = () => {
    setNewDependents([
      ...newDependents,
      { name: "", relationship: "", dob: "" },
    ]);
  };
  const handleSaveDependent = () => {
    setDependents([...dependents, ...newDependents]);
    setNewDependents([{ name: "", relationship: "", dob: "" }]);
    setShowDialog(false);
  };
  const handleRemoveDependent = (index) => {
    setNewDependents(newDependents.filter((_, i) => i !== index));
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dependants</h1>
        <Button onClick={handleAddDependent}>Add Dependant</Button>
      </div>
      <div className="mb-5">
        <div className="flex items-center mb-4 max-w-xl">
          <Input
            type="text"
            placeholder="Search customers..."
            // value={search}
            // onChange={handleSearch}
            className="flex-1"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {customers.map((customer) => (
          <Card key={customer.id}>
            <CardContent className="grid gap-4 py-5">
              <div className="flex items-center justify-between">
                <div className="font-medium">{customer.name}</div>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  {customer.dependents} Dependents
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                <div>{customer.memberLevel} Member</div>
                <div>{customer.creditPoints} Credit Points</div>
              </div>
              <Button size="sm" variant="outline">
                Edit Dependents
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Sheet open={showDialog} onOpenChange={setShowDialog}>
        <SheetContent className="sm:max-w-[425px] overflow-auto">
          <SheetHeader>
            <SheetTitle>Add Dependents</SheetTitle>
            <SheetDescription>
              Add dependents for the selected customer.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-6 py-6">
            <div className="grid gap-2">
              <Label htmlFor="customer">Customer</Label>
              <Select
                id="customer"
                value={selectedCustomer?.id}
                onValueChange={(id) =>
                  setSelectedCustomer(
                    customers.find((c) => c.id === parseInt(id))
                  )
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select customer" />
                </SelectTrigger>
                <SelectContent>
                  {customers.map((customer) => (
                    <SelectItem key={customer.id} value={customer.id}>
                      {customer.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {newDependents.map((dependent, index) => (
              <div key={index} className="grid gap-2 border-b pb-10 ">
                <div className="flex items-center justify-between">
                  <Label htmlFor={`name-${index}`}>Dependent Name</Label>
                  {newDependents.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveDependent(index)}
                    >
                      <XIcon className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <Input
                  id={`name-${index}`}
                  placeholder="Enter dependent name"
                  value={dependent.name}
                  onChange={(e) => {
                    const updatedDependents = [...newDependents];
                    updatedDependents[index].name = e.target.value;
                    setNewDependents(updatedDependents);
                  }}
                />
                <div className="grid gap-2">
                  <Label htmlFor={`relationship-${index}`}>Relationship</Label>
                  <Select
                    id={`relationship-${index}`}
                    value={dependent.relationship}
                    onValueChange={(value) => {
                      const updatedDependents = [...newDependents];
                      updatedDependents[index].relationship = value;
                      setNewDependents(updatedDependents);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spouse">Spouse</SelectItem>
                      <SelectItem value="child">Child</SelectItem>
                      <SelectItem value="parent">Parent</SelectItem>
                      <SelectItem value="sibling">Sibling</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor={`dob-${index}`}>Date of Birth</Label>
                  <Input
                    id={`dob-${index}`}
                    type="date"
                    value={dependent.dob}
                    onChange={(e) => {
                      const updatedDependents = [...newDependents];
                      updatedDependents[index].dob = e.target.value;
                      setNewDependents(updatedDependents);
                    }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor={`dob-${index}`}>Biometric Info</Label>
                  <Input
                    type="text"
                    value={dependent.dob}
                    placeholder="Enter Biometric details"
                  />
                </div>
              </div>
            ))}
            <Button variant="outline" onClick={handleAddNewDependent}>
              Add Dependent
            </Button>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="button" onClick={handleSaveDependent}>
                Save
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default WithLayout(Dependants);
