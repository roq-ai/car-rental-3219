import * as yup from 'yup';

export const vehicleUsageValidationSchema = yup.object().shape({
  date: yup.date().required(),
  duration: yup.number().integer().required(),
  mileage: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
