"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";

import Content from "@/components/content";
import useMediaQuery from "@/hooks/useMediaQuery";
import classNames from "classnames";

const Tab = () => {
  const tablet = useMediaQuery("(max-width: 1024px)");
  const [activeTab, setActiveTab] = useState("1");

  const abs = tablet
    ? "static"
    : "!absolute bottom-0 w-full left-0 translate-y-[100%]";

  return (
    <Tabs defaultValue="1" className="relative">
      <TabsList className="grid gap-4 lg:grid-cols-4">
        <TabsTrigger value="1" className="bg-white">
          <Card src="1" />
          <div className={classNames(abs)}>
            <TabsContent value="1">
              <Content title="Product 1" img="1" />
            </TabsContent>
          </div>
        </TabsTrigger>
        <TabsTrigger value="2">
          <Card src="2" />
          <div className={classNames(abs)}>
            <TabsContent value="2">
              <Content title="Product 2" />
            </TabsContent>
          </div>
        </TabsTrigger>
        <TabsTrigger value="3">
          <Card src="3" />
          <div className={classNames(abs)}>
            <TabsContent value="3">
              <Content title="Product 3" />
            </TabsContent>
          </div>
        </TabsTrigger>
        <TabsTrigger value="4">
          <Card src="4" />
          <div className={classNames(abs)}>
            <TabsContent value="4">
              <Content title="Product 4" />
            </TabsContent>
          </div>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default Tab;
