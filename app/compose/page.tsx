"use client";
import { Listbox, Switch } from "@headlessui/react";

export default function Page() {
  return (
    <form>
      <textarea></textarea>
      <input type="number" min={0} />
      <input type="number" min={0} />
      <input type="file" accept="audio/*" />
      <Listbox>
        <Listbox.Button>Open</Listbox.Button>
        <Listbox.Options>
          <Listbox.Option value={"option"}>Option</Listbox.Option>
        </Listbox.Options>
      </Listbox>

      <Switch></Switch>

      <input type="file" accept="image/*" />
    </form>
  );
}
