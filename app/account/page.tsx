import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardValues = {
  id: number;
  value: string;
  trigger: string;
  title: string;
  description: string;
  content: string;
};

const cardValues: CardValues[] = [
  {
    id: 1,
    value: "profile",
    trigger: "Profile",
    title: "Welcome, {name}",
    description: "Manage your account Info",
    content: "email, password, phone number etc.",
  },
  {
    id: 2,
    value: "tokens-payments",
    trigger: "Tokens/Payments",
    title: "You currently have {tokens.count} tokens",
    description: "Manage your tokens and payment methods",
    content: "link to shop, card info etc.",
  },
  {
    id: 3,
    value: "library",
    trigger: "Library",
    title: "You currently have {music.count} in your library",
    description: "Manage music in your library",
    content: "music list, link to human composer etc.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Tabs
        defaultValue="profile"
        className="flex flex-col items-center justify-center"
      >
        <TabsList>
          {cardValues.map((card) => (
            <TabsTrigger value={card.value} key={card.id}>
              {card.trigger}
            </TabsTrigger>
          ))}
        </TabsList>
        {cardValues.map((card) => (
          <TabsContent value={card.value} key={card.id}>
            <Card>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{card.content}</p>
              </CardContent>
              <CardFooter>
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
