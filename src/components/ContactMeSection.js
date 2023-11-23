import "../App.css";
import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    //In this case we call the formik object properties or methods through formik.prop OR formik.method
    //Or const {values, onSubmit, errors, ...} = useFormik => Destructuring
    //In this case we will call the formik object properties or methods through prop OR method directly
    initialValues: {
      firstName: "",
      email: "",
      type: "Freelance project proposal",
      comment: ""
    },
    onSubmit: (values) => {
      console.log(values)
      submit("url if available, if not, so at least empty string('') to compensate the submit functoin argument",values)
      {/**
        if (response) {
          onOpen(response.type, response.message)
          if (response === success) {
            formik.resetForm()
          }
        }
      */}
      if (response.type === 'success') {
        onOpen(response.type, response.message)
        formik.resetForm()
      }
      if (response.type === 'error') {
        onOpen(response.type, response.message)
      }}
      
      ,
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().min("25").required("Required")
    }),
  });

  {/**
  useEffect (()=>{
  if (response.type === 'success') {
      onOpen(response.type, response.message)
      formik.resetForm()
    }
    if (response.type === 'error') {
      onOpen(response.type, response.message)
    }}, [response])

But it has a problem that it gives alert directly after page loading even without submission
I was not able to solve this issue
*/}

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={(formik.errors.firstName && formik.touched.firstName)? true : false}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                 {/** The prop 'htmlFor' is the same as attribute'for' in HTML.
                 * It is used for labels to link them to there inputs (using input id).
                 * So when clicking on this lable is the same as clicking on the input.
                 * It is especially helpful for checkboxes and radio buttons.
                 */}
                <Input 
                  id="firstName"
                  name="firstName"
                  // value={formik.values.firstName}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  {...formik.getFieldProps("firstName")}
                  // className={formik.errors.firstName && formik.touched.firstName && "input-alert"}
                />
                {/* {(formik.errors.firstName && formik.touched.firstName)? <p>{formik.errors.firstName}</p> : null} */}
                {/* {formik.errors.firstName && formik.touched.firstName && <p>{formik.errors.firstName}</p>} */}
                <FormErrorMessage >{formik.errors.firstName}</FormErrorMessage>
                {/* <FormErrorMessage style={{Add any style you prefer to the message}}>{formik.errors.firstName}</FormErrorMessage> */}
              </FormControl>
              <FormControl isInvalid={(formik.errors.email && formik.touched.email)? true : false}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  // value={formik.values.email}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  {...formik.getFieldProps("email")}
                  // className={formik.errors.email && formik.touched.email && "input-alert"}
                />
                {/* {(formik.errors.email && formik.touched.email)? <p>{formik.errors.email}</p> : null} */}
                {/* {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>} */}
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                id="type"
                name="type"
                // value={formik.values.type}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                {...formik.getFieldProps("type")}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={(formik.errors.comment && formik.touched.comment)? true : false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  // value={formik.values.comment}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  {...formik.getFieldProps("comment")}
                  // className={formik.errors.comment && formik.touched.comment && "input-alert"}
                />
                {/* {(formik.errors.comment && formik.touched.comment)? <p>{formik.errors.comment}</p> : null} */}
                {/* {formik.errors.comment && formik.touched.comment && <p>{formik.errors.comment}</p>} */}
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full"  isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
