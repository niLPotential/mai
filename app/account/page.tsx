import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="tokens-payments">Tokens/Payments</TabsTrigger>
        <TabsTrigger value="library">Library</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">Name, Account info etc.</TabsContent>
      <TabsContent value="tokens-payments">
        Tokens, Subscription etc.
      </TabsContent>
      <TabsContent value="library">Library of generated music</TabsContent>
    </Tabs>
  );
}
