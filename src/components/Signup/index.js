import React from 'react'
import {Container, FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text} from './SignupElement'


const SignUp = () => {
  return (
      <>
   <Container>
       <FormWrap>
           <Icon to="/">Digismart</Icon>
           <FormContent>
               <Form action="#">
                   <FormH1>Sign in to your account</FormH1>
                   <FormLabel htmlFor='for'>Full Name</FormLabel>
                   <FormInput type='name' required/>
                   <FormLabel htmlFor='for'>Class</FormLabel>
                   <FormInput type='name' required/>
                   <FormLabel htmlFor='for'>ID</FormLabel>
                   <FormInput type='value' required/>
                   
                   <FormButton type='submit'>Continue</FormButton>
                   <Text>Forgot password</Text>
                  
               </Form>
           </FormContent>
       </FormWrap>
   </Container>
   </>
  )
}

export default SignUp