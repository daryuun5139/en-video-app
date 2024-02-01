import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {};

const RelateWordBox = (props: Props) => {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>WORD LIST</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-[350px] gap-5 p-2 text-xl underline">
            <p className="py-1">apple</p>
            <p>orange</p>
            <p>banana</p>
            <p>egg</p>
            <p>toast</p>
            <p>milk</p>
            <p>water</p>
            <p>hamburger</p>
          </ScrollArea>
        </CardContent>
      </Card>
    </>
  );
};

export default RelateWordBox;
