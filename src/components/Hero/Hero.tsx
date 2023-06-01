import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface HeroProps {
  url?: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonUrl?: string;
}

export const Hero = component$<HeroProps>(({ url, title, subtitle, buttonText, buttonUrl }) => {
  const heroStyle = {
    backgroundImage: url ? `url(${url})` : 'none',
    backgroundColor: url ? '' : '#fff',
  };

  return (
    <div class="hero min-h-screen" style={heroStyle}>
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">{title}</h1>
          <p class="mb-5">{subtitle}</p>
          {buttonUrl && <Link href={buttonUrl}>
            <button class="btn btn-primary">{buttonText}</button>
          </Link>}
        </div>
      </div>
    </div>
  );
});