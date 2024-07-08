import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import WithLayout from "@/components/layout/WithLayout";

function CreateOrganization() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Create New Organization</CardTitle>
        <CardDescription>
          Fill out the details to create a new organization.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div>
            <div className="mb-4">
              <Label htmlFor="name">Organization Name</Label>
              <Input id="name" placeholder="Enter organization name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Enter address" />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="Enter state" />
              </div>
              <div>
                <Label htmlFor="pincode">Pincode</Label>
                <Input id="pincode" type="number" placeholder="Enter pincode" />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <Label htmlFor="membership">Membership</Label>
              <Select id="membership">
                <SelectTrigger>
                  <SelectValue placeholder="Select membership" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="tenure">Membership Tenure</Label>
              <Select id="tenure">
                <SelectTrigger>
                  <SelectValue placeholder="Select tenure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 year</SelectItem>
                  <SelectItem value="2">2 years</SelectItem>
                  <SelectItem value="3">3 years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <Label>Add Members</Label>
              <div className="grid gap-2">
                <div className="flex items-center gap-4">
                  <Input
                    type="text"
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                  />
                </div>
                {[
                  { name: "John Doe", email: "john@example.com" },
                  { name: "Jane Lim", email: "jane@example.com" },
                  { name: "Sarah Mayer", email: "sarah@example.com" },
                ]
                  .filter((member) =>
                    member.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((member, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>
                          {member.name.charAt(0)}
                          {member.name.charAt(1)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {member.email}
                        </p>
                      </div>
                      <Checkbox id={`member-${index}`} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="ml-auto">
          Create Organization
        </Button>
      </CardFooter>
    </Card>
  );
}

export default WithLayout(CreateOrganization);
