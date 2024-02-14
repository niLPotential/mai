"use client";

import { Tab } from "@headlessui/react";

export default function Page() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Profile</Tab>
        <Tab>Current</Tab>
        <Tab>Library</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>profile</Tab.Panel>
        <Tab.Panel>current</Tab.Panel>
        <Tab.Panel>library</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
