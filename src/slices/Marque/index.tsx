import { FC, Fragment } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { LogoMark } from "@/components/LogoMark";
import clsx from "clsx";


export type MarqueProps = SliceComponentProps<Content.MarqueSlice>;


const Marque: FC<MarqueProps> = ({ slice }) => {

  const MarqueeContent = () => (
    <div className="flex items-center bg-gray-200 py-10 whitespace-nowrap">

          {slice.primary.phrases.map((item,i) => (
            <Fragment key={i}>
              <div className="text-[180px] md:text-[260px] font-bold-slanted px-14 text-gray-400/80 leading-none uppercase [text-box:trim-both_cap_alphabetic]" >
                {item.text}
              </div>
              <LogoMark  className="size-36 flex-shrink-0"/>
            </Fragment>
          ))}
        </div>
  )

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      <div className="relatice flex w-full items-center overflow-hidden select-none" aria-hidden="true"  role="presentation">
        <div className="flex relative items-center whitespace-nowrap">
          <div className={clsx("marquee-track animate-marquee flex ", slice.primary.direction==="Right" && "[animation-direction:reverse]")}>
          {/* content to duplicate */}
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marque;
