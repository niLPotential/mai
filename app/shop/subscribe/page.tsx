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
    <div className="flex justify-center gap-5">
      <Card>
        <CardHeader>
          <CardTitle>Free Tier</CardTitle>
          <CardDescription>Allows for 10 requests per week</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Free Content 1</p>
          <p>Free Content 2</p>
          <p>Free Content 3</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Paid Tier</CardTitle>
          <CardDescription>Allows for 100 requests per week</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Paid Content 1</p>
          <p>Paid Content 2</p>
          <p>Paid Content 3</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
