import * as yup from 'yup';

export const performanceAssessmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  usage_duration: yup.number().integer().required(),
  total_mileage: yup.number().integer().required(),
  average_speed: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
