import { useState, useMemo } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import WithLayout from "@/components/layout/WithLayout";
import { DateRangePicker } from "@/components/ui/dateRangePicker";

function Reports() {
  const [filterType, setFilterType] = useState("all");
  const [balanceFilter, setBalanceFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState(null);
  const reports = [
    {
      id: 1,
      name: "John Doe",
      type: "Member",
      balance: 50.0,
      visitDate: "2023-06-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      type: "Valued Customer",
      balance: -25.0,
      visitDate: "2023-06-02",
    },
    {
      id: 3,
      name: "Bob Johnson",
      type: "Walk-in Customer",
      balance: 100.0,
      visitDate: "2023-06-01",
    },
    {
      id: 4,
      name: "Alice Williams",
      type: "Complementary Access",
      balance: 0.0,
      visitDate: "2023-06-03",
    },
    {
      id: 5,
      name: "Tom Davis",
      type: "Member",
      balance: -10.0,
      visitDate: "2023-06-02",
    },
    {
      id: 6,
      name: "Sara Wilson",
      type: "Member",
      balance: 75.0,
      visitDate: "2023-06-03",
    },
  ];
  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      if (filterType !== "all" && report.type !== filterType) {
        return false;
      }
      if (balanceFilter === "low" && report.balance >= 0) {
        return false;
      }
      if (balanceFilter === "negative" && report.balance >= 0) {
        return false;
      }
      if (dateFilter && report.visitDate !== dateFilter) {
        return false;
      }
      return true;
    });
  }, [filterType, balanceFilter, dateFilter]);
  const handleExport = () => {
    console.log("Exporting report data to Excel...");
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">Reports</h1>
      </div>
      <div className="grid grid-cols-4 gap-6 mb-20">
        <div className="space-y-2">
          <Label htmlFor="filter-type">Entry Type:</Label>
          <Select
            id="filter-type"
            value={filterType}
            onValueChange={(e) => setFilterType(e.target.value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select entry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Member">Member</SelectItem>
              <SelectItem value="Walk-in Customer">Walk-in Customer</SelectItem>
              <SelectItem value="Valued Customer">Valued Customer</SelectItem>
              <SelectItem value="Complementary Access">
                Complementary Access
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="balance-filter">Balance:</Label>
          <Select
            id="balance-filter"
            value={balanceFilter}
            onValueChange={(e) => setBalanceFilter(e.target.value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select balance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="low">Low Balance</SelectItem>
              <SelectItem value="negative">Negative Balance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="date-filter">Visit Date:</Label>
          <DateRangePicker />
        </div>
        <div className="flex items-end ml-5">
          <Button variant="outline" onClick={handleExport}>
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export to Excel
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Visit Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell
                  className={`font-medium ${
                    report.balance < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  ${report.balance.toFixed(2)}
                </TableCell>
                <TableCell>{report.visitDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function CalendarClockIcon(props) {
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
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.3V14" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  );
}

function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

export default WithLayout(Reports);
