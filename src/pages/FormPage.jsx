'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Form, useForm } from 'react-hook-form';
import { z } from 'zod';
import CardInput from '@/components/CardInput';
import { cards } from '@/index';
import { useState } from 'react';
import { formSchema } from '@/lib/schema';


export default function ProfileForm() {
  const [currentCard, setCurrentCard] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

 


  return (
    <form className="grid place-items-center mt-16 mx-4">
      <CardInput
      control={control}
      watch={watch}
        cardInfo={cards[currentCard]}
        currentCard={currentCard}
        register={register}
        trigger={trigger}
        setCurrentCard={setCurrentCard}
        errors={errors}
        reset={reset}
        handleSubmit={handleSubmit}
      />
      
    </form>
  );
}
{
  /*
   <Card className="mt-[190px] mx-[287px] rounded-xl max-w-[913px] h-[516px] px-[140px] py-[90px] text-white z-10 bg-gray-100 bg-opacity-25 absolute">
      <CardHeader className="p-0 ">
        <CardTitle
          style={{ fontFamily: "Work Sans, sans-serif", fontWeight: 600 }}
          className="text-[38px] mb-[10px]"
        >
          ARE YOU THE TEAM LEADER? *
        </CardTitle>
        <CardDescription
          style={{ fontFamily: "IBM Plex Mono, sans-serif", fontWeight: 600 }}
          className="text-wrap text-[20px]"
        >
          The team leader get to create their team then share the registration
          link with their fellow members.
        </CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="team"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup defaultValue="comfortable" className=" pl-[50px] pt-[25px]">
                    <div className="flex items-center space-x-2 text-center pb-[10px]">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1" className="text-[20px] pl-[15px]">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2 text-center pb-[10px]">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2" className="text-[20px] pl-[15px]">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="compact" id="r3" />
                      <Label htmlFor="r3" className="text-[20px] pl-[15px]">I don't have a team</Label>
                    </div>
                  </RadioGroup> 
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#00B5E2] rounded-xl font-medium px-[22px] py-[10px] text-[16px] border-0 hover:bg-[#00B5E2]"
            >
              <div className="flex items-center">
                <span className="mr-[5px]">Next</span> <img src={FrameArrow} />
              </div>
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  
  */
}
