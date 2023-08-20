import { BaseAccordionItem } from '@nx-shared-components';
import { Row, Col, Label, Input, Button, InputGroup, Form, InputGroupText } from 'reactstrap';
import { Lock, Mail, Smartphone, User } from 'react-feather';
import { Controller, useForm } from 'react-hook-form';
import { SERVICES_convert } from '@nx-nextjs/api-services';
import { IConvertCurrencies, ICurrenciesFeature } from '@nx-nextjs/interfaces';

export const ConvertCurrencies = ({ setListSymbols }) => {
  const { control, handleSubmit } = useForm();
  return (
    <BaseAccordionItem targetId='4' url={ICurrenciesFeature.CURRENCIES_CONVERT} accordionId='4'>
      <Form
        className='mb-2'
        onSubmit={handleSubmit((value: IConvertCurrencies) =>
          SERVICES_convert<IConvertCurrencies>(value, setListSymbols)
        )}
      >
        <Row>
          <Col sm='12' className='mb-2'>
            <Label className='form-label' for='nameVerticalIcons'>
              Amount:
            </Label>
            <InputGroup className='input-group-merge'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
              <Controller
                control={control}
                name='amount'
                render={({ field }) => <Input type='number' name='amount' id='amount' placeholder='0' {...field} />}
              />
            </InputGroup>
            <small>
              <b className='bold'>REQUIRED</b>:The amount to be converted.
            </small>
          </Col>
          <Col sm='12' className='mb-2'>
            <Label className='form-label' for='EmailVerticalIcons'>
              From:
            </Label>
            <InputGroup className='input-group-merge'>
              <InputGroupText>
                <Mail size={15} />
              </InputGroupText>
              <Controller
                control={control}
                name='from'
                render={({ field }) => <Input type='text' name='from' id='from' placeholder='EUR' {...field} />}
              />
            </InputGroup>
            <small>
              <b className='bold'>REQUIRED</b>:The three-letter currency code of the currency you would like to convert
              from.
            </small>
          </Col>
          <Col sm='12' className='mb-2'>
            <Label className='form-label' for='IconsMobile'>
              To:
            </Label>
            <InputGroup className='input-group-merge'>
              <InputGroupText>
                <Smartphone size={15} />
              </InputGroupText>
              <Controller
                control={control}
                name='to'
                render={({ field }) => <Input type='text' name='to' id='to' placeholder='GBP' {...field} />}
              />
            </InputGroup>
            <small>
              <b className='bold'>REQUIRED</b>:The three-letter currency code of the currency you would like to convert
              to.
            </small>
          </Col>
          <Col sm='12' className='mb-2'>
            <Label className='form-label' for='IconsPassword'>
              Date:
            </Label>
            <InputGroup className='input-group-merge'>
              <InputGroupText>
                <Lock size={15} />
              </InputGroupText>
              <Controller
                control={control}
                name='date'
                render={({ field }) => <Input type='text' name='date' id='date' placeholder='YYYY-MM-DD' {...field} />}
              />
            </InputGroup>
            <small>
              <b className='bold'>REQUIRED</b>:Specify a date (format YYYY-MM-DD) to use historical rates for this
              conversion.
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
