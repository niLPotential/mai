"use client";

import { useState } from "react";
import { CornerDownLeft, MoreVertical, Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import LogoLong from "/public/logo_long.png";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [
      {
        role: "bot",
        content:
          "안녕하세요. MAI 입니다. 저희는 사용자가 요청하신것에 따라 신속하고 빠르게 자신이 원하는 음악을 만들어드려요. 저는 사용자님의 의견을 존중하고, 사용자님의 창의력을 도와드리기 위해 최선을 다하겠습니다.",
      },
      {
        role: "bot",
        content: "먼저, 어떤 음악에 용도로 사용 하실건가요?",
      },
      {
        role: "user",
        content: "뮤지컬",
      },
      {
        role: "bot",
        content:
          "작품내용이 있나요? 작품내용이 있으시다면 알려주세요! 해당하는 음악의 작품 내용을 잘 이해할 수 록 원하는 음악을 퀄리티있게 만들수 있습니다.",
      },
      {
        role: "user",
        content:
          "작품 제목은 ‘잠김ʼ 입니다. 작품에서 주인공이 경계심이 많고 부정적인 상태이며 잠긴 문을 열고 싶어하지만 상처를 많이 받은 캐릭터라서 주인공은 행동 하나하나가 조심스럽습니다.",
      },
      {
        role: "bot",
        content: "몇 분 정도의 음악이 필요하시나요?",
      },
      {
        role: "user",
        content: "3분",
      },
      {
        role: "bot",
        content: "음악의 BPM(느리기,빠르기)은 어떻게 정할까요?",
      },
      {
        role: "user",
        content: "느리게",
      },
      {
        role: "bot",
        content:
          "음악의 분위기를 알려주세요. 해당하는 음악의 작품 내용을 잘 이해할수록 원하는 음악을 퀄리티있게 만들 수 있습니다.",
      },
      {
        role: "user",
        content: "안개가 자욱하지만 그 안에 작은 빛이 나오는 듯한 느낌",
      },
    ],
  );

  const [input, setInput] = useState("");
  const inputLength = input.trim().length;

  return (
    <div className="flex flex-col items-center gap-5">
      <Image src={LogoLong} alt="M:AI Music" width={500} />
      <Card className="md:w-1/2">
        <CardHeader className="flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <CornerDownLeft />
            <Avatar>
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
          <MoreVertical />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-2",
                  message.role === "user" ? "flex-row-reverse" : "flex-row",
                )}
              >
                {message.role === "user" ? (
                  <Avatar>
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ) : (
                  <Bot size={36} />
                )}

                <div
                  className={cn(
                    "flex w-max max-w-[75%] items-center rounded-lg px-3 py-2 align-middle text-sm",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted",
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (inputLength === 0) return;
              setMessages([
                ...messages,
                {
                  role: "user",
                  content: input,
                },
              ]);
              setInput("");
            }}
            className="flex w-full items-center space-x-2"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button type="submit" disabled={inputLength === 0}>
              <Send />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
