import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type menu } from "~/interfaces/navbar-interface";
import { Link } from "@builder.io/qwik-city";

export const DesktopMenu = component$<menu>(({ sections, activePath }) => {
  useVisibleTask$(({ track }) => {
    track(() => activePath);


  });

  return (
    <div class="navbar bg-base-100">
      <div class="mr-8">
        <img src="/images/logo.png" />
      </div>
      {sections.map(item => (
        <Link
          key={item.pathname}
          href={item.pathname}
          class="ml-8"
        >
          <span
            class={
              `btn btn-ghost uppercase text-xl ${activePath === item.pathname ? 'btn-active' : ''}`}
          >
            {item.label}
          </span>
        </Link>
      )
      )}
    </div>
  )
});