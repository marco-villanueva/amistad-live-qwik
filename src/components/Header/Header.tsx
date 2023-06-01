import { component$ } from "@builder.io/qwik";
import { NavBar } from "../NavBar/NavBar";

export const Header = component$(() => {
  return (
    <>
      <NavBar />
    </>
  )
});