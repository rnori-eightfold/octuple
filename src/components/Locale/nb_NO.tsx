/* eslint-disable no-template-curly-in-string */
import type { Locale } from '../LocaleProvider';
import DatePicker from '../DateTimePicker/DatePicker/Locale/nb_NO';
import Dialog from '../Dialog/BaseDialog/Locale/nb_NO';
import InfoBar from '../InfoBar/Locale/nb_NO';
import Pagination from '../Pagination/Locale/nb_NO';
import Panel from '../Panel/Locale/nb_NO';
import Stepper from '../Stepper/Locale/nb_NO';
import Table from '../Table/Locale/nb_NO';
import TimePicker from '../DateTimePicker/TimePicker/Locale/nb_NO';
import Upload from '../Upload/Locale/nb_NO';

const typeTemplate = '${label} er ikke et gyldig ${type}';

const localeValues: Locale = {
  locale: 'nb',
  global: {
    placeholder: 'Vennligst velg',
  },
  DatePicker,
  Dialog,
  Form: {
    defaultValidateMessages: {
      default: 'Feltvalideringsfeil ${label}',
      required: 'Vennligst skriv inn ${label}',
      enum: '${label} må være en av [${enum}]',
      whitespace: '${label} kan ikke være et blankt tegn',
      date: {
        format: '${label} datoformatet er ugyldig',
        parse: '${label} kan ikke konverteres til en dato',
        invalid: '${label} er en ugyldig dato',
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
        len: '${label} må være ${len} tegn',
        min: '${label} må minst ha ${min} tegn',
        max: '${label} opp til ${max} tegn',
        range: '${label} må være mellom ${min}-${max} tegn',
      },
      number: {
        len: '${label} må være lik ${len}',
        min: '${label} minimumsverdien er ${min}',
        max: '${label} maksimumsverdien er ${max}',
        range: '${label} må være mellom ${min}-${max}',
      },
      array: {
        len: 'Må være ${len} ${label}',
        min: 'Må være minst ${min} ${label}',
        max: 'På det meste ${max} ${label}',
        range: 'Totalt av ${label} må være mellom ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} stemmer ikke overens med mønsteret ${pattern}',
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
