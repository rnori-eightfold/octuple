/* eslint-disable no-template-curly-in-string */
import type { Locale } from '../LocaleProvider';
import DatePicker from '../DateTimePicker/DatePicker/Locale/en_GB';
import Dialog from '../Dialog/BaseDialog/Locale/en_GB';
import InfoBar from '../InfoBar/Locale/en_GB';
import Pagination from '../Pagination/Locale/en_GB';
import Panel from '../Panel/Locale/en_GB';
import Stepper from '../Stepper/Locale/en_GB';
import Table from '../Table/Locale/en_GB';
import TimePicker from '../DateTimePicker/TimePicker/Locale/en_GB';
import Upload from '../Upload/Locale/en_GB';

const typeTemplate = '${label} is not a valid ${type}';

const localeValues: Locale = {
  locale: 'en-gb',
  global: {
    placeholder: 'Select',
  },
  DatePicker,
  Dialog,
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      default: 'Field validation error for ${label}',
      required: '${label} is required',
      enum: '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date',
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters',
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}',
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}',
      },
    },
  },
  InfoBar,
  Pagination,
  Panel,
  Stepper,
  Table,
  TimePicker,
  Upload,
};

export default localeValues;
