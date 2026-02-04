import {describe, expect, it} from 'vitest'
import {render,screen}from '@testing-library/react'
import LoginPage from './login';


describe('Login page', () => { 
    it('should render the login form', () => {
        render(<LoginPage />)
        //get by throws ans errore if element not found
        //find by returns null if element not found
        //query by returns null if element not found
        expect(screen.getByText("Sign in")).toBeInTheDocument();
        expect(screen.getByLabelText("Username")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Log in"}  
        )).toBeInTheDocument();
        expect(screen.getByRole("checkbox", {name: "Remember me"}  
        )).toBeInTheDocument();
        expect(screen.queryByText("Forget Password")).toBeInTheDocument();
    })
 
}); 
    