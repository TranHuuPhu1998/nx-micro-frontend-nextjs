// https://github.dev/apitable/apitable
import { WarningTriangleNonzeroFilled, CloseMiddleOutlined } from '@apitable/icons';
import { Box, IconButton } from '@nx-shared-components';
import { textBrandDefault, textDangerDefault, textWarnDefault, textSuccessDefault } from '@nx-shared-constants';
import React, { useState } from 'react';
import { IAlertProps } from './interface';
import { AlertInner, AlertWrapper } from './styled';
import { IIconProps } from '@apitable/icons';

export const Alert = ({
  type = 'default',
  title,
  content,
  closable = false,
  onClose,
  style,
  className,
}: IAlertProps) => {
  const [hidden, setHidden] = useState(false);

  const iconMap: { [key: string]: React.FC<IIconProps> } = {
    default: WarningTriangleNonzeroFilled,
    error: WarningTriangleNonzeroFilled,
    warning: WarningTriangleNonzeroFilled,
    success: WarningTriangleNonzeroFilled,
  };
  const colorMap: { [key: string]: string } = {
    default: textBrandDefault,
    error: textDangerDefault,
    warning: textWarnDefault,
    success: textSuccessDefault,
  };

  const Icon = iconMap[type];
  const AlertInnerComponent = title ? AlertInner : React.Fragment;
  const iconSize = title ? 24 : 16;

  const handleClose = () => {
    setHidden(true);
    onClose && onClose();
  };
  if (hidden) {
    return null;
  }
  return (
    <AlertWrapper title={title} type={type} style={style} className={className}>
      <AlertInnerComponent>
        <Icon size={iconSize} color={colorMap[type]} />
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='flex-start'
          mx='4px'
          width='100%'
        >
          {title && <h6> {title} </h6>}
          <p> {content} </p>
        </Box>
        {closable && <IconButton size={'small'} onClick={handleClose} icon={CloseMiddleOutlined} />}
      </AlertInnerComponent>
    </AlertWrapper>
  );
};
