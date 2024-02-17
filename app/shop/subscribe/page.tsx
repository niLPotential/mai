import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Free Tier</CardTitle>
        <CardDescription>Allows for 10 requests per week</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content 1</p>
        <p>Card Content 2</p>
        <p>Card Content 3</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
