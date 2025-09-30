import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-white relative h-dvh text-shadow-black/30 text-shadow-lg "   // use h-dvh it's mobile friendly and always prefer dvh * dvw instead of vh & vw  |  /30 used after colour for tellign opacity 
    >


      <div className="hero-scene sticky pointer-events-none top-0 h-dvh w-full ">

        {/* Canvas goes here  */}
      </div>

      <div className="hero-content absolute insert-x-0 top-0 h-dvh ">

        <PrismicRichText field={slice.primary.heading} /> 
        <PrismicRichText field={slice.primary.body} />

        <button className="font-bold-slanted group italic flex w-fit cursor-pointer items-center gap-1 rounded bg-[#01A7E1] px-3 py-1 text-2xl uppercase transition disabled:grayscale ">
          {slice.primary.buy_button_text}
          <span className="group-hover:translate-x-1  transition ">{">"}</span>    {/* // group-hover:translate-x-1 need parent class in which have group so it basically shift this > to right side little bit in x-1  & transition to make the animaton smooth */}
        </button>

      </div>
      
    </section>
  );
};

export default Hero;
