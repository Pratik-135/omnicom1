"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordian = () => {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger className=" text-lg ">
          <div className="flex justify-items-center">
            <img src="/card-1.svg" alt="" />
            Accordion Title
          </div>
        </AccordionTrigger>

        <AccordionContent className=" text-left text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error, beatae?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg ">
          <div className="flex justify-items-center pr-5">
            <img src="/card-1.svg" alt="" />
            <p className="pr-5">Accordian Title</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-left text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          beatae?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg">
          <div className="flex justify-items-center">
            <img src="/card-1.svg" alt="" />
            Accordian Title
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-left text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          beatae?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg ">
          <div className="flex justify-items-center ">
            <img src="/card-1.svg" alt="" />
            Accordian Title
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-left text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error, beatae?
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default accordian;
