import React, { FC, Ref } from 'react';
import {
  Button,
  ButtonIconAlign,
  ButtonProps,
  ButtonShape,
  ButtonSize,
  ButtonTextAlign,
  ButtonVariant,
} from '../';

// TODO: Remove in Octuple v3.0.0, use `<Button variant={ButtonVariant.Default} />` instead.
export const DefaultButton: FC<ButtonProps> = React.forwardRef(
  (
    {
      alignIcon = ButtonIconAlign.Left,
      alignText = ButtonTextAlign.Center,
      allowDisabledFocus = false,
      ariaLabel,
      buttonWidth,
      checked = false,
      classNames,
      counter,
      disabled = false,
      disruptive = false,
      dropShadow = false,
      floatingButtonProps,
      htmlType,
      iconProps,
      nudgeProps,
      onClick,
      text,
      shape = ButtonShape.Pill,
      size = ButtonSize.Medium,
      split,
      splitButtonChecked,
      splitButtonProps,
      style,
      toggle,
      ...rest
    },
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <Button
        {...rest}
        ref={ref}
        alignIcon={alignIcon}
        alignText={alignText}
        allowDisabledFocus={allowDisabledFocus}
        ariaLabel={ariaLabel}
        buttonWidth={buttonWidth}
        checked={checked}
        classNames={classNames}
        counter={counter}
        disabled={disabled}
        dropShadow={dropShadow}
        floatingButtonProps={floatingButtonProps}
        htmlType={htmlType}
        iconProps={iconProps}
        nudgeProps={nudgeProps}
        onClick={onClick}
        shape={shape}
        size={size}
        split={split}
        splitButtonChecked={splitButtonChecked}
        splitButtonProps={splitButtonProps}
        style={style}
        text={text}
        toggle={toggle}
        variant={ButtonVariant.Default}
      />
    );
  }
);
