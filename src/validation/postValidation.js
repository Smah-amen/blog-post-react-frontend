import * as Yup from "yup";
export const postValidationSchema = Yup.object().shape({
    title: Yup.string().required(),
    imgUrl: Yup.string().url().required(),
    description: Yup.string().required(),
});
