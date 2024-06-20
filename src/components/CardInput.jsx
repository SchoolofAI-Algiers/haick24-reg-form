import React, { useState, useEffect } from 'react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import FrameArrow from '../assets/FrameArrow.png';
import { Label } from './ui/label';
import { cards } from '../index';
import { useController } from 'react-hook-form';
import { Loader } from '@/lib/Loader';

const cardLength = cards.length;

export default function CardInput({
  cardInfo,
  currentCard,
  control,
  register,
  errors,
  formData,
  handleNext,
  handlePrev,
  setValue,
  isLoading,
  message,
  setFormData
}) {
  const { field } = useController({
    name: cardInfo.field,
    control
  });

  const handleRangeChange = (e) => {
    setValue(cardInfo.field, e.target.value);
    console.log(field.name, e.target.value);
    setFormData({
      ...formData,
      [field.name]: e.target.value,
    });
  };

  const handleChange = (value) => {
    setValue(cardInfo.field, value);
    console.log(field.name, value);
    setFormData({
      ...formData,
      [field.name]: value,
    });
  };

  const handleTextChange = (e) => {
    setFormData({
      ...formData,
      [field.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let newValues = formData[cardInfo.field] || [];

    if (checked) {
      newValues = [...newValues, value];
    } else {
      newValues = newValues.filter((v) => v !== value);
    }
    setFormData({
      ...formData,
      [cardInfo.field]: newValues,
    });
  };

  return (
    <Card className="cardBg max-w-3xl w-full rounded-xl px-4 lg:px-8 text-white z-10 py-12 relative">
      {isLoading && <Loader />}
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
        {cardInfo.type === 'card_select' ? (
          <div className="mt-6 ml-8">
            <RadioGroup
              value={formData[field.name] || null}
              onValueChange={handleChange}
            >
              {cardInfo.options.map((op, index) => (
                <div key={index} className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value={op} id={op} />
                  <Label htmlFor={op} className="text-lg">
                    {op}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ) : cardInfo.type === 'checkbox_group' ? (
          <div className="mt-6 ml-8 flex flex-col">
            {cardInfo.options.map((op, index) => (
              <div key={index} className="space-x-4 custom-checkbox">
                <input
                  type="checkbox"
                  value={op}
                  id={op}
                  className='mt-3'
                  checked={formData[cardInfo.field]?.includes(op) || false}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                <Label htmlFor={op} className="text-lg">
                  {op}
                </Label>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {cardInfo.type === 'range' ? (
              <input
                type="range"
                min={0}
                max={10}
                value={formData[field.name] ?? 0}
                id={cards[currentCard].field}
                {...register(cards[currentCard].field)}
                onChange={handleRangeChange}
                className="border-0 border-b-2 w-full my-6 bg-transparent py-2 outline-none"
              />
            ) : (
              (cardInfo.field == "motivation" || cardInfo.field=="experience") ? <textarea rows={7} cols={10} onChange={handleTextChange} className="border-0 border-b-2 w-full my-6 bg-transparent py-2 outline-none" placeholder={cardInfo.placeholder} /> :
              <input
                type={cards[currentCard].type}
                value={formData[cardInfo.field] ?? ""}
                id={cards[currentCard].field}
                {...register(cards[currentCard].field, { required: 'This field is required' })}
                onChange={handleTextChange}
                placeholder={cardInfo.placeholder}
                className="border-0 border-b-2 w-full my-6 bg-transparent py-2 outline-none"
              />
            )}
          </div>
        )}
        {errors[cards[currentCard].field]?.message && (
          <p className="mt-2 mb-4 text-md text-red-400">
            {errors[cards[currentCard].field]?.message}
          </p>
        )}
      </div>
      {message.includes("wrong") ? <span className="text-red-500 font-bold">{message}</span> : <span className="text-primary font-bold">{message}</span>}
      <CardFooter className={`flex items-center mt-12 ${currentCard !== 0 ? 'justify-between' : 'justify-end'}`}>
        {currentCard !== 0 && (
          <Button
            className="bg-[#00B5E2] rounded-xl font-medium px-[22px] py-[10px] text-[16px] border-0 hover:bg-[#00B5E2] flex items-center justify-center"
            onClick={handlePrev}
          >
            <span className="mr-[5px]"><img className="inline-block rotate-180" src={FrameArrow} /> Back </span>
          </Button>
        )}
        {currentCard !== cardLength && (
          <Button
            type="button"
            onClick={handleNext}
            className="bg-[#00B5E2] rounded-xl font-medium px-[22px] py-[10px] border-0 hover:bg-[#00B5E2] flex items-center justify-center"
          >
            <span className="text-[16px]">{currentCard === cards.length - 1 ? "Submit" : "Next"} <img className="inline-block" src={FrameArrow} /></span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
