import { useState, ChangeEvent } from 'react';

type UseFormChangeEventType = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

type UseFormType = <T>(initialForm: T) => [ 
  T,
  (e: UseFormChangeEventType) => void,
  () => void,
];

export const useForm: UseFormType = (initialForm) => {

  const [ form, setForm ] = useState(initialForm);

  const change = (e: UseFormChangeEventType) => {

    setForm({
      ...form,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
    });

  };  

  return [ form, change, () => setForm(initialForm) ];
};