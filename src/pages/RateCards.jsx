import WithLayout from "@/components/layout/WithLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function RateCards() {
  const [memberships, setMemberships] = useState([
    {
      name: "Gold",
      annualRate: 99.99,
      offers: [
        { name: "Early Access", discount: 10 },
        { name: "Priority Support", discount: 15 },
      ],
    },
    {
      name: "Platinum",
      annualRate: 199.99,
      offers: [
        { name: "Early Access", discount: 15 },
        { name: "Priority Support", discount: 20 },
        { name: "Exclusive Events", discount: 25 },
      ],
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newMembership, setNewMembership] = useState({
    name: "",
    annualRate: 0,
    offers: [],
  });
  const [newOffer, setNewOffer] = useState({
    name: "",
    discount: 0,
  });
  const addOffer = () => {
    setNewMembership({
      ...newMembership,
      offers: [...newMembership.offers, newOffer],
    });
    setNewOffer({ name: "", discount: 0 });
  };
  const removeOffer = (index) => {
    const updatedOffers = [...newMembership.offers];
    updatedOffers.splice(index, 1);
    setNewMembership({ ...newMembership, offers: updatedOffers });
  };
  const createMembership = () => {
    setMemberships([...memberships, newMembership]);
    setShowModal(false);
    setNewMembership({ name: "", annualRate: 0, offers: [] });
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Membership Rate Cards</h1>
        <Button onClick={() => setShowModal(true)}>Create Membership</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memberships.map((membership, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{membership.name}</CardTitle>
              <CardDescription>
                Annual Rate: ${membership.annualRate}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {membership.offers.map((offer, offerIndex) => (
                  <div
                    key={offerIndex}
                    className="flex justify-between items-center"
                  >
                    <div>{offer.name}</div>
                    <div>{offer.discount}% off</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create Membership</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newMembership.name}
                onChange={(e) =>
                  setNewMembership({ ...newMembership, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="annualRate">Annual Rate</Label>
              <Input
                id="annualRate"
                type="number"
                value={newMembership.annualRate}
                onChange={(e) =>
                  setNewMembership({
                    ...newMembership,
                    annualRate: parseFloat(e.target.value),
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Offers</Label>
              <div className="space-y-2">
                {newMembership.offers.map((offer, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Input
                      value={offer.name}
                      onChange={(e) => {
                        const updatedOffers = [...newMembership.offers];
                        updatedOffers[index].name = e.target.value;
                        setNewMembership({
                          ...newMembership,
                          offers: updatedOffers,
                        });
                      }}
                    />
                    <Input
                      type="number"
                      value={offer.discount}
                      onChange={(e) => {
                        const updatedOffers = [...newMembership.offers];
                        updatedOffers[index].discount = parseFloat(
                          e.target.value
                        );
                        setNewMembership({
                          ...newMembership,
                          offers: updatedOffers,
                        });
                      }}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeOffer(index)}
                    >
                      {/* <Icon prompt="Trash" className="w-4 h-4" /> */}
                    </Button>
                  </div>
                ))}
                <div className="flex items-center gap-4">
                  <Input
                    value={newOffer.name}
                    onChange={(e) =>
                      setNewOffer({ ...newOffer, name: e.target.value })
                    }
                    placeholder="Offer Name"
                  />
                  <Input
                    type="number"
                    value={newOffer.discount}
                    onChange={(e) =>
                      setNewOffer({
                        ...newOffer,
                        discount: parseFloat(e.target.value),
                      })
                    }
                    placeholder="Discount %"
                  />
                  <Button variant="ghost" size="icon" onClick={addOffer}>
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button onClick={createMembership}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default WithLayout(RateCards);
