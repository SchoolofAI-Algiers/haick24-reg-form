'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import CardInput from '@/components/CardInput';
import { cards } from '@/index';
import { formSchema } from '@/lib/schema';
import { onSubmit } from '@/lib/utils';
import Modal from '@/components/Modal.jsx';
export default function ProfileForm() {
  const [currentCard, setCurrentCard] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading,setLoading]=useState(false)
  const [message,setMessage]=useState("")
  const [showModal,setShowModal]=useState(false)
  const [isError,setIsError]=useState(false)
  const [previousCode,setPreviousCode]=useState("")
  const [modalMessage,setModalMessage]=useState("")
  const {
    register,
    trigger,
    control,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: formData,

  });

  const [theUserIsLeader,setIsLeader]=useState(false)
  const [teamCode,setTeamCode]=useState("")
  const handleNext = async (e) => {
    e.preventDefault()
    const fields = [cards[currentCard].field];
    const output = await trigger(fields);
    if(!output && !formData[cards[currentCard].field]) return;
    reset()
    if (cards[currentCard].field == "isTeamLeader" && formData["isTeamLeader"] == "Yes"){
      setIsLeader(true)
      setCurrentCard(prev => prev + 2);
      return;
    }
    if((currentCard==1 && !message) ||(currentCard==1 && formData[cards[1].field] != previousCode ) ){
      //we check for validity of code
      setPreviousCode(formData[cards[1].field])
      setLoading(true)
      const res= await fetch('https://haick24-reg-form.onrender.com/check-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code : formData.codeTeam
        }),
      });
      const response = await res.json()
      if(res.ok){
        setMessage(`your team name is ${response.team}`)
      }else{
        setMessage(`code entered is wrong!`)
      }
      setLoading(false)
      
      return;
    }
    setMessage("")
    if(currentCard == 1 && !theUserIsLeader){
      setCurrentCard(4)
      return;
    }
    if(currentCard == 19 && formData[cards[currentCard].field]== "No"){
      // skip to talk about experience
      setCurrentCard(prev => prev +2);
      return;
    }
    if(currentCard==0 && formData[cards[currentCard].field]== "I don't have a team"){
      setCurrentCard(4);
      return
    }
    if(currentCard == 9 && formData[cards[currentCard].field] == "No"){
      setCurrentCard(13)
      return;
    }
    if (currentCard < cards.length - 1) {
      setCurrentCard((step) => step + 1);
    }else if(currentCard == cards.length - 1){
      //submit 
      onSubmit(formData,setTeamCode,setModalMessage,setShowModal,setIsError)
    }
  };

  const handlePrev = (e) => {
    e.preventDefault()
    if(theUserIsLeader && currentCard==2){
      setCurrentCard(step => step-2);
      return;
    }
    if(!theUserIsLeader && currentCard==4 && formData["isTeamLeader"] == "No" ){
      setCurrentCard(1);
      return;
    }
    if(currentCard==4 && formData["isTeamLeader"] == "I don't have a team"){
      
      setCurrentCard(0);
      return;
    }
    setCurrentCard((prev) => prev - 1);
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.reload()
  };

  return (
    <form className="grid place-items-center mt-16 mx-4">
      <CardInput
        control={control}
        cardInfo={cards[currentCard]}
        currentCard={currentCard}
        register={register}
        trigger={trigger}
        setValue={setValue}
        getValues={getValues}
        setCurrentCard={setCurrentCard}
        errors={errors}
        handleNext={handleNext}
        handlePrev={handlePrev}
        isLoading={loading}
        setFormData={setFormData}
        formData={formData}
        message={message}
      />
       <Modal show={showModal} handleClose={closeModal} message={modalMessage} codeTeam={teamCode} isError={isError} />
    </form>
  );
}
