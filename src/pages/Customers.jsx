import WithLayout from "@/components/layout/WithLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Customers() {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      membershipName: "Gold",
      creditPoints: 5000,
      dependents: 2,
      organizationName: "Acme Inc",
    },
    {
      id: 2,
      name: "Jane Smith",
      membershipName: "Silver",
      creditPoints: 3000,
      dependents: 1,
      organizationName: "Globex Corp",
    },
    {
      id: 3,
      name: "Bob Johnson",
      membershipName: "Platinum",
      creditPoints: 10000,
      dependents: 3,
      organizationName: "Stark Industries",
    },
    {
      id: 4,
      name: "Alice Williams",
      membershipName: "Bronze",
      creditPoints: 20,
      dependents: 0,
      organizationName: "Umbrella Corp",
    },
  ]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    membershipName: [],
    organizationName: [],
  });
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    membership: "",
    dependents: [],
    biometricFingerprint: false,
    organization: "",
  });
  const [showDialog, setShowDialog] = useState(false);
  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const nameMatch = customer.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const membershipMatch =
        filters.membershipName.length === 0 ||
        filters.membershipName.includes(customer.membershipName);
      const organizationMatch =
        filters.organizationName.length === 0 ||
        filters.organizationName.includes(customer.organizationName);
      return nameMatch && membershipMatch && organizationMatch;
    });
  }, [customers, search, filters]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };
  const handleNewCustomerSubmit = () => {
    console.log(newCustomer);
    setShowNewCustomerDialog(false);
  };
  const handleCustomerDelete = (customerId) => {
    setCustomers(customers.filter((customer) => customer.id !== customerId));
  };
  const handleCustomerEdit = (customer) => {
    setNewCustomer(customer);
    setShowNewCustomerDialog(true);
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold">Members</h1>
        <Button onClick={() => navigate("/create-member")}>
          Create New Member
        </Button>
      </div>
      <div className="mb-10">
        <div className="flex items-center mb-4 max-w-xl">
          <Input
            type="text"
            placeholder="Search customers..."
            value={search}
            onChange={handleSearch}
            className="flex-1"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {customers.map((customer) => (
          <Card key={customer.id}>
            <CardContent className="grid gap-2 pt-5">
              <div className="flex items-center justify-between">
                <div className="font-medium">{customer.name}</div>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  {customer.dependents} Dependents
                </Badge>
              </div>

              <div className="flex ">
                <div className="font-medium text-gray-400 ">
                  {customer.organizationName}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <div>{customer.memberLevel} Member</div>
                <div>
                  <Badge
                    variant={
                      customer.creditPoints < 30 ? "destructive" : "outlined"
                    }
                    className="bg-primary/10 text-primary mt-5"
                  >
                    Balance ₹{customer.creditPoints}
                  </Badge>
                </div>
              </div>
              <div className="flex space-x-2 justify-end">
                <Button variant="outline" className="flex items-center gap-2">
                  <FilePenIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  <Trash2Icon className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {showDialog && (
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>New Member Details</DialogTitle>
            </DialogHeader>
            <div className="grid gap-6">
              <div>
                <h2 className="text-lg font-medium mb-4">Basic Details</h2>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-muted-foreground">Member Name</p>
                    <p>John Doe</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p>john@example.com</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Phone Number</p>
                    <p>123-456-7890</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">Organization</p>
                  <p>Organization 1</p>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium">Dependents</h2>
                <div className="grid gap-6 mt-4">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <p className="text-muted-foreground">Name</p>
                      <p>Jane Doe</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p>jane@example.com</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Phone</p>
                      <p>987-654-3210</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium">Membership Charges</h2>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div>
                    <p className="text-muted-foreground">Number of Days</p>
                    <p>30</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Number of People</p>
                    <p>2 (Member + 1 Dependent)</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div>
                    <p className="text-muted-foreground">Charges per Day</p>
                    <p>$100</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Discount (%)</p>
                    <p>10%</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div>
                    <p className="text-muted-foreground">Total Charges</p>
                    <p>$3,000</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Payment Status</p>
                    <p>Paid</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div>
                    <p className="text-muted-foreground">Entry Fees</p>
                    <p>$100</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium">Biometric</h2>
                <div className="mt-4">
                  <p className="text-muted-foreground">Biometric</p>
                  <p>Fingerprint</p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowDialog(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function Trash2Icon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}

export default WithLayout(Customers);
