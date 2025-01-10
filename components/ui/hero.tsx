'use client';
import React, { FormEvent } from 'react';
import { buttonVariants } from '@/components/variants/button-variants';
import { alchemy_logo, arbitrum_arb_logo_full, rocket } from '@/lib/assets';
import Image from 'next/image'
import Link from 'next/link';
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";

const Hero = () => {
  function handleJoinWaitlist(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(event)
    // TODO: Send email
  }

  return (
    <section className="text-center  relative w-full h-screen bg-gradient-to-tr from-[#F78F36] from-[25%] via-white to-[#316DB5]">
      <div className='m-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full'>
        <h1 className="font-alegreya text-4xl md:text-5xl leading-tight text-center mt-24">
          Bringing AI and Blockchain,
          <br />
          Together to Spark Growth
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-gray-600">
          We connect blockchain and AI to unlock new possibilties
          and drive exponential growth for businesses and communities
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Dialog.Root>
            <Dialog.Trigger className={buttonVariants({ variant: "ghost", size: "lg", className: 'w-full sm:w-48 active:drop-shadow-none py-3 border border-black transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-[#000] hover:shadow-[0.25rem_0.25rem_#000] active:translate-x-0 active:translate-y-0 active:shadow-none' })}>
              Join Waitlist
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
              <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-[90%] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg sm:rounded-lg sm:p-6 p-4">
                <Dialog.Close className={buttonVariants({ variant: "outline", size: "sm", className: 'absolute top-4 right-4 w-16 active:drop-shadow-none py-3 border border-black transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] hover:text-white hover:shadow-[0.25rem_0.25rem_#000] hover:bg-red-500 active:translate-x-0 active:translate-y-0 active:shadow-none' })}>
                  Close
                </Dialog.Close>
                <div className="max-w-md text-center flex flex-col items-center">
                  <Image
                    src={rocket}
                    alt="Dialog Image"
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <Dialog.Title className="text-lg font-bold mb-2">Subscribe to our newsletter and stay ahead of the curve</Dialog.Title>
                  <Dialog.Description className="text-center w-full p-0">
                    Sign up today and be part of the SparkPoint innovation!
                  </Dialog.Description>
                  <Form.Root className="w-full flex flex-col items-center" onSubmit={handleJoinWaitlist}>
                    <Form.Field className="w-full" name="email">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          justifyContent: "space-between",
                          width: "100%"
                        }}
                      >


                      </div>
                      <Form.Control asChild>
                        <input className="w-full h-12 rounded-3xl text-lg border-black border text-center mt-2 sm:mt-4" type="email" required placeholder='Enter Your Email Here' />
                      </Form.Control>
                      <Form.Message className="text-sm text-red-500" match="valueMissing">
                        Please enter your email
                      </Form.Message>
                      <Form.Message className="text-sm text-red-500" match="typeMismatch">
                        Please provide a valid email
                      </Form.Message>
                    </Form.Field>
                    <Form.Submit className={buttonVariants({ variant: "outline", size: "md", className: 'w-1/2 mt-1 sm:mt-2 sm:w-24 active:drop-shadow-none py-2 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] text-white bg-black hover:bg-black hover:shadow-[0.25rem_0.25rem_#F78F36] active:translate-x-0 active:translate-y-0 active:shadow-none' })}>
                      Confirm
                    </Form.Submit>
                  </Form.Root>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <Link className={buttonVariants({ variant: "outline", size: "lg", className: 'w-full sm:w-48 active:drop-shadow-none py-3 transition-all duration-200 cursor-pointer hover:-translate-y-[0.25rem] hover:translate-x-[-0.25rem] text-white bg-black hover:bg-black hover:shadow-[0.25rem_0.25rem_#E5E7EB] active:translate-x-0 active:translate-y-0 active:shadow-none' })} href="https://x.com/sparkpointio" target='_blank'>
            Follow X @sparkpointio
          </Link>
        </div>
        <div className="mt-16 flex items-center justify-center md:gap-8 gap-4 flex-col md:flex-row">
          <p className="text-sm">Grants from:</p>
          <div className='flex items-center justify-center gap-4'>
            <Link href="https://arbitrum.io/" target='_blank' className='hover:cursor-pointer' title="Arbitrum">
              <Image
                src={arbitrum_arb_logo_full}
                alt="Arbitrum Logo"
                width={100}
                height={24}
              />
            </Link>
            <Link href="https://www.alchemy.com/" target='_blank' className='hover:cursor-pointer' title="Alchemy">
              <Image
                src={alchemy_logo}
                alt="Alchemy Logo"
                width={100}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero;