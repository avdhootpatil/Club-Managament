import WithLayout from "@/components/layout/WithLayout";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

function Organizations() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);

  const navigate = useNavigate();
  const organizations = useMemo(
    () =>
      [
        {
          name: "Acme Inc",
          members: 25,
          creditPoints: 10000,
          membershipName: "Premium",
        },
        {
          name: "Globex Corporation",
          members: 50,
          creditPoints: 25000,
          membershipName: "Enterprise",
        },
        {
          name: "Wayne Enterprises",
          members: 15,
          creditPoints: 5000,
          membershipName: "Standard",
        },
        {
          name: "Stark Industries",
          members: 30,
          creditPoints: 15000,
          membershipName: "Premium",
        },
        {
          name: "Umbrella Corporation",
          members: 20,
          creditPoints: 8000,
          membershipName: "Standard",
        },
      ]
        .filter((org) => org.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name)),
    [search]
  );
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Organizations</h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-xl">
          <Input
            type="search"
            placeholder="Search organizations..."
            className="w-full rounded-lg bg-background pl-8"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <Button
          className="ml-4"
          onClick={() => {
            navigate("/create-organization");
          }}
        >
          Create New Organization
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Organization Name</TableHead>
              <TableHead>Members</TableHead>
              <TableHead>Credit Points</TableHead>
              <TableHead>Membership</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {organizations.map((org) => (
              <TableRow key={org.name}>
                <TableCell className="font-medium">{org.name}</TableCell>
                <TableCell>{org.members}</TableCell>
                <TableCell>{org.creditPoints.toLocaleString()}</TableCell>
                <TableCell>{org.membershipName}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MenuIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
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

export default WithLayout(Organizations);
