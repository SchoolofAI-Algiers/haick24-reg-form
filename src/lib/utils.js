import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const onSubmit = async (data,setTeamCode,setModalMessage,setShowModal,setIsError) => {
  try {
    const response = await fetch('http://localhost:3001/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      if (result.codeTeam) {
        setTeamCode(result.codeTeam);
        setModalMessage('Form submission saved');
        setShowModal(true);
      }
    } else {
    setIsError(true)
    }
  } catch (error) {
    setIsError(true)
  }
};