import { BaseAccordionItem } from '@nx-shared-components';
import { SERVICES_latest } from '@nx-nextjs/api-services';
import { ICurrenciesFeature, IConvertCurrencies } from '@nx-nextjs/interfaces';
import { Row, Col, Label, Input, Button, InputGroup, Form, InputGroupText } from 'reactstrap';
import { Mail, User } from 'react-feather';
import { Controller, useForm } from 'react-hook-form';

export const CurrenciesLatest = ({ setListSymbols }) => {
  const { control, handleSubmit } = useForm();

  return (
    <BaseAccordionItem targetId='3' url={ICurrenciesFeature.CURRENCIES_LATEST} accordionId='3'>
      <Form
        className='mb-2'
        onSubmit={handleSubmit((value: IConvertCurrencies) =>
          SERVICES_latest<IConvertCurrencies>(value, setListSymbols)
        )}
      >
        <Row>
          <Col sm='12' className='mb-2'>
            <Label className='form-label' for='nameVerticalIcons'>
              Base:
            </Label>
            <InputGroup className='input-group-merge'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
              <Controller
                control={control}
                name='base'
                render={({ field }) => <Input type='number' name='base' id='base' placeholder='0' {...field} />}
              />
            </InputGroup>
            <small>
              <b className='bold'>REQUIRED</b>:Enter the three-letter currency code of your preferred base currency.
            </small>
          </Col>
          <Col sm='12' className='mb-2'>
            <Label className='form-label' for='EmailVerticalIcons'>
              Symbols:
            </Label>
            <InputGroup className='input-group-merge'>
              <InputGroupText>
                <Mail size={15} />
              </InputGroupText>
              <Controller
                control={control}
                name='symbols'
                render={({ field }) => <Input type='text' name='symbols' id='symbols' placeholder='EUR' {...field} />}
              />
            </InputGroup>
            <small>
              <b className='bold'>REQUIRED</b>:Enter a list of comma-separated currency codes to limit output
              currencies.
            </small>
          </Col>
          <Col sm='12'>
            <div className='d-flex'>
              <Button className='me-1' color='primary' type='submit'>
                Submit
              </Button>
              <Button outline color='secondary' type='reset'>
                Reset
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </BaseAccordionItem>
  );
};
