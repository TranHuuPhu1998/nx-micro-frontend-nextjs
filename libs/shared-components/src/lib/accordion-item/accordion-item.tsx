import { AccordionBody, AccordionHeader, AccordionItem, Button } from 'reactstrap';

export interface AccordionItemProps {
  onFetchAllData?: () => void;
  targetId: string;
  children?: React.ReactNode;
  url: string;
  accordionId: string;
  buttonText?: string;
  open?: string;
}

export const BaseAccordionItem = (props: AccordionItemProps) => {
  const { accordionId, targetId, buttonText, children, onFetchAllData, url } = props;

  return (
    <AccordionItem>
      <AccordionHeader targetId={targetId}>
        + <span className='text-success px-1'>GET</span>
        <b>{url}</b>
      </AccordionHeader>
      <AccordionBody accordionId={accordionId}>
        {children}
        {buttonText && (
          <Button block onClick={onFetchAllData}>
            {buttonText}
          </Button>
        )}
      </AccordionBody>
    </AccordionItem>
  );
};
