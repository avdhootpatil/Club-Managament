import WithLayout from "@/components/layout/WithLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

function CreateEntry() {
  const [entryType, setEntryType] = useState("valued-customer");
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Create Club Entry</h1>
      <p className="text-muted-foreground mb-8">
        Fill out the form to create a new club entry.
      </p>

      <form className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="entry-type">Entry Type</Label>
          <Select
            id="entry-type"
            value={entryType}
            onValueChange={setEntryType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select entry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="valued-customer">Valued Member</SelectItem>
              <SelectItem value="accompanying-guest">
                Accompanying Guest
              </SelectItem>
              <SelectItem value="walk-in-customer">Walk-in Customer</SelectItem>
              <SelectItem value="hotel-guest">Hotel Guest</SelectItem>
              <SelectItem value="complementary-access">
                Complementary Access
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* <hr className="my-4 border-t border-gray-200" /> */}
        {entryType === "valued-customer" && (
          <div>
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
                    <div className="text-muted-foreground">
                      john@example.com
                    </div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-muted-foreground">
                      +1 (555) 555-5555
                    </div>
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
                            <div className="text-xs text-muted-foreground">
                              Child
                            </div>
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
        )}
        {entryType === "accompanying-guest" && (
          <div>
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
                    <div className="text-3xl font-bold">
                      Balance: ₹ 1,20,000
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 grid gap-6">
                  <div className="grid gap-1">
                    <div className="text-sm font-medium">Name</div>
                    <div className="text-lg font-semibold">John Doe</div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-muted-foreground">
                      john@example.com
                    </div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium">Phone</div>
                    <div className="text-muted-foreground">
                      +1 (555) 555-5555
                    </div>
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
                            <div className="text-xs text-muted-foreground">
                              Child
                            </div>
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
              <Input
                id="credit-points"
                type="number"
                placeholder="Enter Entry Fee"
              />
            </div>
          </div>
        )}
        {entryType === "walk-in-customer" && (
          <div>
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
                <Label htmlFor="admin-card">Amount</Label>
                <Input id="admin-card" placeholder="Enter amount" />
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
              <div className="space-y-2">
                <Label htmlFor="admin-access" className="mr-5">
                  Grant Access
                </Label>
                <Checkbox id="admin-access" />
              </div>
            </div>
          </div>
        )}
        {entryType === "hotel-guest" && (
          <div className="grid gap-2">
            <div className="space-y-2">
              <Label htmlFor="room-number">Room Number</Label>
              <Input
                id="room-number"
                type="number"
                placeholder="Enter room number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bill-amount">Entry Fee</Label>
              <Input
                id="bill-amount"
                type="number"
                placeholder="Enter entry fee"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-access" className="mr-5">
                Grant Access
              </Label>
              <Checkbox id="admin-access" />
            </div>
          </div>
        )}
        {entryType === "complementary-access" && (
          <div>
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
            <div className="grid gap-2">
              <div className="space-y-2">
                <Label htmlFor="access-reason">
                  Reason for Complementary Access
                </Label>
                <Textarea id="access-reason" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-access" className="mr-5">
                  Grant Access
                </Label>
                <Checkbox id="admin-access" />
              </div>
            </div>
          </div>
        )}
      </form>

      <Button type="submit" className="w-full my-5">
        Grant Access
      </Button>
    </div>
  );
}

export default WithLayout(CreateEntry);
