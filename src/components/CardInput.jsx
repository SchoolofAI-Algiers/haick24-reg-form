'use client';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import FrameArrow from '../assets/FrameArrow.png';
import { Label } from './ui/label';
import { cards } from '..';
import { useController } from 'react-hook-form';
const cardLength = cards.length;

export default function CardInput({
  cardInfo,
  control,
  watch,
  currentCard,
  setCurrentCard,
  trigger,
  register,
  reset,
  errors,
  handleSubmit,
}) {

  const formData = watch()
  const {field} = useController({
    name : cardInfo.field,
    control
  })
  function processForm(data) {
    console.log("wiiii8")
    console.log(data);
  }
  const next = async (e) => {
    e.preventDefault()
    handleSubmit(processForm)()
    const fields = [cards[currentCard].field];
    const output = await trigger(fields, { shouldFocus: true });
    console.log(field,output)
    if (!output) return;
    if (field.name == "isTeamLeader" && field.value == "Yes"){
      setCurrentCard(prev => prev + 2)
    }
    if(currentCard == 1){
      setCurrentCard(4)
    }
    if (currentCard < cards.length - 1) {
      setCurrentCard((step) => step + 1);
    }else{
      handleSubmit(processForm)()
    }
    reset();
  };

  const prev = (e) => {
    e.preventDefault()
    if (currentCard > 0) {
      setCurrentCard((step) => step - 1);
    }
  };

  return (
    <Card className="cardBg max-w-3xl w-full rounded-xl px-4 lg:px-8 text-white z-10 py-16">
      
      <CardHeader className="p-0">
        <CardTitle
          style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: 600 }}
          className="text-2xl xl:text-3xl mb-[10px] uppercase"
        >
          {cardInfo.title}
        </CardTitle>
        <CardDescription
          style={{ fontFamily: 'IBM Plex Mono, sans-serif', fontWeight: 200 }}
          className="text-wrap text-lg font-thin tracking-wider"
        >
          {cardInfo.label}
        </CardDescription>
      </CardHeader>
      <div>
        {cardInfo.type == 'card_select' ? (
          <div className="mt-6 ml-8">
            <RadioGroup
            value={field.value}
            onChange = {field.onChange}
                     >
              {cardInfo.options.map((op, index) => (
                <div key={index} className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem
                    
                    value={op}
                    id={op}
                  />
                  <Label htmlFor={op} className="text-lg">
                    {op}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ) : (
          <div>
            {
              cardInfo.type == "range" ? 
            
              <input
              type={"range"}
             min={0}
             max={10}
              id={cards[currentCard].field}
              {...register(cards[currentCard].field)}
              className="border-0 border-b-2 w-full my-6 bg-transparent py-2 outline-none"
            />
            :  <input
            type={cards[currentCard].type}
              
            id={cards[currentCard].field}
            {...register(cards[currentCard].field)}
            className="border-0 border-b-2 w-full my-6 bg-transparent py-2 outline-none"
          />}
          </div>
        )}
        {errors[cards[currentCard].field]?.message && (
          <p className="mt-2 mb-4 text-md text-red-400">
            {errors[cards[currentCard].field]?.message}
          </p>
        )}
      </div>
      {
        <CardFooter
          className={`flex items-center mt-12 ${
            currentCard != 0 || currentCard != cardLength
              ? 'justify-between'
              : currentCard == 0
              ? 'justify-end'
              : 'justify-start'
          }`}
        >
          {currentCard != 0 && (
            <Button
              className="bg-[#00B5E2] rounded-xl font-medium px-[22px] py-[10px] text-[16px] border-0 hover:bg-[#00B5E2] flex items-center justify-center"
              onClick={prev}
            >
              
                <span className="mr-[5px]">Back <img className='inline-block' src={FrameArrow} /></span> 
            
            </Button>
          )}
          {currentCard != cardLength && (
            <Button
            type="button"
              onClick={next}
              className="bg-[#00B5E2] rounded-xl font-medium px-[22px] py-[10px] border-0 hover:bg-[#00B5E2] flex items-center justify-center "
            >
              
                <span className="text-[16px]">{currentCard == cards.length - 1 ? "Submit" : "Next" } <img className='inline-block' src={FrameArrow} /></span> 
             
            </Button>
          )}
        </CardFooter>
      }
    </Card>
  );
}
