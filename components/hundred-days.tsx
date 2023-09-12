"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import  HundredPattern  from './hundred-pattern';
import {hundredDaysData} from '@/lib/data'


export default function HundredDays() {

  const {ref} = useSectionInView("#100Dias",1); 


  return (
    <section id="100Dias" ref={ref} className='sm:mb-20 scroll-mt-28' >
       <SectionHeading># 100 Dias de Código 📚 💻 </SectionHeading>

      <p className='px-4 py-4 text-2xl font-bold !leading-[1.5] sm:text-2xl
        mb-28 max-w-[50rem] text-center sm:mb-0 text-[#f3f3f3]'>
      <span className='font-bold'>Este projetinho foi feito durante os</span> <span className='text-[#782BF1]'>#100DiasDeCodigo! </span>
      <span>Não sabe o que é isso ? A gente vai resumir o que der aqui, mas o Daniel explica
      <span><a  className=" hover:text-[#782BF1] hover:underline italic " href="https://www.100diasdecodigo.dev/" target="_blank">{" "} bem melhor.</a></span></span>{" "}
      <span className='font-bold'>Podemos resumir os #100Dias em três simples passos:</span>
      </p>
     
     <div className='px-4 py-4 text-2xl font-bold !leading-[1.5] sm:text-2xl
        mb-28 max-w-[50rem] text-center sm:mb-0 text-[#f3f3f3]' >
        {hundredDaysData.map((item, idx) => (
           <HundredPattern 
           key ={idx} 
           data_queue ={item.queue}
           data_title = {item.title}
           data_details={item.details} />
        ))}
     </div>
  
    </section>
    );
}
