import WithLayout from "@/components/layout/WithLayout";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarClockIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

function CreateMember() {
  const plans = [
    {
      name: "Basic",
      people: 4,
      chargesPerEntry: 10,
      days: 30,
      totalCharges: 600,
      discount: 10,
      totalChargesAfterDiscount: 540,
      netFeePerEntry: 9,
      startDate: "2024-07-01",
      endDate: "2024-07-30",
      balance: 30,
      status: "Expired",
    },
    {
      name: "Premium",
      people: 4,
      chargesPerEntry: 15,
      days: 60,
      totalCharges: 1800,
      discount: 15,
      totalChargesAfterDiscount: 1530,
      netFeePerEntry: 12.75,
      startDate: "2024-07-01",
      endDate: "2024-08-29",
      balance: 1400,
      status: "Active",
    },
    {
      name: "Enterprise",
      people: 4,
      chargesPerEntry: 20,
      days: 90,
      totalCharges: 5400,
      discount: 20,
      totalChargesAfterDiscount: 4320,
      netFeePerEntry: 16,
      startDate: "2024-07-01",
      endDate: "2024-09-29",
      balance: 4000,
      status: "In Queue",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isDialogOpen, setisDialogOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [totalBalance, setTotalBalance] = useState(10000);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateFilter, setDateFilter] = useState(null);

  useEffect(() => {
    if (dateFilter) {
      debugger;
      const date = new Date(dateFilter);
      setStartDate(date.toISOString().slice(0, 10));
      setEndDate(date.toISOString().slice(0, 10));
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  }, [dateFilter]);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };
  const handleCloseDialog = () => {
    setisDialogOpen(false);
  };
  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-bold mb-4">New Member Registration</h1>
      <p className="text-muted-foreground mb-8">
        Fill out the form to register a new member for the sports club.
      </p>
      <form>
        <div>
          <h2 className="text-lg font-medium mb-4">Basic Details</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Member Name</Label>
              <Input id="name" placeholder="Enter member name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Enter phone number" />
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <Label htmlFor="organization">Organization</Label>
            <Select id="organization">
              <SelectTrigger>
                <SelectValue placeholder="Select organization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="org1">Organization 1</SelectItem>
                <SelectItem value="org2">Organization 2</SelectItem>
                <SelectItem value="org3">Organization 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <hr className="my-10 " />

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Dependents</h2>
            <Button variant="outline" size="sm">
              Add Dependent
            </Button>
          </div>
          <div className="grid gap-6 mt-4">
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dependent-name">Name</Label>
                <Input id="dependent-name" placeholder="Enter name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dependent-email">Email</Label>
                <Input
                  id="dependent-email"
                  type="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dependent-phone">Phone</Label>
                <Input
                  id="dependent-phone"
                  type="tel"
                  placeholder="Enter phone"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-10 " />
        <div>
          <div className="flex justify-between">
            <h2 className="text-lg font-medium mb-5">Membership </h2>
            <Button
              onClick={(event) => {
                event.preventDefault();
                setisDialogOpen(true);
              }}
            >
              Renew
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                onClick={() => handlePlanSelection(plan)}
                className="cursor-pointer hover:bg-muted transition-colors"
              >
                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle>Balance : ₹{plan.balance}</CardTitle>
                    <Badge
                      variant="outline"
                      className={
                        index === 0
                          ? ""
                          : index === 1
                          ? `bg-green-500 text-yellow-50`
                          : `bg-yellow-500 text-yellow-50`
                      }
                    >
                      {plan.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">People:</span>
                      <span>{plan.people}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Charges per Entry:
                      </span>
                      <span>${plan.chargesPerEntry.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Days:</span>
                      <span>{plan.days}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Start Date:</span>
                      <span>{plan.startDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">End Date:</span>
                      <span>{plan.endDate}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Total Charges:
                      </span>
                      <span>${plan.totalCharges.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Discount:</span>
                      <span>{plan.discount}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Total Charges After Discount:
                      </span>
                      <span>${plan.totalChargesAfterDiscount.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Net Fee per Entry:
                      </span>
                      <span>${plan.netFeePerEntry.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="payment-status">Payment Status</Label>
              <Select id="payment-status">
                <SelectTrigger>
                  <SelectValue placeholder="Select payment status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="partial">Partial</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <hr className="my-10 " />
        <div>
          <h2 className="text-lg font-medium">Biometric</h2>
          <div className="space-y-2 mt-4">
            <Label htmlFor="biometric">Biometric</Label>
            <Input
              id="biometric"
              type="text"
              placeholder="Enter biometric details"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-10">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Create Member</Button>
        </div>
      </form>
      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-[800px]">
          <div className="grid grid-cols-7 gap-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="num-people">Number of People </Label>
              <p className="text-muted-foreground">4</p>
            </div>
            <div className="space-y-2 flex items-center">
              <Label htmlFor="num-people"> </Label>
              <p className="text-muted-foreground">X</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="charges-per-day">Charges Per Entry</Label>
              <p className="text-muted-foreground">₹ 100</p>
            </div>
            <div className="space-y-2 flex items-center">
              <Label htmlFor="num-people"> </Label>
              <p className="text-muted-foreground">X</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="days">Number of Days</Label>
              <Input
                id="days"
                type="number"
                placeholder="Enter number of days"
                value={180}
              />
            </div>
            <div className="space-y-2 flex items-center">
              <Label htmlFor="num-people"> </Label>
              <p className="text-muted-foreground">=</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="charges-per-day">Total Charges</Label>
              <p className="text-muted-foreground">₹ 72000</p>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="discount">Discount (%)</Label>
              <Input
                id="discount"
                type="number"
                placeholder="Enter discount percentage"
                value={20}
              />
            </div>
            <div className="space-y-2 flex items-center">
              <Label htmlFor="num-people"> </Label>
              <p className="text-muted-foreground"></p>
            </div>
            <div className="space-y-2 flex items-center">
              <Label htmlFor="num-people"> </Label>
              <p className="text-muted-foreground"></p>
            </div>
            <div className="space-y-2 flex items-center">
              <Label htmlFor="num-people"> </Label>
              <p className="text-muted-foreground"></p>
            </div>
            <div className="space-y-2 flex items-center">
              <Label htmlFor="num-people"> </Label>
              <p className="text-muted-foreground"></p>
            </div>
            <div className="space-y-2 flex items-center">
              <Label htmlFor="num-people"> </Label>
              <p className="text-muted-foreground">=</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="charges-per-day">
                Total Charges After Discount
              </Label>
              <p className="text-muted-foreground">₹ 57600</p>
            </div>
          </div>
          <hr className="my-4 border-t border-gray-200" />

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="total-charges">
                Net fee per entry for each person
              </Label>
              <p className="text-muted-foreground">₹ 80</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="total-charges">Amount Received</Label>
              <Input
                id="discount"
                type="number"
                placeholder="Enter discount percentage"
                value={80}
              />
            </div>
          </div>
          <hr className="my-4 border-t border-gray-200" />

          <div className="grid grid-cols-3 gap-6 mt-4">
            <div className="space-y-2">
              {/* <Label htmlFor="date-filter">Start Date:</Label> */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-[200px] justify-start">
                    {dateFilter ? dateFilter : "Select Start Date"}
                    <CalendarClockIcon className="ml-auto h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    value={dateFilter}
                    onValueChange={setDateFilter}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-filter">End Date:</Label>
              <div>12-10-2025</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4"></div>
          <DialogFooter>
            <div>
              <Button variant="outline" className="mr-5">
                Create Membership
              </Button>
              <Button variant="outline">Close</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default WithLayout(CreateMember);
