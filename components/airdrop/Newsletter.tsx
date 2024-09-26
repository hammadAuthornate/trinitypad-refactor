"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
// import PrimaryBtn from "../../ui/buttons/primary-btn";
// import { addAMail4NewsLetter } from "@/firebase/firestore/newsletter";
// import { SpinnerBtn } from "@/components/ui/spinner/spinner-btn";
// import { useNotify } from "@/components/ui/toast/notify";
// import { useMutation } from "@tanstack/react-query";
// import { useSubmitNewsletterEmail } from "@/firebase/firestore/queries/newsletter-queries";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { Loader } from "lucide-react";

export default function NewsletterComp() {
  const [email, setEmail] = useState("");
  //   const { mutate: submitMail, isPending } = useSubmitNewsletterEmail();
  return (
    <section data-aos="flip-left" className="my-20">
      <div className="gradient-trinity-border flex h-auto flex-row items-center justify-start rounded-[20px] !border-2 md:mx-auto md:max-w-[1000px]">
        <div className="bg-newsletter flex w-full flex-row justify-between rounded-[20px] max-md:mx-4 max-md:flex-col-reverse max-md:items-center md:px-[4%]">
          <div className="max-w-[500px] flex-col p-6 md:w-3/5 md:items-center md:justify-center">
            <h3 className="font-bold md:text-start">
              <span className="text-blue-gradient">Sign up</span> for our
              newsletter and get the latest news and updates.
            </h3>
            <div className="relative mt-6">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="relative"
                type="email"
              />
              <Button
                // onClick={() => submitMail({ email: email })}
                className="right-2 top-1 mx-auto rounded-xl bg-btn-gradient text-foreground max-md:mt-1 md:absolute"
              >
                {/* {isPending && <Loader className="animate-spin mr-2" />} */}
                <p>Subscribe</p>
              </Button>
            </div>
          </div>
          <div className="flex items-end justify-center max-md:mt-1 md:w-2/5">
            <Image
              src="/assets/logo-icon.png"
              width={100}
              height={100}
              alt="bg-newsletter"
              className="md:h-5/6 md:w-3/4 md:translate-y-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
