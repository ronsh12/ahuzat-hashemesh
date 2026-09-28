'use client';
import type { ReactNode } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import s from '../suite.module.css';
export function SuiteDetails({ children }: { children: ReactNode }) {
  return (
    <Accordion className={s.accordion} defaultValue={['room']} multiple>
      {children}
    </Accordion>
  );
}
export function SuiteDetail({
  title,
  value,
  children,
}: {
  title: string;
  value: string;
  children: ReactNode;
}) {
  return (
    <AccordionItem value={value} className={s.detailItem}>
      <AccordionTrigger className={s.detailTrigger}>{title}</AccordionTrigger>
      <AccordionContent className={s.detailContent}>
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}
